import React, { useState } from "react";
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { makeStyles } from "@mui/styles";
import { Button, Container, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../../Assets/Images/logo-2.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import UserProfile from "../../../Components/User-profile";
import WishList from "../../../Components/Wish-list";
import AddToCart from "../../../Components/Add-to-cart";

const useStyles = makeStyles((theme) => ({
	root: {
		background: "#333",
		padding: theme.spacing(2, 0),
		"& .top-header": {
			"& .top-content": {
				"& .contact-info": {
					lineHeight: 0,
					"& ul": {
						"& li": {
							display: "inline-block",
							"&:not(:last-child)": {
								marginRight: theme.spacing(4),
							},
							"& a": {
								display: "flex",
								alignItems: "center",
								color: "#fff",
								fontSize: theme.typography.h5,
								transition: theme.transitions.easing.easeOut,
								"& .MuiSvgIcon-root": {
									marginRight: theme.spacing(1),
									fontSize: theme.typography.h3,
								},
								"&:hover": {
									color: theme.palette.secondary.main,
								},
							},
						},
					},
				},
				"& .login-text": {
					"& a": {
						color: "#fff",
						fontWeight: theme.typography.fontWeightMedium,
						fontSize: theme.typography.h5,
						transition: theme.transitions.easing.easeOut,
						"&:not(:last-child)": {
							marginRight: theme.spacing(3),
						},
						"&:hover": {
							color: theme.palette.secondary.main,
						},
					}
				},
			},
			"& .bottom-content": {
				"& .logo-holder": {
					"& a": {
						"& img": {
							maxHeight: "60px",
							marginRight: theme.spacing(10),
						},
					},
				},
				"& .search-bar": {
					width: "50%",
					"& .MuiBox-root": {
						position: "relative",
						width: "100%",
						"& .MuiFormControl-root": {
							"& .MuiInputBase-root": {
								borderRadius: "30px",
								color: "#fff",
								fontFamily: "unset",
								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: "#fff",
								},
							},
							"& .MuiInputBase-input": {
								padding: "16.5px 14px 16.5px 40px",
								height: "15px",
							},
						},
						"& .MuiButtonBase-root": {
							position: "absolute",
							left: "10px",
							top: "50%",
							transform: "translateY(-50%)",
							padding: 0,
							minWidth: "unset",
							borderRadius: 0,
							border: "none",
							color: theme.palette.text.light,
						},
					},
				},
				"& .buttons-holder": {
					"& .user-profile": {
						"& a": {
							color: "#fff",
							height: "40px",
							width: "40px",
							borderRadius: "50%",
							background: "transparent",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							transition: theme.transitions.easing.easeOut,
							"&:hover": {
								color: theme.palette.secondary.main,
								background: "rgba(255, 255, 255, .25)",
							},
						},
					},
					"& .wish-list": {
						"& a": {
							color: "#fff",
							height: "40px",
							width: "40px",
							borderRadius: "50%",
							background: "transparent",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							transition: theme.transitions.easing.easeOut,
							"&:hover": {
								color: theme.palette.secondary.main,
								background: "rgba(255, 255, 255, .25)",
							},
						},
					},
					"& .add-to-cart": {
						"& a": {
							color: "#fff",
							height: "40px",
							width: "40px",
							borderRadius: "50%",
							background: "transparent",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							transition: theme.transitions.easing.easeOut,
							"&:hover": {
								color: theme.palette.secondary.main,
								background: "rgba(255, 255, 255, .25)",
							},
						},
					},
				},
			},
		},
		"@media(max-width:600px)": {
			display: "none",
		},
		"@media(min-width:768px)": {
			display: "none",
		},
		"@media(min-width:992px)": {
			display: "block",
		},
	},
}));



const TopHeader = (data) => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Container className="top-header">
				<Typography component="div" className="top-content" display="flex" alignItems="center"
					justifyContent="space-between">
					<Typography component="div" className="contact-info">
						<ul>
							<li>
								<a href={`tel: +977-9863593274`}>
									<PermPhoneMsgRoundedIcon />
									+977-9863593274
								</a>
							</li>
							<li>
								<a href={`mailto: info@kinbechmarket.com`}>
									<EmailRoundedIcon />
									info@kinbechmarket.com
								</a>
							</li>
						</ul>
					</Typography>

					<Typography component="div" className="login-text" display="flex" alignItems="center">
						<Link to="/login">
							Login
						</Link>
						<Link to="/register">
							Register
						</Link>
					</Typography>



				</Typography>
				<Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, .25)", }} />
				<Typography component="div" className="bottom-content" display="flex" alignItems="center"
					justifyContent="space-between">
					<Typography component="div" className="logo-holder">
						<Link to="/">
							<img src={Image} alt="img" />
						</Link>
					</Typography>
					<Typography component="div" className="search-bar" px={4}>
						<Box component="form" noValidate autoComplete="off">
							<TextField id="search" type="search" name="search" variant="outlined"
								placeholder="Search product..." fullWidth />
							<Button variant="outlined" type="submit">
								<SearchRoundedIcon />
							</Button>
						</Box>
					</Typography>
					<Typography component="div" className="buttons-holder" display="flex" alignItems="center" gap={3}>
						{/* <Typography component="div" className="wish-list">
							<WishList/>
						</Typography> */}
						<Typography component="div" className="add-to-cart">
							<AddToCart cartItems={data?.cartItems} />
						</Typography>
						<UserProfile />
					</Typography>
				</Typography>
			</Container>
		</section>
	)

}

export default TopHeader;