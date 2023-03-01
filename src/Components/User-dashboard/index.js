import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {makeStyles} from "@mui/styles";
import {Container, Grid} from "@mui/material";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Dashboard from "../Dashboard";
import RecentBooking from "../Recent-booking";
import ProfileEdit from "../Profile-edit";
import MyBooking from "../My-booking";
import MyReview from "../My-review";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CallApi } from "../Context/ApiContext";
const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(20, 0),
		background: "linear-gradient(to bottom, #e9ecef 0%, #fff 100%)",
		"& .profile-2": {
			"& .tab-holder": {
				background: "#fff",
				borderRadius: "15px",
				padding: theme.spacing(6),
				boxShadow: theme.shadows[0],
				"& .MuiGrid-root": {
					"& .MuiGrid-item": {
						width: "100%",
						"& .MuiTabs-root": {
							"& .MuiTabs-scroller": {
								"& .MuiTabs-flexContainer": {
									"& .MuiButtonBase-root": {
										borderRadius: theme.shape.borderRadius3,
										justifyContent: "flex-start",
										textTransform: "capitalize",
										fontSize: theme.typography.h4,
										fontWeight: theme.typography.fontWeightSemiBold,
										minHeight: "unset",
										padding: theme.spacing(3),
										transition: theme.transitions.easing.easeOut,
										minWidth: "unset",
										maxWidth: "unset",
										"&:not(:last-child)": {
											marginBottom: theme.spacing(3),
										},
									},
									"& .Mui-selected": {
										background: theme.palette.primary.main,
										color: "#fff",
									},
								},
								"& .MuiTabs-indicator": {
									display: "none",
								},
							},
						},
					},
				},
			},
		},
	},
}));

function TabPanel(props) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Typography component="div">
					{children}
				</Typography>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const UserDashboard = () => {
	const [value, setValue] = useState(0);
    const [data, setData] = useState();
	const classes = useStyles();
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

    useEffect(() => {
		CallApi(`user/info`, []).then((response) => {
			let data = response?.data;
			if (data?.success) {
			  setData(data?.body);
			}
		  }).catch((error) => {
            if (error.response.status === 401) {
              toast.error("Session expired please login first.", {
                position: toast.POSITION.TOP_RIGHT,
              });
              window.location.href = '/login';
            } else if (error.response.status === 503) {
              toast.error("Something went wrong. Please try again later.", {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
          });
	}, []);

	return data && data ? (
		<section className={classes.root}>
			<ToastContainer />
			<Container className="profile-2">
				<Typography component="div" className="tab-holder">
					<Grid container spacing={3}>
						<Grid item lg={3} md={12} sm={12}>
							<Tabs
								orientation="vertical"
								variant="scrollable"
								value={value}
								onChange={handleChange}
								aria-label="Vertical tabs example"
							>
								<Tab label="Dashboard" icon={<DashboardRoundedIcon/>}
								     iconPosition="start" {...a11yProps(0)} />
								<Tab label="My Profile" icon={<PersonOutlineRoundedIcon/>}
								     iconPosition="start" {...a11yProps(1)} />
								<Tab label="My Orders" icon={<FormatListBulletedRoundedIcon/>}
								     iconPosition="start" {...a11yProps(2)} />
								{/* <Tab label="My Reviews" icon={<StarBorderRoundedIcon/>}
								     iconPosition="start" {...a11yProps(3)} /> */}
							</Tabs>
						</Grid>
						<Grid item lg={9} md={12} sm={12}>
							<Typography component="div" className="tab-content-holder">
								<TabPanel value={value} index={0}>
									<Dashboard name ={data?.name}/>
									{/* <RecentBooking/> */}
								</TabPanel>
								<TabPanel value={value} index={1}>
									<ProfileEdit data = {data}/>
								</TabPanel>
								<TabPanel value={value} index={2}>
									<MyBooking orders = {data?.orders}/>
								</TabPanel>
								<TabPanel value={value} index={3}>
									<MyReview/>
								</TabPanel>
							</Typography>
						</Grid>
					</Grid>
				</Typography>
			</Container>
		</section>
	) : null
}

export default UserDashboard;