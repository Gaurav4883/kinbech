import React from "react";
import Image from "./../../Assets/Images/logo-2.png";
import {makeStyles} from "@mui/styles";
import {Container, Divider, Grid, Typography} from "@mui/material";
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(10, 0),
		background: "rgb(240 253 244)",
		"& .footer": {
			"& .MuiGrid-root": {
				"& .MuiGrid-item": {
					width: "100%",
					"& .logo-holder": {
						"& img": {
							maxHeight: "60px",
							marginBottom: theme.spacing(2),
						},
						"& .slogan": {
							color: theme.palette.text.descriptionText,
							lineHeight: 1.7,
						},
						"& .support-call": {
							"& .icon-holder": {
								lineHeight: 0,
								"& .MuiSvgIcon-root": {
									fontSize: theme.typography.h1,
									color: theme.palette.secondary.main,
								},
							},
							"& .text-holder": {
								"& .question-text": {
									fontSize: theme.typography.h5,
									color: theme.palette.text.descriptionText,
								},
								"& .phone-number": {
									fontSize: theme.typography.h3,
									color: theme.palette.text.gray,
									fontWeight: theme.typography.fontWeightSemiBold,
									transition: theme.transitions.easing.easeOut,
									"&:hover": {
										color: theme.palette.secondary.main,
									},
								},
							},
						},
					},
					"& .footer-title": {
						color: theme.palette.text.gray,
						fontSize: theme.typography.h3,
						fontWeight: theme.typography.fontWeightSemiBold,
					},
					"& .useful-links": {
						"& ul": {
							margin: 0,
							padding: 0,
							"& li": {
								listStyle: "none",
								"&:not(:last-child)": {
									marginBottom: theme.spacing(3),
								},
								"& a": {
									color: theme.palette.text.descriptionText,
									transition: theme.transitions.easing.easeOut,
									"&:hover": {
										color: theme.palette.secondary.main,
									},
								},
							},
						},
					},
				},
			},
			"& .footer-bottom":{
				"& .coy-right-text":{
					fontSize: theme.typography.h4,
					color: theme.palette.text.descriptionText,
				},
			},
		},
	},
}));

const usefulLink = [
	{
		label: "About Demo",
	},
	{
		label: "Our Services",
	},
	{
		label: "How to shop on Demo",
	},
	{
		label: "FAQ",
	},
	{
		label: "Contact us",
	},
];

const customerService = [
	{
		label: "Payment Methods",
	},
	{
		label: "Money-back guarantee!",
	},
	{
		label: "Returns",
	},
	{
		label: "Shipping",
	},
	{
		label: "Terms and conditions",
	},
	{
		label: "Privacy Policy",
	},
];

const community = [
	{
		label: "Discussion Forums",
	},
	{
		label: "Code of Conduct",
	},
	{
		label: "Contributing",
	},
	{
		label: "API Reference",
	},
];

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.root}>
			<Container className="footer">
				<Grid container spacing={3}>
					<Grid item lg={3} md={12} sm={12}>
						<Typography component="div" className="logo-holder">
							<img src={Image} alt="img"/>
							<Typography className="slogan" sx={{mb: 2}}>
								Customer satisfaction is our main goal.
							</Typography>
							<Typography
								component="div"
								className="support-call"
								display="flex"
								alignItems="center"
								gap={1}
								sx={{
									border: `1px solid #eee`,
									borderRadius: "15px",
									p: 1,
								}}>
								<Typography component="div" className="icon-holder">
									<PermPhoneMsgOutlinedIcon/>
								</Typography>
								<Typography component="div" className="text-holder">
									<Typography variant="h6" className="question-text">
										Got Question? Call us 24/7
									</Typography>
									<a href="tel: 1234567890" className="phone-number">
									+977-9863593274
									</a>
								</Typography>
							</Typography>
						</Typography>
					</Grid>
					<Grid item lg={3} md={12} sm={12}>
						<Typography variant="h1" className="footer-title" sx={{mb: 3}}>
							Useful Links
						</Typography>
						<Typography component="div" className="useful-links">
							<ul>
								{
									usefulLink.map((item, i) => {
										return (
											<li key={i + "__"}>
												<Link to="#">
													{item.label}
												</Link>
											</li>
										)
									})
								}
							</ul>
						</Typography>
					</Grid>
					<Grid item lg={3} md={12} sm={12}>
						<Typography variant="h1" className="footer-title" sx={{mb: 3}}>
							Customer Service
						</Typography>
						<Typography component="div" className="useful-links">
							<ul>
								{
									customerService.map((item, i) => {
										return (
											<li key={i + "__"}>
												<Link to="#">
													{item.label}
												</Link>
											</li>
										)
									})
								}
							</ul>
						</Typography>
					</Grid>
					<Grid item lg={3} md={12} sm={12}>
						<Typography variant="h1" className="footer-title" sx={{mb: 3}}>
							Community
						</Typography>
						<Typography component="div" className="useful-links">
							<ul>
								{
									community.map((item, i) => {
										return (
											<li key={i + "__"}>
												<Link to="#">
													{item.label}
												</Link>
											</li>
										)
									})
								}
							</ul>
						</Typography>
					</Grid>
				</Grid>
				<Divider sx={{borderColor: "#eee", my: 6}}/>
				<Typography component="div" className="footer-bottom">
					<Typography variant="h6"  className="coy-right-text" align="center">
						Copyright © {new Date().getFullYear()} Kinbech Market. All Rights Reserved.
					</Typography>
				</Typography>
			</Container>
		</footer>
	)
}

export default Footer;