import React, {useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { CallApi } from "../../Context/ApiContext";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .address-info-form": {
			"& .MuiFormControl-root": {
				marginBottom: theme.spacing(6),
				"& .MuiFormLabel-root": {
					fontFamily: "unset",
					"&.Mui-focused": {
						color: theme.palette.primary.main,
					},
				},
				"& .MuiInputBase-root": {
					borderRadius: theme.shape.borderRadius4,
					color: theme.palette.text.descriptionText,
					"& .MuiInputAdornment-root": {
						color: theme.palette.text.descriptionText,
					},
					"&.Mui-focused": {
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: theme.palette.primary.main,
							borderWidth: "1px",
						},
					},
				},
			},
			"& .MuiButtonBase-root": {
				background: theme.palette.primary.main,
				borderRadius: theme.shape.borderRadius4,
				minWidth: "120px",
				boxShadow: theme.shadows[1],
				padding: theme.spacing(2),
				width: "100%",
				margin: theme.spacing(0, "auto"),
				display: "flex !important",
				justifyContent: "center",
			},
		},
	},
}));

const AddressInfoForm = (data) => {
	const [values, setValues] = useState({
		province: '',
		district: '',
		municipality: '',
		wardNumber: '',
		street: '',
		type: 'Shipping Address',
	});
	const classes = useStyles();

	useEffect(() => {
		setValues({
			province:data?.address?.province,
			district:data?.address?.district,
			municipality: data?.address?.municipality,
			wardNumber: data?.address?.wardNumber,
			street: data?.address?.street,
		})
	  }, []);

	const handleChange = (prop) => (event) => {
		setValues({...values, [prop]: event.target.value});
	};

	const updateAddress = (event) =>{
		event.preventDefault();
    	// Submit the form data to the server
		const payload = values;

		CallApi("common/update-shipping-address", payload)
		.then((response) => {
			if (response?.data?.success) {
			toast.success(response?.data?.message, {
				position: toast.POSITION.TOP_RIGHT,
			});
			} else {
			toast.error(response?.data?.message, {
				position: toast.POSITION.TOP_RIGHT,
			});
			}
		}).finally(()=>{
			
		})
	}

	return (
		<section className={classes.root}>
			<Box component="form" className="address-info-form" onSubmit={updateAddress}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="province">Province</InputLabel>
					<OutlinedInput type="text" value={values.province} onChange={handleChange('province')}
						name="province" endAdornment={
							<InputAdornment position="end" aria-label="toggle password visibility">
								<FmdGoodOutlinedIcon/>
							</InputAdornment>
						}
						label="Province"
					/>
				</FormControl>
				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="district">District</InputLabel>
					<OutlinedInput type="text" value={values.district} onChange={handleChange('district')} name="district"
						endAdornment={
							<InputAdornment position="end" aria-label="toggle password visibility">
								<FmdGoodOutlinedIcon/>
							</InputAdornment>
						}
						label="District"
					/>
				</FormControl>
				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="municipality">Municipality</InputLabel>
					<OutlinedInput type="text" value={values.municipality} onChange={handleChange('municipality')}
						name="municipality" endAdornment={
							<InputAdornment position="end" aria-label="toggle password visibility">
								<FmdGoodOutlinedIcon/>
							</InputAdornment>
						}
						label="Municipality"
					/>
				</FormControl>
				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="wardNumber">Ward Number</InputLabel>
					<OutlinedInput type="text" value={values.wardNumber} onChange={handleChange('wardNumber')} name="area"
						endAdornment={
							<InputAdornment position="end" aria-label="toggle password visibility">
								<FmdGoodOutlinedIcon/>
							</InputAdornment>
						}
						label="Ward Number"
					/>
				</FormControl>
				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="streetNmae">Street Name</InputLabel>
					<OutlinedInput type="text" value={values.street} onChange={handleChange('street')} name="streetNmae"
						endAdornment={
							<InputAdornment position="end" aria-label="toggle password visibility">
								<FmdGoodOutlinedIcon/>
							</InputAdornment>
						}
						label="Street"
					/>
				</FormControl>

				<Button variant="contained" type="submit">
					Save Changes
				</Button>
			</Box>
		</section>
	)
}

export default AddressInfoForm;