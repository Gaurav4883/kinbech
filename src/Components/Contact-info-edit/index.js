import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {makeStyles} from "@mui/styles";
import ContactInfoForm from "./Contact-info-form";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialog-container": {
		"& .MuiPaper-root": {
			boxShadow: "none",
			borderRadius: "15px",
			"& .MuiDialogTitle-root": {
				fontSize: "24px",
				color: "#434343",
				fontWeight: theme.typography.fontWeightBold,
				padding: "20px",
			},
		},
	},
	"& .MuiBackdrop-root": {
		backgroundColor: "rgba(111, 126, 140, 0.2)",
		backdropFilter: "blur(4px)",
	},
	'& .MuiDialogContent-root': {
		padding: theme.spacing(3, 4,),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

const useStyles = makeStyles((theme)=>({
	root:{
		"& .edit-btn": {
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
}));

function BootstrapDialogTitle(props) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton aria-label="close" onClick={onClose}
					sx={{ position: 'absolute', right: 8, top: 8,
						color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}


BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

const ContactInfoEdit =(data) =>{
	const contact = data?.contact;
	const [open, setOpen] = useState(false);
	const classes = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<section className={classes.root}>
			<Button variant="contained" onClick={handleClickOpen} className="edit-btn">
				Change
			</Button>
			<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title"
				open={open}>
				<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
					Edit Contact Information
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<ContactInfoForm contact = {contact}/>
				</DialogContent>
			</BootstrapDialog>
		</section>
	);
}

export default ContactInfoEdit;