import React from "react";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MobileMenu from "./Mobile-menu";
import TopHeader from "./Top-header";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(4, 0),
		borderBottom: "1px solid #eee",
		marginBottom: theme.spacing(7),
		position: 'relative',
		zIndex: 2,
		"& .header": {
			"& .browse-category": {
				// position: "relative",
				// paddingRight: theme.spacing(17),
				// marginRight: theme.spacing(17),

				"&::before": {
					content: "''",
					position: "absolute",
					right: 0,
					top: "50%",
					transform: "translateY(-50%)",
					height: "15px",
					width: "2px",
					background: "#ddd",
				},
				"& .main-menu": {
					"& .menu-item": {
						listStyle: "none",
						position: "relative",
						"& .category-label": {
							transition: theme.transitions.easing.easeOut,
							padding: theme.spacing(0.5),
							fontSize: "22px",
							color: theme.palette.text.gray,
							"&:hover": {
								color: "#fff",
								background: theme.palette.primary.main,
							},
						},
						"& .sub-menu": {
							position: "absolute",
							background: "#fff",
							display: "none",
							width: "100%",
							transition: theme.transitions.easing.easeOut,
							animation: `$slideTop .3s ease-out`,
							"& .sub-menu-item": {
								listStyle: "none",
								position: "relative",
								"&:not(:last-child)": {
									borderBottom: "1px solid #eee",
								},
								"& .menu-item-link": {
									color: theme.palette.text.gray,
									display: "block",
									padding: theme.spacing(2, 3),
									transition: theme.transitions.easing.easeOut,
									"&:hover": {
										color: theme.palette.secondary.main,
									},
								},
								"& .menu-line": {
									position: "absolute",
									left: "100%",
									top: "0",
									background: "#fff",
									width: "250px",
									margin: 0,
									padding: 0,
									display: "none",
									transition: theme.transitions.easing.easeOut,
									animation: `$slideTop .3s ease-out`,
									"& .menu-line-item": {
										listStyle: "none",
										"&:not(:last-child)": {
											borderBottom: "1px solid #eee",
										},
										"& .menu-line-link": {
											color: theme.palette.text.gray,
											display: "block",
											padding: theme.spacing(2, 3),
											transition: theme.transitions.easing.easeOut,
											"&:hover": {
												color: theme.palette.secondary.main,
											},
										},
										"& .menu-line-child": {
											position: "absolute",
											left: "100%",
											top: "0",
											background: "#fff",
											width: "250px",
											margin: 0,
											padding: 0,
											display: "none",
											transition: theme.transitions.easing.easeOut,
											animation: `$slideTop .3s ease-out`,
											"& .menu-line-item-child": {
												listStyle: "none",
												"&:not(:last-child)": {
													borderBottom: "1px solid #eee",
												},
												"& .menu-line-link-child": {
													color: theme.palette.text.gray,
													display: "block",
													padding: theme.spacing(2, 3),
													transition: theme.transitions.easing.easeOut,
													"&:hover": {
														color: theme.palette.secondary.main,
													},
												},
											},

										},
										"&:hover": {
											"& .menu-line-child": {
												display: "block",
											},
										},
									},
								},
								"&:hover": {
									"& .menu-line": {
										display: "block",
									},
								},
							},
						},
						"&:hover": {
							"& .sub-menu": {
								display: "block",
							},
						},
					},
				},
			},
			"& .navigation": {
				"& ul": {
					"& li": {
						listStyle: "none",
						display: "inline-block",
						"&:not(:last-child)": {
							marginRight: theme.spacing(13),
						},
						"& a": {
							color: theme.palette.text.gray,
							transition: theme.transitions.easing.easeOut,
							fontWeight: theme.typography.fontWeightMedium,
							"&:hover": {
								color: theme.palette.primary.main,
							},
						},
					},
				},
			},
		},
		"@media(max-width: 600px)": {
			display: "none",
		},
		"@media(min-width: 768px)": {
			display: "none",
		},
		"@media(min-width: 992px)": {
			display: "block",
		},
	},
	"@keyframes slideTop": {
		"from": {
			transform: "translateY(10px)",
		},
		"to": {
			transform: "translateY(0)",
		},
	},
}));

const menu = [
	{
		id: 1,
		label: "Home",
		slug: "/",
	},
	{
		id: 2,
		label: "Community",
		slug: "/list",
		menuChilds: [
			{
				label: "Sub Menu",
			},
			{
				label: "Sub Menu2",
			},
			{
				label: "Sub Menu3",
			},
		],
	},
	{
		id: 3,
		label: "Travels",
		slug: "/product"
	},
	{
		id: 4,
		label: "Category",
		slug: "/category"
	},
	// {
	// 	id: 5,
	// 	label: "Blog",
	// 	slug: "/blog"
	// },
	{
		id: 6,
		label: "Contact Us",
		slug: "/contact-us"
	},
];

const Header = (data) => {
	const classes = useStyles();
	window.onscroll = function () {
		scrollFunction();
	};
	let navStyle = '';

	function scrollFunction() {
		let className = `${classes.root}`;
		if (
			document.body.scrollTop > 90 ||
			document.documentElement.scrollTop > 90
		) {
			navStyle = `{
                position: fixed !important; 
                background: rgba(255, 255, 255, 0.8) !important;
                z-index: 9 !important; top: 0; 
                backdrop-filter: blur(6px) !important;
                left: 0 !important; 
                right: 0 !important; 
                animation: slideIn 2s; 
                transition: transform 1s ease-in-out 0s; 
                animation-timing-function: ease-out;
                animation-duration: .7s;
            }`;
			let keyFrame = `@keyframes slideIn { 
                0% {
                    opacity: 0;
                    top: -30px;
                }
	            100% {
                    opacity: 1;
                    top: 0;
                } 
              }`;

			document.getElementById('nav-style').innerHTML =
				'.' + className + navStyle + keyFrame;
		} else {
			navStyle = `{ 
            }`;
			document.getElementById('nav-style').innerHTML =
				'.' + className + navStyle;
		}
	}

	return (
		<>
			<MobileMenu menu={menu} />
			<TopHeader cartItems={data?.cartItems} />
			<header className={classes.root}>
				<Container className="header">
					<Typography component="div" className="divider" display="flex" alignItems="center"
						justifyContent="center">
						<div className="browse-category">
							<ul className="main-menu">
								<li className="menu-item">
									{/* <Typography className="category-label" variant="span" display="flex" alignItems="center">
										<MenuRoundedIcon sx={{ mr: 1 }} />
										Browse Categories
										<KeyboardArrowDownRoundedIcon sx={{ ml: 1 }} />
									</Typography> */}
									<ul className="sub-menu">
										{
											data?.categories && data?.categories?.map((item, i) => {
												return (
													<li className="sub-menu-item" key={i}>
														<Typography component="span" className="menu-item-link" sx={{ display: "flex !important" }}
															alignItems="center" justifyContent="space-between">
															{item?.name}
															<KeyboardArrowRightRoundedIcon fontSize="small" />
														</Typography>
														<ul className="menu-line" key={i}>
															{
																item?.subCategories && item?.subCategories?.map((subCategory, i) => {
																	return (
																		<li className="menu-line-item" key={i}>
																			<Link to="#" className="menu-line-link">
																				<Typography component="span" sx={{ display: "flex !important" }}
																					alignItems="center" justifyContent="space-between">
																					{subCategory?.name}
																					<KeyboardArrowRightRoundedIcon fontSize="small" />
																				</Typography>
																			</Link>
																			<ul className="menu-line-child" key={i}>
																				{
																					subCategory?.childCategories && subCategory?.childCategories?.map((child, index) => {
																						return (
																							<li className="menu-line-item-child" key={i}>
																								<Link to="#" className="menu-line-link-child">
																									<Typography component="span" sx={{ display: "flex !important" }}
																										alignItems="center" justifyContent="space-between">
																										{child?.name}

																									</Typography>

																								</Link>
																							</li>
																						)
																					})
																				}
																			</ul>

																		</li>
																	)
																})
															}
														</ul>
													</li>
												)
											})
										}
										{/* <li className="sub-menu-item">
											<Typography component="span" className="menu-item-link" sx={{display: "flex !important"}}
											            alignItems="center" justifyContent="space-between">
												Electronics
												<KeyboardArrowRightRoundedIcon fontSize="small"/>
											</Typography>
											<ul className="menu-line">
												<li className="menu-line-item">
													<Link to="#" className="menu-line-link">
														Sub Menu
													</Link>
												</li>
												<li className="menu-line-item">
													<Link to="#" className="menu-line-link">
														Sub Menu 2
													</Link>
												</li>
												<li className="menu-line-item">
													<Link to="#" className="menu-line-link">
														Sub Menu 3
													</Link>
												</li>
											</ul>
										</li>
										<li className="sub-menu-item">
											<Typography component="span" className="menu-item-link" sx={{display: "flex !important"}}
											            alignItems="center" justifyContent="space-between">
												Electronics
												<KeyboardArrowRightRoundedIcon fontSize="small"/>
											</Typography>
											<ul className="menu-line">
												<li className="menu-line-item">
													<Link to="#" className="menu-line-link">
														Sub Menu
													</Link>
												</li>
												<li className="menu-line-item">
													<Link to="#" className="menu-line-link">
														Sub Menu 2
													</Link>
												</li>
												<li className="menu-line-item">
													<Link to="#" className="menu-line-link">
														Sub Menu 3
													</Link>
												</li>
											</ul>
										</li>
										<li className="sub-menu-item">
											<Link to="#" className="menu-item-link">
												Electronics
											</Link>
										</li>
										<li className="sub-menu-item">
											<Link to="#" className="menu-item-link">
												Electronics
											</Link>
										</li>
										<li className="sub-menu-item">
											<Link to="#" className="menu-item-link">
												Electronics
											</Link>
										</li>
										<li className="sub-menu-item">
											<Link to="#" className="menu-item-link">
												Electronics
											</Link>
										</li>
										<li className="sub-menu-item">
											<Link to="#" className="menu-item-link">
												Electronics
											</Link>
										</li> */}
									</ul>
								</li>
							</ul>
						</div>
						<Typography component="div" className="navigation">
							<Typography component="ul" align="center">
								{
									menu.map((item, i) => {
										return (
											<li key={i + "__"}>
												<NavLink to={item.slug}>
													{item.label}
												</NavLink>
											</li>
										)
									})
								}
							</Typography>
						</Typography>
					</Typography >
				</Container >
			</header >
		</>
	)
}
export default Header;