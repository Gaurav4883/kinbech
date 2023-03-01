import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import {Avatar, Button} from "@mui/material";
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiBox-root": {
			"& .MuiButtonBase-root": {
				background: "transparent",
				boxShadow: `0 10px 50px ${theme.palette.secondary.main}4f`,
				height: "30px",
				width: "30px",
				borderRadius: "10px",
				color: theme.palette.primary.main,
				"& .MuiSvgIcon-root": {
					fontSize: "22px",
				},
			},
		},
	},
}))

const UserProfile = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const classes = useStyles();
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogOut = () => {
		Cookies.set("jwtToken", null);
	}
	
	return (
		<section className={classes.root}>
			<Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ml: 2}}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<Avatar
							src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 10px 50px rgba(0,0,0,0.32))',
						marginTop: "25px",
						borderRadius: "15px",
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{horizontal: 'right', vertical: 'top'}}
				anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			>
				<MenuItem component={Link} to="/profile">
					<ListItemIcon>
						<DashboardRoundedIcon fontSize="small"/>
					</ListItemIcon>
					Dashboard
				</MenuItem>
				<MenuItem component={Link} to="/profile">
					<ListItemIcon>
						<PersonRoundedIcon fontSize="small"/>
					</ListItemIcon>
					My Profile
				</MenuItem>
				<MenuItem component={Link} to="/profile">
					<ListItemIcon>
						<ReceiptLongRoundedIcon fontSize="small"/>
					</ListItemIcon>
					My Order
				</MenuItem>
				<MenuItem component={Link} to="/profile">
					<ListItemIcon>
						<FavoriteBorderRoundedIcon fontSize="small"/>
					</ListItemIcon>
					Wishlist
				</MenuItem>
				<MenuItem component={Button} onClick ={()=> handleLogOut()}>
					<ListItemIcon>
						<Logout fontSize="small"/>
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</section>
	);
}

export default UserProfile;