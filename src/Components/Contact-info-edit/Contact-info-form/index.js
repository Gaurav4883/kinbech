import React, {useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import { CallApi } from "../../Context/ApiContext";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .contact-info-form": {
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

const ContactInfoForm = (data) => {
	const [values, setValues] = useState({
		email: '',
		mobileNumber: '',
	});
	

	const classes = useStyles();

	const handleChange = (prop) => (event) => {
		setValues({...values, [prop]: event.target.value});
	};

	useEffect(() => {
	setValues({
		email: data?.contact?.email,
		mobileNumber: data?.contact?.mobileNumber,
	})
	}, []);

	const updateContact = (event) =>{
		event.preventDefault();
    	// Submit the form data to the server
		const payload = values;

	CallApi("common/update-contact", payload)
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
			<Box component="form" className="contact-info-form" onSubmit={updateContact}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="email">Email</InputLabel>
					<OutlinedInput type="text" value={values.email} onChange={handleChange('email')} name="email"
						endAdornment={
							<InputAdornment position="end" aria-label="toggle password visibility">
								<MailRoundedIcon/>
							</InputAdornment>
						}
						label="Email"
					/>
				</FormControl>
				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="mobileNumber">Mobile No.</InputLabel>
					<OutlinedInput type="text" value={values.mobileNumber} onChange={handleChange('mobileNumber')}
						name="mobileNumber" endAdornment={
							<InputAdornment position="end" aria-label="toggle password visibility">
								<PermPhoneMsgRoundedIcon/>
							</InputAdornment>
						}
						label="Mobile Number"
					/>
				</FormControl>
				<Button variant="contained" type="submit">
					Save Changes
				</Button>
			</Box>
		</section>
	)
}

export default ContactInfoForm;