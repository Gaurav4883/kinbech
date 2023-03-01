import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Container, Grid, Typography} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FormatColorFillRoundedIcon from '@mui/icons-material/FormatColorFillRounded';
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Image from "./../../Assets/Images/khalti.png";
import Image2 from "./../../Assets/Images/esewa.webp";
import Image3 from "./../../Assets/Images/ime.svg";
import Image4 from "./../../Assets/Images/tshirt.png";
import {makeStyles} from "@mui/styles";
import ContactInfoEdit from "../Contact-info-edit";
import AddressInfoEdit from "../Address-info-edit";
import { useLocation } from "react-router-dom";
import { CallApi, fileBaseUrl } from "../Context/ApiContext";
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(10, 0),
		"& .buy-now": {
			"& .MuiGrid-root": {
				"& .MuiGrid-item": {
					width: "100%",
					"& .contact-info": {
						border: "1px solid rgb(226 232 240)",
						padding: theme.spacing(5),
						borderRadius: theme.shape.borderRadius5,
						"& .icon-holder": {
							"& .MuiSvgIcon-root": {
								fontSize: theme.typography.h1,
								color: theme.palette.text.descriptionText,
							},
							"& .buy-content": {
								"& .buy-title": {
									fontSize: theme.typography.h4,
									textTransform: "uppercase",
									color: theme.palette.text.descriptionText,
									marginBottom: theme.spacing(1),
								},
								"& .contact-number": {
									fontSize: theme.typography.h3,
									color: theme.palette.text.gray,
									fontWeight: theme.typography.fontWeightBold,
									"& .name": {
										position: "relative",
										marginRight: theme.spacing(2),
										paddingRight: theme.spacing(4),
										display: "block",
									},
								},
							},
						},
						"& .edit-btn": {
							"& .MuiButtonBase-root": {
								background: "rgb(248 250 252)",
								color: theme.palette.text.gray,
								textTransform: "capitalize",
								fontWeight: theme.typography.fontWeightBold,
								fontSize: theme.typography.h4,
								boxShadow: "none",
								borderRadius: "8px",
								"&:hover": {
									background: theme.palette.primary.main,
									color: "#fff",
								},
							},
						},
					},
					"& .payment": {
						border: "1px solid rgb(226 232 240)",
						borderRadius: theme.shape.borderRadius5,
						"& .icon-holder": {
							borderBottom: "1px solid rgb(226 232 240)",
							padding: theme.spacing(3, 5),
							marginBottom: theme.spacing(3),
							"& .MuiSvgIcon-root": {
								fontSize: theme.typography.h1,
								color: theme.palette.text.descriptionText,
							},
							"& .buy-content": {
								"& .buy-title": {
									fontSize: theme.typography.h4,
									textTransform: "uppercase",
									color: theme.palette.text.descriptionText,
									marginBottom: theme.spacing(1),
								},
							},
						},
						"& .payment-option": {
							padding: theme.spacing(3, 5),
							"& .options": {
								background: "#fff",
								boxShadow: theme.shadows[0],
								borderRadius: theme.shape.borderRadius5,
								height: "100%",
								padding: theme.spacing(4),
								"& img": {
									maxHeight: "60px",
									width: "100%",
								},
							},
						},
					},
					"& .order-summary": {
						boxShadow: theme.shadows[0],
						borderRadius: theme.shape.borderRadius5,
						padding: theme.spacing(4),
						"& .your-order": {
							fontSize: theme.typography.h3,
							fontWeight: theme.typography.fontWeightSemiBold,
							color: theme.palette.text.gray,
							marginBottom: theme.spacing(4),
						},
						"& .order": {
							fontSize: theme.typography.h5,
							fontWeight: theme.typography.fontWeightBold,
							color: theme.palette.text.gray,
							marginBottom: theme.spacing(2),
						},
						"& .order-content": {
							"& .order-item": {
								fontWeight: theme.typography.fontWeightBold,
								fontSize: theme.typography.h5,
								marginBottom: theme.spacing(2),
							},
							"& .order-item-total": {
								fontSize: theme.typography.h5,
								"& span": {
									color: theme.palette.text.descriptionText,
								},
							},
							"& .order-item-total.yellow": {
								color: theme.palette.secondary.main,
							},
						},
						"& .MuiButtonBase-root": {
							background: theme.palette.secondary.main,
							boxShadow: theme.shadows[2],
							borderRadius: theme.shape.borderRadius3,
							textTransform: "capitalize",
							fontSize: theme.typography.h4,
							width: "100%",
						},
						"& .add-to-cart-list": {
							marginBottom: theme.spacing(4),
							"& .add-to-cart-item": {
								borderBottom: `1px solid rgb(226 232 240)`,
								paddingBottom: theme.spacing(4),
								"& .img-holder": {
									width: "150px",
									height: "110px",
									"& a": {
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: "rgb(241 245 249)",
										padding: theme.spacing(2),
										borderRadius: "15px",
										height: "100%",
										"& img": {
											width: "100%",
											height: "100%",
										},
									},
								},
								"& .content-holder": {
									width: "100%",
									"& .first-content": {
										"& .title-holder": {
											"& .first-content-title": {
												marginBottom: theme.spacing(2),
												"& a": {
													fontSize: theme.typography.h3,
													fontWeight: theme.typography.fontWeightBold,
													color: theme.palette.text.gray,
													transition: theme.transitions.easing.easeOut,
													"&:hover": {
														color: theme.palette.secondary.main,
													},
												},
											},
											"& .color-div": {
												"& .black": {
													position: "relative",
													paddingRight: theme.spacing(3),
													marginRight: theme.spacing(3),
													"&::before": {
														content: "''",
														position: "absolute",
														right: 0,
														top: "50%",
														transform: "translateY(-50%)",
														background: "rgb(226 232 240)",
														height: "15px",
														width: "2px",
													},
													"& .MuiSvgIcon-root": {
														color: theme.palette.text.descriptionText,
														fontSize: theme.typography.h3,
														marginRight: theme.spacing(1),
													},
													"& span": {
														fontSize: theme.typography.h5,
														color: theme.palette.text.descriptionText,
													},
												},
												"& .xl": {
													"& .MuiSvgIcon-root": {
														color: theme.palette.text.descriptionText,
														fontSize: theme.typography.h3,
														marginRight: theme.spacing(1),
													},
													"& span": {
														fontSize: theme.typography.h5,
														color: theme.palette.text.descriptionText,
													},
												},
											}
										},
										"& .price": {
											border: "2px solid rgb(34 197 94)",
											color: "rgb(34 197 94)",
											display: "flex",
											alignItems: "center",
											padding: theme.spacing(2),
											borderRadius: "8px",
											height: "10px",
											lineHeight: 0,
										},
									},
									"& .second-content": {
										"& .title-holder": {
											"& .MuiButtonBase-root": {
												background: "rgb(248 250 252)",
												color: theme.palette.text.gray,
												boxShadow: "none",
												transition: theme.transitions.easing.easeOut,
												minWidth:"unset",
												"&:hover": {
													background: theme.palette.primary.main,
													color: "#fff",
												},
											},
										},
										"& .remove-btn": {
											"& .MuiButtonBase-root": {
												background: "rgb(248 250 252)",
												color: theme.palette.text.gray,
												boxShadow: "none",
												transition: theme.transitions.easing.easeOut,
												"&:hover": {
													background: theme.palette.primary.main,
													color: "#fff",
												},
											},
										},
									},
								},
							},
						},
					},
				},
			},
		},
	}
}));

const BuyNow = () => {
	var location = useLocation();
	let {data} = location?.state;

	const [count, setCount] = useState(0);
	const classes = useStyles();
	const [order, setOrder] = useState();
	

	const increment = () => {
		if (count < 100)
			setCount(count + 1);
	}
	const decrement = () => {
		if (count > 0)
			setCount(count - 1);
	}

	const payload = {
		"productId": data?.id,
		"quantity": data?.quantity
	};

	useEffect(() => {
		CallApi(`product/buy-now`, payload).then((response) => {
			response = response?.data;
			if(response?.success){
				setCount(response?.body?.quantity)
				setOrder(response?.body)
			} else {
				toast.error(response.message, {
				  position: toast.POSITION.TOP_RIGHT,
				});
				window.location.href = '/login';
			}
		  });
	  }, []);
	  
	  let id = data?.id;
	  const placeOrder = (productId, quantity) =>{
		if(productId !== Number(0) && quantity !== Number(0) && typeof quantity !== "undefined"){
			CallApi(`order/place/${productId}/${quantity}`, ).then((response) => {
				response = response?.data;

				if (response?.success) {
					toast.success(response?.message, {
					  position: toast.POSITION.TOP_RIGHT,
					});
				  } else {
					toast.error(response?.message, {
					  position: toast.POSITION.TOP_RIGHT,
					});
				  }
			  });
		}
	  }

	return (
		<section className={classes.root}>
			<ToastContainer />
			<Container className="buy-now">
				<Grid container spacing={3}>
					<Grid item lg={6} md={12} sm={12}>
						<Typography component="div" className="contact-info" display="flex" alignItems="center"
						            justifyContent="space-between" mb={3}>
							<Typography component="div" className="icon-holder" display="flex" gap={5}>
								<AccountCircleOutlinedIcon/>
								<Typography component="div" className="buy-content">
									<Typography variant="h1" className="buy-title">
										Contact Info
									</Typography>
									<Typography variant="h6" className="contact-number">
										<Typography variant="span" className="name">
											{order?.contact?.email}
										</Typography>
										<Typography variant="span" className="number"> {order?.contact?.mobileNumber}
										</Typography>
									</Typography>
								</Typography>
							</Typography>
							<Typography component="div" className="edit-btn">
								<ContactInfoEdit contact={order?.contact}/>
							</Typography>
						</Typography>
						<Typography component="div" className="contact-info" display="flex" alignItems="center"
						            justifyContent="space-between" mb={3}>
							<Typography component="div" className="icon-holder" display="flex" gap={5}>
								<WhereToVoteOutlinedIcon/>
								<Typography component="div" className="buy-content">
									<Typography variant="h1" className="buy-title">
										SHIPPING ADDRESS
									</Typography>
									<Typography variant="h6" className="contact-number">
										<Typography variant="span" className="name">
											{order?.address?.street}  {order?.address?.municipality} {order?.address?.wardNumber ? '-' :''} {order?.address?.wardNumber} {order?.address?.district}, {order?.address?.province}
										</Typography>
									</Typography>
								</Typography>
							</Typography>
							<Typography component="div" className="edit-btn">
								<AddressInfoEdit address ={order?.address}/>
							</Typography>
						</Typography>
						<Typography component="div" className="payment">
							<Typography component="div" className="icon-holder" display="flex" alignItems="center"
							            gap={5}>
								<AccountBalanceWalletOutlinedIcon/>
								<Typography component="div" className="buy-content">
									<Typography variant="h1" className="buy-title">
										Select Payment Method
									</Typography>
								</Typography>
							</Typography>
							<Typography component="div" className="payment-option" display="flex" alignItems="center"
							            gap={2}>
								<Typography component="div" className="options">
									<img src={Image} alt="img"/>
								</Typography>
								<Typography component="div" className="options">
									<img src={Image2} alt="img"/>
								</Typography>
								<Typography component="div" className="options">
									<img src={Image3} alt="img"/>
								</Typography>
							</Typography>
						</Typography>
					</Grid>
					<Grid item lg={6} md={12} sm={12}>
						<Typography component="div" className="order-summary">
							<Typography variant="h1" className="your-order">
								Your Order
							</Typography>
							<Typography component="div" className="add-to-cart-list">
								<Typography component="div" className="add-to-cart-item" display="flex"
								            alignItems="flex-start" gap={2}>
									<Typography component="div" className="img-holder">
										<Link to="#">
											<img src={order?.product?.thumbnailImage? fileBaseUrl + "/product/" + order?.product?.thumbnailImage : ""} alt={order?.product.name}/>
										</Link>
									</Typography>
									<div className="content-holder">
										<Typography component="div" className="first-content" display="flex"
										            justifyContent="space-between" gap={5} mb={4}>
											<Typography component="div" className="title-holder">
												<Typography component="div" className="first-content-title">
													<Link to="/detail" state={{id}}>
														{order?.name}
													</Link>
												</Typography>
												<Typography component="div" className="first-content-title" display="flex" alignItems="center" >
													{order?.product?.name}
												</Typography>

												{/* <Typography component="div" className="color-div" display="flex"
												            alignItems="center">
													<Typography component="div" className="black" display="flex"
													            alignItems="center">
														<FormatColorFillRoundedIcon/>
														<Typography variant="span">
															Black
														</Typography>
													</Typography>
													<Typography component="div" className="xl" display="flex"
													            alignItems="center">
														<CloseFullscreenRoundedIcon/>
														<Typography variant="span">
															2XL
														</Typography>
													</Typography>
												</Typography> */}
											</Typography>
											<Typography component="div" className="price">
												<Typography variant="span">
													Rs.{order?.product?.salePrice}
												</Typography>
											</Typography>
										</Typography>
										<Typography component="div" className="second-content" display="flex"
										            justifyContent="space-between" gap={5}>
											<Typography component="div" className="title-holder" display="flex"
											            alignItems="center" gap={5}>
												<Button variant="contained" onClick={decrement}>
													<RemoveRoundedIcon/>
												</Button>
												<Typography variant="span">
													{count}
												</Typography>
												<Button variant="contained" onClick={increment}>
													<AddRoundedIcon/>
												</Button>
											</Typography>
											<Typography component="div" className="remove-btn">
												<Button variant="contained" onClick={() => {window.location.href = '/';}}>
													Remove
												</Button>
											</Typography>
										</Typography>
									</div>
								</Typography>
							</Typography>
							<Typography variant="h2" className="order">
								Order Summary
							</Typography>
							<Typography component="div" className="order-content" display="flex" alignItems="center"
							            justifyContent="space-between">
								<Typography component="div" className="order-item">
									Items Total
								</Typography>
								<Typography component="div" className="order-item-total" align="right">
									{count}
								</Typography>
							</Typography>
							<Typography component="div" className="order-content" display="flex" alignItems="center"
							            justifyContent="space-between">
								<Typography component="div" className="order-item">
									Delivery Fee
								</Typography>
								<Typography component="div" className="order-item-total" align="right">
									Rs.{order?.deliveryCharge}
								</Typography>
							</Typography>
							<Typography component="div" className="order-content" display="flex" alignItems="center"
							            justifyContent="space-between">
								<Typography component="div" className="order-item">
									Total Payment
								</Typography>
								<Typography component="div" className="order-item-total" align="right">
									{order?.total}
								</Typography>
							</Typography>
							<Typography component="div" className="order-content" display="flex" alignItems="center"
							            justifyContent="space-between" mb={4}>
								<Typography component="div" className="order-item">
									Total:
								</Typography>
								<Typography component="div" className="order-item-total yellow" align="right">
									Rs.{order?.total + order?.deliveryCharge}
									<Typography variant="span" display="block">All taxes included</Typography>
								</Typography>
							</Typography>
							<Button variant="contained" onClick={() => placeOrder(data?.id, count)}>
								Place Order
							</Button>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</section>
	)
}

export default BuyNow;