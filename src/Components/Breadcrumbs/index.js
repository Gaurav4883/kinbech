import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Container} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .bread-crumbs": {},
	},
}));

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

const BreadCrumbs = () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Container className="brad-crumbs">
				<Stack spacing={2}>
					<Breadcrumbs
						separator={<NavigateNextIcon fontSize="small"/>}
						aria-label="breadcrumb"
					>
						<Link underline="hover" key="1" color="inherit" to="/" >
							Home
						</Link>,
						<Link
							underline="hover"
							key="2"
							color="inherit"
							onClick={handleClick}
							to="/home">
							Core
						</Link>,
						<Typography key="3" color="text.primary">
							Breadcrumb
						</Typography>
					</Breadcrumbs>
				</Stack>
			</Container>
		</section>
	);
}

export default BreadCrumbs;