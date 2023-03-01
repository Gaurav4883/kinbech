import React from "react";
import {makeStyles} from "@mui/styles";
import {Grid, Typography} from "@mui/material";
import ProfileEditForm from "./Profile-edit-form";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .profile-title": {
			marginBottom: theme.spacing(5),
			fontWeight: theme.typography.fontWeightBold,
			fontSize: theme.typography.h1,
			color: theme.palette.text.gray,
		},
		"& .profile-3": {
			"& .MuiGrid-root": {
				"& .MuiGrid-item": {
					width: "100%",
					"& .img-holder": {
						height: "250px",
						width: "250px",
						borderRadius: theme.shape.borderRadius5,
						marginBottom: theme.spacing(3),
					},
					"& .edit-btn": {
						"& label": {
							display: "inline-block",
							cursor: "pointer",
							fontSize: theme.typography.h3,
							fontWeight: theme.typography.fontWeightSemiBold,
							color: theme.palette.primary.main,
						},
					},
				},
			},
		},
		"@media(max-width: 600px)": {
			"& .profile-3": {
				"& .MuiGrid-root": {
					"& .MuiGrid-item": {
						"& .img-holder": {
							margin: "0 auto",
						},
					},
				},
			},
		},
		"@media(min-width: 768px)": {
			"& .profile-3": {
				"& .MuiGrid-root": {
					"& .MuiGrid-item": {
						"& .img-holder": {
							margin: "0 auto",
						},
					},
				},
			},
		},
	},
}));

const Image = "https://media.licdn.com/dms/image/C5603AQEzR2YUB0oHtQ/profile-displayphoto-shrink_800_800/0/1641130354984?e=1676505600&v=beta&t=6-toipsjo8PZtCsffgpEWs5sFHgkDDHlQK3jjCaCOZs";
const ProfileEdit = (data) => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Typography variant="h2" component="h2" className="profile-title">
				Profile
			</Typography>
			<Typography component="div" className="profile-3">
				<Grid container spacing={4}>
					{/* <Grid item lg={4} md={12} sm={12}>
						<Typography component="div" className="img-holder background-image"
						            style={{backgroundImage: `url('${Image}')`}}/>
						<Typography component="div" className="edit-btn" align="center">
							<input type="file" id="upload" hidden/>
							<label htmlFor="upload">Change Photo</label>
						</Typography>
					</Grid> */}
					<Grid item lg={8} md={12} sm={12}>
						<ProfileEditForm data ={data?.data}/>
					</Grid>
				</Grid>
			</Typography>
		</section>
	)
}

export default ProfileEdit;