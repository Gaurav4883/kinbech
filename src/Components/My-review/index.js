import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Button, Typography} from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {makeStyles, useTheme} from "@mui/styles";
import {Link} from "react-router-dom";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .profile-title": {
			marginBottom: theme.spacing(5),
			fontWeight: theme.typography.fontWeightBold,
			fontSize: theme.typography.h1,
			color: theme.palette.text.gray,
		},
		"& .MuiPaper-root": {
			boxShadow: "none",
			"& .MuiTableContainer-root": {
				"& .MuiTable-root": {
					"& .MuiTableHead-root": {
						"& .MuiTableRow-root": {
							"& .MuiTableCell-root": {
								backgroundColor: "#F3F3F3",
								borderBottom: "none",
								fontSize: theme.typography.h4,
								fontWeight: theme.typography.fontWeightBold,
								color: theme.palette.text.gray,
								fontFamily: "unset",
								"&:first-child": {
									borderRadius: "15px 0 0 15px",
								},
								"&:last-child": {
									borderRadius: "0 15px 15px 0",
								},
							},
						},
					},
					"& .MuiTableBody-root": {
						"& .MuiTableRow-root": {
							"& .MuiTableCell-root": {
								fontFamily: "unset",
								fontSize: theme.typography.h4,
								fontWeight: theme.typography.fontWeightMedium,
								color: theme.palette.text.descriptionText,
								"& a": {
									color: theme.palette.primary.main,
									transition: theme.transitions.easing.easeOut,
									fontWeight: theme.typography.fontWeightMedium,
									"&:hover": {
										color: theme.palette.secondary.main,
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
								"& .btn-wrapper": {
									"& .view-btn": {
										color: "#00b4d8",
										background: "rgb(13 110 253 / 11%)",
										borderRadius: "5px",
										padding: "6px 12px",
										boxShadow: "none",
										minWidth: "unset",
									},
								},
							},
						},
					},
				},
			},
			"& .MuiTablePagination-root": {
				"& .MuiToolbar-root": {
					"& p": {
						fontFamily: "unset",
						fontWeight: theme.typography.fontWeightSemiBold,
						color: theme.palette.text.descriptionText,
						fontSize: theme.typography.h4,
					},
				},
			},
		},
	},
}));

const columns = [
	{
		id: 'tour_plan',
		label: 'Tour Plan',
		minWidth: 200,
	},
	{
		id: 'rating',
		label: 'Rating',
		minWidth: 170,
	},
	{
		id: 'review',
		label: 'Review',
		minWidth: 170,
	},
];

const rows = [
	{
		tourPlan: 'Dhunche to Gosaikunda',
		rating: '2022-09-11',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae enim esse, et facilis hic, ' +
			'iste maiores maxime nisi nulla perferendis perspiciatis porro quae quasi totam.',
	},
	{
		tourPlan: 'Dhunche to Gosaikunda',
		rating: '2022-09-11',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae enim esse, et facilis hic, ' +
			'iste maiores maxime nisi nulla perferendis perspiciatis porro quae quasi totam.',
	},
	{
		tourPlan: 'Dhunche to Gosaikunda',
		rating: '2022-09-11',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae enim esse, et facilis hic, ' +
			'iste maiores maxime nisi nulla perferendis perspiciatis porro quae quasi totam.',
	},
	{
		tourPlan: 'Dhunche to Gosaikunda',
		rating: '2022-09-11',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae enim esse, et facilis hic, ' +
			'iste maiores maxime nisi nulla perferendis perspiciatis porro quae quasi totam.',
	},
	{
		tourPlan: 'Dhunche to Gosaikunda',
		rating: '2022-09-11',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae enim esse, et facilis hic, ' +
			'iste maiores maxime nisi nulla perferendis perspiciatis porro quae quasi totam.',
	},
	{
		tourPlan: 'Dhunche to Gosaikunda',
		rating: '2022-09-11',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae enim esse, et facilis hic, ' +
			'iste maiores maxime nisi nulla perferendis perspiciatis porro quae quasi totam.',
	},
	{
		tourPlan: 'Dhunche to Gosaikunda',
		rating: '2022-09-11',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae enim esse, et facilis hic, ' +
			'iste maiores maxime nisi nulla perferendis perspiciatis porro quae quasi totam.',
	},
];

const MyReview = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const classes = useStyles();
	const theme = useTheme();

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<section className={classes.root}>
			<Typography variant="h2" componenta="h2" className="profile-title">
				My Review
			</Typography>
			<Paper sx={{width: '100%', overflow: 'hidden', fontFamily: "unset"}}>
				<TableContainer sx={{
					maxHeight: 440,
					fontFamily: "unset",
					overflow:"auto",
					scrollbarWidth: 'thin',
					'&::-webkit-scrollbar': {
						width: '5px',
						borderRadius: "30px",
					},
					'&::-webkit-scrollbar-track': {
						background: "#f1f1f1",
						borderRadius: "30px",
					},
					'&::-webkit-scrollbar-thumb': {
						background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
						borderRadius: "30px",
					},
					'&::-webkit-scrollbar-thumb:hover': {
						background: '#555'
					},
				}}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{minWidth: column.minWidth}}
									>
										{column.label}
									</TableCell>
								))}
								<TableCell>
									Action
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{
								rows.map((item, i) => {
									return (
										<TableRow hover role="checkbox" tabIndex={-1} key={i + "__"}>
											<TableCell style={{ minWidth: item.minWidth }}>
												<Link to="#">
													{item.tourPlan}
												</Link>
											</TableCell>
											<TableCell style={{ minWidth: item.minWidth }}>
												<Typography component="div" className="stars">
													<StarRateRoundedIcon className="colored-icons"/>
													<StarRateRoundedIcon className="colored-icons"/>
													<StarRateRoundedIcon className="colored-icons"/>
													<StarRateRoundedIcon className="colored-icons"/>
													<StarOutlineRoundedIcon/>
												</Typography>
											</TableCell>
											<TableCell style={{ minWidth: item.minWidth }}>
												{item.review}
											</TableCell>
											<TableCell>
												<Typography
													component="div"
													className="btn-wrapper"
													display="flex"
													alignItems="center"
													gap={1}>
													<Button variant="contained" className="view-btn">
														<VisibilityOutlinedIcon/>
													</Button>
												</Typography>
											</TableCell>
										</TableRow>
									)
								})
							}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</section>
	);
}

export default MyReview;