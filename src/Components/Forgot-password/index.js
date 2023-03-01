import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {makeStyles} from "@mui/styles";
import TextField from "@mui/material/TextField";

// eslint-disable-next-line no-sequences
const BootstrapDialog = styled(Dialog)(({theme}) => ({
	'& .MuiDialog-root': {},
	'& .MuiPaper-root': {
		margin: '50px 0',
		boxShadow: 'none',
		borderRadius: '15px',
		width: '700px',
		overflowY: 'unset',
	},
	'& .MuiBackdrop-root': {
		backgroundColor: 'rgba(111, 126, 140, 0.2)',
		backdropFilter: "blur(4px)",
	},
	"& .MuiDialogTitle-root": {
		fontWeight: theme.typography.fontWeightBold,
		letterSpacing: 0,
		color: "#231F20",
		fontSize: "32px",
	},
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
		fontFamily: "unset",
		"& .MuiFormControl-root": {
			"& .MuiFormLabel-root": {
				fontFamily: "unset",
				fontWeight: theme.typography.fontWeightMedium,
			},
		},
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(2, 0, 3),
		justifyContent: "center",
		"& .MuiButtonBase-root": {
			background: "linear-gradient(to right, #951B81 0%, #F18500 100%)",
			color: "#fff",
			textTransform: "capitalize",
			minWidth: "200px",
			borderRadius: "8px",
			boxShadow: "0 10px 50px #951b814f",
			fontWeight: 600,
			fontSize: "18px",
			padding: "8px 16px",
		},
	},
}));

const useStyles = makeStyles((theme) => ({
	root: {
		"& .forgot-btn": {
			padding: "0 !important",
			background: "transparent !important",
			boxShadow: "none !important",
			color: theme.palette.primary.main + "!important",
			textTransform: "capitalize",
			fontSize: theme.typography.h4,
			fontWeight: theme.typography.fontWeightSemiBold,
			marginLeft: "auto !important",
			justifyContent: "flex-end !important",
			borderRadius: "0 !important",
			"& .MuiTouchRipple-root": {
				display: "none !important",
			},
			"&:hover": {
				color: theme.palette.secondary.main + "!important",
			},
		},
	},
}));

function BootstrapDialogTitle(props) {
	const {children, onClose, ...other} = props;

	return (
		<DialogTitle sx={{m: 0, p: 2}} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon/>
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

const ForgotPassword = () => {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<section className={classes.root}>
			<Button className="forgot-btn" onClick={handleClickOpen}>
				Forgot Password ?
			</Button>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
					Forgot your password
				</BootstrapDialogTitle>
				<DialogContent>
					<TextField
						id="standard-textarea"
						label="Email"
						name="email"
						type="email"
						placeholder="Enter Your Email"
						autoFocus={true}
						variant="standard"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>
						Continue
					</Button>
				</DialogActions>
			</BootstrapDialog>
		</section>
	);
}

export default ForgotPassword;