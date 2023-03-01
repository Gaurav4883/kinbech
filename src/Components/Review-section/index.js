import React from "react";
import Image from "./../../Assets/Images/29.jpg";
import Image2 from "./../../Assets/Images/26.jpg";
import Image3 from "./../../Assets/Images/19.jpg";
import Image4 from "./../../Assets/Images/bg.jpg";
import Image5 from "./../../Assets/Images/bg2.jpg";
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import dayjs from "dayjs";
import {makeStyles} from "@mui/styles";
import {Grid, Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .reviews-ratings": {
			"& .reviews-text-holder": {
				marginBottom: theme.spacing(10),
				"& .title": {
					color: theme.palette.text.gray,
					fontSize: theme.typography.h2,
					fontWeight: theme.typography.fontWeightBold,
				},
			},
			"& .stars": {
				"& .MuiSvgIcon-root": {
					color: theme.palette.text.descriptionText,
				},
				"& .colored-icons": {
					color: theme.palette.secondary.main,
				},
			},
			"& .MuiGrid-root": {
				"& .MuiGrid-item": {
					width: "100%",
					"& .ratings": {
						"& .ratings-number": {
							color: theme.palette.text.gray,
							fontSize: theme.typography.customFont4,
							fontWeight: theme.typography.fontWeightBlack,
						},
					},
					"& .progress": {
						"&:not(:last-child)": {
							marginBottom: theme.spacing(4),
						},
						"& .progress-bar": {
							background: "#ccc",
							width: "80%",
							height: "8px",
							borderRadius: "30px",
							marginRight: theme.spacing(4),
							position: "relative",
							"& span": {
								position: "absolute",
								top: 0,
								left: 0,
								background: theme.palette.secondary.main,
								height: "100%",
								borderRadius: "30px",
							},
						},
						"& .progress-bar-number": {
							color: theme.palette.text.descriptionText,
							fontWeight: theme.typography.fontWeightMedium,
						},
					},
				},
			},
			"& .reviewer-list": {
				"& .reviewer-items": {
					border: "1px solid #ccc",
					borderRadius: "15px",
					padding: "20px",
					"&:not(:last-child)":{
						marginBottom: theme.spacing(6),
					},
					"& .profile": {
						gap: 20,
						marginBottom: theme.spacing(2),
						"& .img-holder": {
							height: "50px",
							width: "50px",
							"& .bg-stretch": {
								height: "100%",
								width: "100%",
								borderRadius: "50%",
							},
						},
						"& .post": {
							"& .name": {
								color: theme.palette.text.gray,
								fontSize: theme.typography.h4,
								fontWeight: theme.typography.fontWeightBold,
							},
							"& .date": {
								color: theme.palette.text.descriptionText,
								fontSize: theme.typography.h5,
							},
						},
					},
					"& .description": {
						color: theme.palette.text.descriptionText,
						fontWeight: theme.typography.fontWeightMedium,
					},
				},
			}
		},
	},
}));

const reviewerListData = [
	{
		name: "Sandeep Chaudhary",
		publishDate: "10 Dec, 2022",
		image: Image,
		message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consectetur eaque" +
			"eius expedita iure natus obcaecati reprehenderit. Deserunt excepturi fugit in labore nulla" +
			"omnis repudiandae tempora totam? Ad aliquam aliquid cum dignissimos distinctio doloribus.",
	},
	{
		name: "Amit Chaudhary",
		publishDate: "20 Dec, 2022",
		image: Image2,
		message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consectetur eaque" +
			"eius expedita iure natus obcaecati reprehenderit. Deserunt excepturi fugit in labore nulla" +
			"omnis repudiandae tempora totam? Ad aliquam aliquid cum dignissimos distinctio doloribus.",
	},
	{
		name: "Ram Chaudhary",
		publishDate: "30 Dec, 2022",
		image: Image3,
		message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consectetur eaque" +
			"eius expedita iure natus obcaecati reprehenderit. Deserunt excepturi fugit in labore nulla" +
			"omnis repudiandae tempora totam? Ad aliquam aliquid cum dignissimos distinctio doloribus.",
	},
	{
		name: "Hari Chaudhary",
		publishDate: "29 Dec, 2022",
		image: Image4,
		message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consectetur eaque" +
			"eius expedita iure natus obcaecati reprehenderit. Deserunt excepturi fugit in labore nulla" +
			"omnis repudiandae tempora totam? Ad aliquam aliquid cum dignissimos distinctio doloribus.",
	},
	{
		name: "Harish Chaudhary",
		publishDate: "1 Jan, 2023",
		image: Image5,
		message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consectetur eaque" +
			"eius expedita iure natus obcaecati reprehenderit. Deserunt excepturi fugit in labore nulla" +
			"omnis repudiandae tempora totam? Ad aliquam aliquid cum dignissimos distinctio doloribus.",
	},
]

const progressBarData = [
	{
		title: "1 star",
		width: "20%",
	},
	{
		title: "2 star",
		width: "40%",
	},
	{
		title: "3 star",
		width: "60%",
	},
	{
		title: "4 star",
		width: "80%",
	},
	{
		title: "5 star",
		width: "100%",
	},
];
const ReviewsRatings = () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Typography component="div" className="reviews-ratings">
				<Typography component="div" className="reviews-text-holder">
					<Typography variant="h2" component="h2" className="title">Review & Ratings Summary</Typography>
				</Typography>
				<Grid container spacing={3} alignItems="center" sx={{mb: 10}}>
					<Grid item lg={3} md={12} sm={12}>
						<Typography component="div" className="ratings">
							<Typography variant="h4" component="h4" className="ratings-number">
								4.2
							</Typography>
							<Typography component="div" className="stars">
								<StarRateRoundedIcon className="colored-icons"/>
								<StarRateRoundedIcon className="colored-icons"/>
								<StarRateRoundedIcon className="colored-icons"/>
								<StarRateRoundedIcon className="colored-icons"/>
								<StarOutlineRoundedIcon/>
							</Typography>
						</Typography>
					</Grid>
					<Grid item lg={8} md={12} sm={12}>
						{
							progressBarData.map((item, i) => {
								return (
									<Typography component="div" className="progress" key={i + "__"} display="flex"
									            alignItems="center">
										<Typography component="div" className="progress-bar">
											<span style={{width: item.width}}/>
										</Typography>
										<Typography component="div" className="progress-bar-number">
											{item.title}
										</Typography>
									</Typography>
								)
							})
						}
					</Grid>
				</Grid>
				<Typography component="div" className="reviewer-list">
					{
						reviewerListData.map((item, i) => {
							return (
								<Typography component="div" className="reviewer-items" key={i + "__"}>
									<Typography component="div" className="profile" display="flex" alignItems="center">
										<Typography component="div" className="img-holder">
											<Typography component="div" className="bg-stretch background-image"
											            style={{backgroundImage: `url('${item.image}')`}}/>
										</Typography>
										<Typography component="div" className="post">
											<Typography variant="h4" component="h4" className="name">
												{item.name}
											</Typography>
											<Typography variant="h6" component="h6" className="date">
												{dayjs(item.publishDate).format('DD MMM, YYYY')}
											</Typography>
										</Typography>
									</Typography>
									<Typography component="div" className="stars">
										<StarRateRoundedIcon className="colored-icons"/>
										<StarRateRoundedIcon className="colored-icons"/>
										<StarRateRoundedIcon className="colored-icons"/>
										<StarRateRoundedIcon className="colored-icons"/>
										<StarOutlineRoundedIcon/>
									</Typography>
									<Typography className="description">
										{item.message}
									</Typography>
								</Typography>
							)
						})
					}
				</Typography>
			</Typography>
		</section>
	)
}

export default ReviewsRatings;