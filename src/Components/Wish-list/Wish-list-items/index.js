import React, {useState} from "react";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import FormatColorFillRoundedIcon from "@mui/icons-material/FormatColorFillRounded";
import CloseFullscreenRoundedIcon from "@mui/icons-material/CloseFullscreenRounded";
import Button from "@mui/material/Button";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const WishListItem = ({item}) => {
	const [count, setCount] = useState(0);
	const increment = () => {
		if (count < 100)
			setCount(count + 1);
	}
	const decrement = () => {
		if (count > 0)
			setCount(count - 1);
	}
	return (
		<Typography component="div" className="add-to-cart-item" display="flex"
		            alignItems="flex-start" gap={2}>
			<Typography component="div" className="img-holder">
				<Link to="#">
					<img src={item.image} alt="img"/>
				</Link>
			</Typography>
			<div className="content-holder">
				<Typography component="div" className="first-content" display="flex"
				            justifyContent="space-between" gap={5} mb={4}>
					<Typography component="div" className="title-holder">
						<Typography component="div" className="first-content-title">
							<Link to="#">
								{item.title}
							</Link>
						</Typography>
						<Typography component="div" className="color-div" display="flex"
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
						</Typography>
					</Typography>
					<Typography component="div" className="price">
						<Typography variant="span">
							Rs.{item.price}
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
							{count}
						</Typography>
						<Button variant="contained" onClick={increment}>
							<AddRoundedIcon/>
						</Button>
					</Typography>
					<Typography component="div" className="remove-btn">
						<Button variant="contained">
							Remove
						</Button>
					</Typography>
				</Typography>
			</div>
		</Typography>
	)
}

export default WishListItem;