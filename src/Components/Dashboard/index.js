import React from "react";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(10),
		"& .dashboard-banner": {
			background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
			borderRadius: theme.shape.borderRadius5,
			padding: theme.spacing(6),
			"& .dashboard-title":{
				color: theme.palette.text.light,
				fontSize: theme.typography.customFont2,
				fontWeight: theme.typography.fontWeightBold,
				marginBottom: theme.spacing(2),
			},
			"& .dashboard-description":{
				color: theme.palette.text.light,
				fontWeight: theme.typography.fontWeightMedium,
				marginBottom: theme.spacing(2),
			},
			"& a":{
				color: theme.palette.text.light,
				fontWeight: theme.typography.fontWeightSemiBold,
				textDecoration: "underline",
				transition: theme.transitions.easing.easeOut,
				"&:hover":{
					color: theme.palette.secondary.main,
				},
			},
		},
	},
}));

const Dashboard = (data) => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Typography component="div" className="dashboard-banner">
				<Typography variant="h2" component="h2" className="dashboard-title">
					Welcome, {data?.name}
				</Typography>
				<Typography className="dashboard-description">
					A platform for everyone to shop easily with simple step and home delivery all over Nepal.
				</Typography>
				<Link to="/list">
					Go To Shopping
				</Link>
			</Typography>
		</section>
	)
}

export default Dashboard;