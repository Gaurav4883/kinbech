import React from 'react';
import {makeStyles} from "@mui/styles";
import LoginForm from "./Login-form";
import {Container, Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		padding: theme.spacing(0, 4, 4),
		"& .login": {
			background: "#fff",
			boxShadow: theme.shadows[0],
			borderRadius: theme.shape.borderRadius5,
			padding: theme.spacing(10),
			"& .title": {
				fontWeight: theme.typography.fontWeightSemiBold,
				color: theme.palette.text.gray,
				marginBottom: theme.spacing(3),
			},
		},
		"@media(max-width: 600px)": {
			marginTop: theme.spacing(20),
			"& .login": {
				padding: theme.spacing(4),
				"& .title": {
					fontSize: theme.typography.h3,
				},
			},
		},
		"@media(min-width: 768px)": {
			marginTop: theme.spacing(20),
			"& .login": {
				padding: theme.spacing(4),
				"& .title": {
					fontSize: theme.typography.h3,
				},
			},
		},
		"@media(min-width: 992px)": {
			marginTop: theme.spacing(0),
			"& .login": {
				padding: theme.spacing(10),
				maxWidth: "600px",
				"& .title": {
					fontSize: theme.typography.h2,
				},
			},
		},
	},
}));

const Login = () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Container className="login">
				<Typography variant="h1" className="title">
					Welcome to Kin Bech Please login.
				</Typography>
				<LoginForm/>
			</Container>
		</section>
	);
}

export default Login;