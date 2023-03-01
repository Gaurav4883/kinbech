import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Badge, Typography } from "@mui/material";
import Image from "../../Assets/Images/bg.jpg";
import Image2 from "../../Assets/Images/bg2.jpg";
import Image3 from "../../Assets/Images/basketbass.png";
import Image4 from "../../Assets/Images/tshirt.png";
import WishListItem from "./Wish-list-items";
import DialogActions from "@mui/material/DialogActions";

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
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3, 4),
    "& .add-to-cart-list": {
      marginBottom: theme.spacing(4),
      "& .add-to-cart-item": {
        borderBottom: `1px solid rgb(226 232 240)`,
        paddingBottom: theme.spacing(4),
        marginBottom: theme.spacing(4),
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
              objectFit: "cover",
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
                  fontSize: "18px",
                  fontWeight: theme.typography.fontWeightBold,
                  color: "#434343",
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
              },
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
                background: "#caf0f8",
                color: "#434343",
                boxShadow: "none",
                transition: "all .3s ease-out",
                minWidth: "unset",
                padding: "6px 10px",
                "&:hover": {
                  background: theme.palette.primary.main,
                  color: "#fff",
                },
              },
            },
            "& .remove-btn": {
              "& .MuiButtonBase-root": {
                background: "#caf0f8",
                color: "#434343",
                boxShadow: "none",
                transition: "all .3s eas-out",
                textTransform: "capitalize",
                fontSize: "16px",
                borderRadius: "8px",
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
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    "& .view-cart": {
      border: "1px solid #caf0f8",
      color: "#434343",
      boxShadow: "none",
      transition: "all .3s ease-out",
      minWidth: "150px",
      padding: "6px 10px",
      borderRadius: "8px",
      fontWeight: 600,
      textTransform: "capitalize",
      fontSize: "16px",
      "&:hover": {
        background: theme.palette.primary.main,
        color: "#fff",
      },
    },
    "& .checkout": {
      background: "#caf0f8",
      color: "#434343",
      boxShadow: "none",
      transition: "all .3s ease-out",
      padding: "6px 10px",
      borderRadius: "8px",
      fontWeight: 600,
      textTransform: "capitalize",
      fontSize: "16px",
      minWidth: "150px",
      "&:hover": {
        background: theme.palette.primary.main,
        color: "#fff",
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    "& .edit-btn": {
      background: "transparent",
      color: theme.palette.text.light,
      textTransform: "capitalize",
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.h4,
      boxShadow: "none",
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      minWidth: "unset",
      "&:hover": {
        color: theme.palette.secondary.main,
        background: "rgba(255, 255, 255, .25)",
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
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
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

const wishlist = [
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Image,
    price: "500",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Image2,
    price: "500",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Image3,
    price: "500",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Image4,
    price: "500",
  },
];
const WishList = () => {
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
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className="edit-btn"
      >
        <Badge color="secondary" badgeContent={99 + "+"}>
          <FavoriteBorderRoundedIcon />
        </Badge>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Wish List
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography component="div" className="add-to-cart-list">
            {wishlist.map((item, i) => {
              return <WishListItem item={item} key={i + "__"} />;
            })}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" className="view-cart">
            View cart
          </Button>
          <Button variant="contained" className="checkout">
            Check out
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </section>
  );
};

export default WishList;
