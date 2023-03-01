import React, {useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import {Button, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import { CallApi } from "../../Context/ApiContext";
import { toast, ToastContainer } from "react-toastify";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .profile-edit-form": {
			"& .MuiGrid-root": {
				"& .MuiGrid-item": {
					width: "100%",
					"& .MuiBox-root": {
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
							background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
							borderRadius: theme.shape.borderRadius4,
							minWidth: "120px",
							boxShadow: "none",
							padding: theme.spacing(2),
							textTransform: "capitalize",
						},
					},
				},
			},
		},
	}
}));

const ProfileEditForm = (data) => {
	data = data?.data;
	const [values, setValues] = useState({
		name: '',
		mobileNumber: '',
		email: '',
		province: '',
		district: '',
		municipality: '',
		district: '',
		wardNumber: '',
		street: '',

	});
	const classes = useStyles();

	const handleChange = (prop) => (event) => {
		setValues({...values, [prop]: event.target.value});
	};

	useEffect(() => {
		setValues(
			{
		name: data?.name,
		mobileNumber: data?.mobileNumber,
		email: data?.email,
		province: data?.address?.province,
		district: data?.address?.district,
		municipality: data?.address?.municipality,
		wardNumber: data?.address?.wardNumber,
		street: data?.address?.street,
			}
		)
	}, []);

	const updateProfileInformation = (event) =>{
		event.preventDefault();
		CallApi("user/update-basic", values)
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
		})
		return;
	}
	return (
		<section className={classes.root}>
			<ToastContainer/>
			<Typography component="div" className="profile-edit-form">
				<Grid container>
					<Grid item lg={12} md={12} sm={12}>
						<Box component="form" autoComplete="off" onSubmit = {updateProfileInformation}>
							<FormControl variant="outlined" fullWidth>
								<InputLabel htmlFor="name">Full Name</InputLabel>
								<OutlinedInput
									type="text"
									value={values.name}
									onChange={handleChange('name')}
									name="name"
									endAdornment={
										<InputAdornment position="end" aria-label="toggle password visibility">
											<PersonRoundedIcon/>
										</InputAdornment>
									}
									label="Full Name"
								/>
							</FormControl>
							
							
							<FormControl variant="outlined" fullWidth>
								<InputLabel htmlFor="mobileNumber">Mobile No.</InputLabel>
								<OutlinedInput
									type="phone"
									value={values.mobileNumber}
									onChange={handleChange('mobileNumber')}
									name="mobileNumber"
									endAdornment={
										<InputAdornment position="end" aria-label="toggle password visibility">
											<PhoneIphoneRoundedIcon/>
										</InputAdornment>
									}
									label="Mobile No."
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<InputLabel htmlFor="email">Email</InputLabel>
								<OutlinedInput
									type="email"
									value={values.email}
									onChange={handleChange('email')}
									name="email"
									endAdornment={
										<InputAdornment position="end" aria-label="toggle password visibility">
											<MailRoundedIcon/>
										</InputAdornment>
									}
									label="Email"
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<InputLabel htmlFor="province">Province</InputLabel>
								<OutlinedInput
									type="text"
									value={values.province}
									onChange={handleChange('province')}
									name="province"
									endAdornment={
										<InputAdornment position="end" aria-label="toggle password visibility">
											<LocationOnRoundedIcon/>
										</InputAdornment>
									}
									label="Province"
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<InputLabel htmlFor="district">District</InputLabel>
								<OutlinedInput
									type="text"
									value={values.district}
									onChange={handleChange('district')}
									name="district"
									endAdornment={
										<InputAdornment position="end" aria-label="toggle password visibility">
											<LocationOnRoundedIcon/>
										</InputAdornment>
									}
									label="District"
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<InputLabel htmlFor="Municipality">Municipality</InputLabel>
								<OutlinedInput
									type="text"
									value={values.municipality}
									onChange={handleChange('municipality')}
									name="municipality"
									endAdornment={
										<InputAdornment position="end" aria-label="toggle password visibility">
											<LocationOnRoundedIcon/>
										</InputAdornment>
									}
									label="Municipality"
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<InputLabel htmlFor="wardNumber">Ward Number</InputLabel>
								<OutlinedInput
									type="text"
									value={values.wardNumber}
									onChange={handleChange('wardNumber')}
									name="wardNumber"
									endAdornment={
										<InputAdornment position="end" aria-label="toggle password visibility">
											<LocationOnRoundedIcon/>
										</InputAdornment>
									}
									label="Ward Number"
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<InputLabel htmlFor="street">Street</InputLabel>
								<OutlinedInput
									type="text"
									value={values.street}
									onChange={handleChange('street')}
									name="street"
									endAdornment={
										<InputAdornment position="end" aria-label="toggle password visibility">
											<LocationOnRoundedIcon/>
										</InputAdornment>
									}
									label="Street"
								/>
							</FormControl>
							<Button variant="contained" type="submit">
								Save Changes
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Typography>
		</section>
	)
}

export default ProfileEditForm;