import React from "react";
import Image from "./../../Assets/Images/bg2.jpg";
import Image2 from "./../../Assets/Images/bg.jpg";
import Image3 from "./../../Assets/Images/23.jpg";
import {makeStyles} from "@mui/styles";
import {Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .recent-booking-title": {
			fontSize: theme.typography.h2,
			fontWeight: theme.typography.fontWeightBold,
			color: theme.palette.text.gray,
			marginBottom: theme.spacing(6),
		},
		"& .recent-booking-list": {
			"&:not(:last-child)": {
				borderBottom: "1px solid #DDDDDD",
				marginBottom: theme.spacing(5),
				paddingBottom: theme.spacing(5),
			},
			"& .MuiGrid-root": {
				"& .MuiGrid-item": {
					width: "100%",
					"& .img-holder": {
						height: "120px",
						width: "120px",
						borderRadius: theme.shape.borderRadius5,
					},
					"& .recent-booking-content-holder": {
						"& a": {
							color: theme.palette.text.gray,
							fontWeight: theme.typography.fontWeightBold,
							fontSize: theme.typography.h3,
							transition: theme.transitions.easing.easeOut,
							marginBottom: theme.spacing(2),
							display: "block",
							"&:hover": {
								color: theme.palette.primary.main,
							},
						},
						"& ul": {
							marginBottom: theme.spacing(1),
							"& li": {
								display: "inline-block",
								color: theme.palette.text.descriptionText,
								fontWeight: theme.typography.fontWeightSemiBold,
								fontSize: theme.typography.h3,
								"&:not(:last-child)": {
									marginRight: theme.spacing(3),
								},
							},
						},
						"& .price": {
							color: theme.palette.text.descriptionText,
							fontWeight: theme.typography.fontWeightSemiBold,
							fontSize: theme.typography.h3,
							"& span": {
								fontSize: theme.typography.h2,
								color: theme.palette.primary.main,
								fontWeight: theme.typography.fontWeightBold,
							},
						},
					},
				},
			},
		},
		"@media(max-width: 600px)": {
			"& .recent-booking-title": {
				textAlign: "center",
			},
			"& .recent-booking-list": {
				"& .MuiGrid-root": {
					"& .MuiGrid-item": {
						textAlign: "center",
						"& .img-holder": {
							margin: "0 auto",
						},
					},
				},
			},
		},
		"@media(min-width: 768px)": {
			"& .recent-booking-title": {
				textAlign: "center",
			},
			"& .recent-booking-list": {
				"& .MuiGrid-root": {
					"& .MuiGrid-item": {
						textAlign: "center",
						"& .img-holder": {
							margin: "0 auto",
						},
					},
				},
			},
		},
		"@media(min-width: 992px)": {
			"& .recent-booking-title": {
				textAlign: "left",
			},
			"& .recent-booking-list": {
				"& .MuiGrid-root": {
					"& .MuiGrid-item": {
						textAlign: "left",
						"& .img-holder": {
							margin: "0",
						},
					},
				},
			},
		},
	},
}));

const recentBookingData = [
	{
		title: "Dhunche to Gosaikunda",
		image: Image,
		departureDate: `2022-12-10`,
		duration: 4,
		noOfAdult: 2,
		noOfChildren: 2,
		price: 40000,
	},
	{
		title: "Dhunche to Gosaikunda",
		image: Image2,
		departureDate: `2022-12-10`,
		duration: 4,
		noOfAdult: 2,
		noOfChildren: 2,
		price: 40000,
	},
	{
		title: "Dhunche to Gosaikunda",
		image: Image3,
		departureDate: `2022-12-10`,
		duration: 4,
		noOfAdult: 2,
		noOfChildren: 2,
		price: 40000,
	},
];

const RecentBooking = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<Typography variant="h2" component="h2" className="recent-booking-title">
				Recent Bookings
			</Typography>
			{
				recentBookingData.map((item, i) => {
					return (
						<Typography component="div" className="recent-booking-list" key={i + "__"}>
							<Grid container spacing={3} alignItems="center">
								<Grid item lg={2} md={12} sm={12}>
									<Typography component="div" className="img-holder background-image"
									            style={{backgroundImage: `url('${item.image}')`}}/>
								</Grid>
								<Grid item lg={10} md={12} sm={12}>
									<Typography component="div" className="recent-booking-content-holder">
										<Link to="#">
											{item.title}
										</Link>
										<ul>
											<li>
												Departure Date: {item.departureDate}
											</li>
											<li>
												Duration: {item.duration}
											</li>
											<li>
												No. of Adult: {item.noOfAdult}
											</li>
											<li>
												No. of Children: {item.noOfChildren}
											</li>
										</ul>
										<Typography variant="h4" component="h4" className="price">
											Total: <span>{item.price}</span>
										</Typography>
									</Typography>
								</Grid>
							</Grid>
						</Typography>
					)
				})
			}
		</section>
	)
}

export default RecentBooking;