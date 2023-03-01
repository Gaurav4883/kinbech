import React, { useState } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { Button, Typography } from "@mui/material";
import ForgotPassword from "../../Forgot-password";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CallApi } from "../../Context/ApiContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .login-form": {
      "& .MuiFormControl-root": {
        marginBottom: theme.spacing(6),
        "& .MuiFormLabel-root": {
          fontFamily: "unset",
          "&.Mui-focused": {
            color: theme.palette.primary.main,
          },
        },
        "& .MuiInputBase-root": {
          borderRadius: theme.shape.borderRadius4,
          color: theme.palette.text.descriptionText,
          "& .MuiInputAdornment-root": {
            color: theme.palette.text.descriptionText,
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
              borderWidth: "1px",
            },
          },
        },
      },
      "& .MuiButtonBase-root": {
        background: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius4,
        minWidth: "120px",
        boxShadow: theme.shadows[1],
        padding: theme.spacing(2),
        width: "100%",
        margin: theme.spacing(0, "auto", 6, "auto"),
        display: "flex !important",
        justifyContent: "center",
      },
      "& .or": {
        fontSize: theme.typography.h4,
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.text.descriptionText,
        marginBottom: theme.spacing(6),
      },
      "& .social-medias-btn": {
        "& .google-btn": {
          position: "relative",
          padding: "2px",
          width: "100%",
          "& .MuiButtonBase-root": {
            margin: theme.spacing(0),
            background: "#DB4437",
            boxShadow: theme.shadows[0],
            color: theme.palette.text.light,
            border: "none",
            padding: theme.spacing(2),
            fontSize: theme.typography.h5,
            textTransform: "capitalize",
            minWidth: "140px",
            transition: theme.transitions.easing.easeOut,
            borderRadius: theme.shape.borderRadius7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiSvgIcon-root": {
              marginRight: theme.spacing(1),
              fontSize: theme.typography.h2,
              transition: theme.transitions.easing.easeOut,
            },
            "&:hover": {
              background: theme.palette.primary.main,
              color: "#fff",
              "& .MuiSvgIcon-root": {
                color: "#fff ! important",
              },
            },
          },
        },
        "& .facebook-btn": {
          position: "relative",
          padding: "2px",
          width: "100%",
          "& .MuiButtonBase-root": {
            margin: theme.spacing(0),
            background: "#4267B2",
            boxShadow: theme.shadows[0],
            color: theme.palette.text.light,
            border: "none",
            padding: theme.spacing(2),
            fontSize: theme.typography.h5,
            textTransform: "capitalize",
            minWidth: "140px",
            transition: theme.transitions.easing.easeOut,
            borderRadius: theme.shape.borderRadius7,
            "& .MuiSvgIcon-root": {
              marginRight: theme.spacing(1),
              fontSize: theme.typography.h2,
              transition: theme.transitions.easing.easeOut,
            },
            "&:hover": {
              background: theme.palette.primary.main,
              color: "#fff",
              "& .MuiSvgIcon-root": {
                color: "#fff ! important",
              },
            },
          },
        },
      },
    },
  },
}));

const LoginForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const classes = useStyles();
  const theme = useTheme();
  const nav = useNavigate();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server
    const data = values;
    CallApi("auth/signin", data)
      .then((response) => {
        response = response.data;
        if (response.success) {
          Cookies.set("jwtToken", response?.token);
          toast.success(response.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          window.location.href = '/profile';
        } else {
          toast.error(response.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          toast.error("Invalid Credentials, Please retry.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (error.response?.status === 503) {
          toast.error("Something went wrong. Please try again later.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };
  return (
    <section className={classes.root}>
      <ToastContainer />
      <Box component="form" className="login-form" onSubmit={handleSubmit}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput
            type="text"
            value={values.username}
            onChange={handleChange("username")}
            name="username"
            endAdornment={
              <InputAdornment
                position="end"
                aria-label="toggle password visibility"
              >
                <MailRoundedIcon />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          style={{ marginBottom: "10px" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment
                position="end"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Typography
          component="div"
          className="forget-password"
          align="right"
          sx={{ mb: 4 }}
        >
          <ForgotPassword />
        </Typography>
        <Button variant="contained" type="submit">
          Login
        </Button>
        <Typography component="div" className="or" align="center">
          Or Continue with
        </Typography>
        <Typography
          component="div"
          className="social-medias-btn"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{ mb: 4 }}
        >
          <Typography component="div" className="google-btn">
            <Button variant="contained">
              <GoogleIcon />
              Google
            </Button>
          </Typography>
          <Typography component="div" className="facebook-btn">
            <Button variant="contained">
              <FacebookRoundedIcon />
              Facebook
            </Button>
          </Typography>
        </Typography>
        <Typography component="div" className="forget-password" align="center">
          <Typography
            variant="span"
            style={{
              fontWeight: 600,
              color: theme.palette.text.descriptionText,
              marginRight: theme.spacing(2),
            }}
          >
            Don’t have an account?
          </Typography>
          <Link
            to="/register"
            style={{ fontWeight: 600, color: theme.palette.secondary.main }}
          >
            REGISTER
          </Link>
        </Typography>
      </Box>
    </section>
  );
};

export default LoginForm;
