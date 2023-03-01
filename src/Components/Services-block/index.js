import React from "react";
import Image from "./../../Assets/Images/rocket.svg";
import Image2 from "./../../Assets/Images/return.svg";
import Image3 from "./../../Assets/Images/offer.svg";
import Image4 from "./../../Assets/Images/support.svg";
import {makeStyles} from "@mui/styles";
import {Container, Grid, Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .service-block": {
			background: "rgb(239 246 255)",
				borderRadius: theme.shape.borderRadius5,
				padding: theme.spacing(10),
			"& .service-block-bg": {
				"& .MuiGrid-root": {
					"& .MuiGrid-item": {
						"& .service-list": {
							"& .icon-holder": {
								"& img": {
									maxHeight: "40px",
								},
							},
							"& .text-holder": {
								"& .title": {
									fontSize: theme.typography.h3,
									color: theme.palette.text.gray,
									fontWeight: theme.typography.fontWeightSemiBold,
								},
								"& .sub-title": {
									fontSize: theme.typography.h4,
									color: theme.palette.text.descriptionText,
								},
							},
						},
					},
				},
			},
		},
	},
}));

const serviceData = [
	{
		title: "Free Shipping",
		subtitle: "Orders $50 or more",
		image: Image,
	},
	{
		title: "Free Returns",
		subtitle: "Within 30 days",
		image: Image2,
	},
	{
		title: "Get 20% Off 1 Item",
		subtitle: "When you sign up",
		image: Image3,
	},
	{
		title: "We Support",
		subtitle: "24/7 amazing services",
		image: Image4,
	},
];

const ServiceBlock = () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Container className="service-block">
				<Typography component="div" className="service-block-bg">
					<Grid container spacing={3}>
						{
							serviceData.map((item, i) => {
								return (
									<Grid item lg={3} md={6} sm={6} key={i + "__"}>
										<Typography component="div" className="service-list" display="flex"
										            alignItems="center" gap={2}>
											<Typography component="div" className="icon-holder">
												<img src={item.image} alt="img"/>
											</Typography>
											<Typography component="div" className="text-holder">
												<Typography variant="h1" className="title" mb={1}>
													{item.title}
												</Typography>
												<Typography variant="h6" className="sub-title">
													{item.subtitle}
												</Typography>
											</Typography>
										</Typography>
									</Grid>
								)
							})
						}
					</Grid>
				</Typography>
			</Container>
		</section>
	)
}

export default ServiceBlock;