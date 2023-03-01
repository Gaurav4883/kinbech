import React, {useState, useEffect} from "react";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import FormatColorFillRoundedIcon from "@mui/icons-material/FormatColorFillRounded";
import CloseFullscreenRoundedIcon from "@mui/icons-material/CloseFullscreenRounded";
import Button from "@mui/material/Button";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { CallApi, fileBaseUrl } from "../../Context/ApiContext";

const AddToCartItem = ({item}) => {
	const [count, setCount] = useState(0);
	const increment = () => {
		if (count < 100){
			CallApi(`cart-item/add/${item.productId}`, []).then(() =>{
				setCount(count + 1);
			});
		}
	}
	const decrement = () => {
		if (item.quantity > 0){
			setCount(count - 1);
			CallApi(`cart-item/remove/${item.productId}/0`, []).then(() =>{
			});
		}
	}

	const remove = () =>{
		CallApi(`cart-item/remove/${item.productId}/${item.quantity}`, []).then((response) =>{
		});
	}

	return (
		<Typography component="div" className="add-to-cart-item" display="flex"
		            alignItems="flex-start" gap={2} key ={item.id}>
			<Typography component="div" className="img-holder">
				<Link to="#">
					<img src= {fileBaseUrl + '/product/' + item?.thumbnailImage} alt="img"/>
				</Link>
			</Typography>
			<div className="content-holder">
				<Typography component="div" className="first-content" display="flex"
				            justifyContent="space-between" gap={5} mb={4}>
					<Typography component="div" className="title-holder">
						<Typography component="div" className="first-content-title">
							<Link to="#">
								{item?.name}
							</Link>
						</Typography>
						<Typography component="div" className="color-div" display="flex"
						            alignItems="center">
							<Typography component="div" className="black" display="flex"
							            alignItems="center">
								<FormatColorFillRoundedIcon/>
								{/* <Typography variant="span">
									Black
								</Typography> */}
							</Typography>
							<Typography component="div" className="xl" display="flex"
							            alignItems="center">
								<CloseFullscreenRoundedIcon/>
								{/* <Typography variant="span">
									2XL
								</Typography> */}
							</Typography>
						</Typography>
					</Typography>
					<Typography component="div" className="price">
						<Typography variant="span">
							Rs.{item?.salePrice}
						</Typography>
					</Typography>
				</Typography>
				<Typography component="div" className="second-content" display="flex"
				            justifyContent="space-between" gap={5}>
					<Typography component="div" className="title-holder" display="flex"
					            alignItems="center" gap={3}>
						<Button variant="contained" onClick={decrement}>
							<RemoveRoundedIcon/>
						</Button>
						<Typography variant="span">
							{item?.quantity}
						</Typography>
						<Button variant="contained" onClick={increment}>
							<AddRoundedIcon/>
						</Button>
					</Typography>
					<Typography component="div" className="remove-btn">
						<Button variant="contained" onClick ={remove}>
							Remove
						</Button>
					</Typography>
				</Typography>
			</div>
		</Typography>
	)
}

export default AddToCartItem;