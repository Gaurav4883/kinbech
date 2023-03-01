import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
import Box from "@mui/material/Box";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { CallApi } from "../../Context/ApiContext";
import { dark } from "@mui/material/styles/createPalette";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    },
  },
}));

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    username: "",
    password: "",
    showPassword: false,
  });
  const classes = useStyles();
  const theme = useTheme();

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
    CallApi("auth/signup", data).then((response) => {
      console.log(response);
      response = response?.data;
      if (response?.success) {
        toast.success(response?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  return (
    <section className={classes.root}>
      <ToastContainer />
      <Box component="form" className="login-form" onSubmit={handleSubmit}>
        <FormControl variant="outlined" fullWidth style={{ marginTop: "5px" }}>
          <InputLabel htmlFor="name">Full Name</InputLabel>
          <OutlinedInput
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            name="name"
            endAdornment={
              <InputAdornment
                position="end"
                aria-label="toggle password visibility"
              >
                <PersonOutlineRoundedIcon />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>
        <FormControl variant="outlined" fullWidth style={{ marginTop: "5px" }}>
          <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
          <OutlinedInput
            type="text"
            value={values.mobileNumber}
            onChange={handleChange("mobileNumber")}
            name="mobileNumber"
            endAdornment={
              <InputAdornment
                position="end"
                aria-label="toggle password visibility"
              >
                <PersonOutlineRoundedIcon />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>

        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            name="email"
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
                <PersonOutlineRoundedIcon />
              </InputAdornment>
            }
            label="Username"
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
        <Typography component="div" className="forget-password" align="center">
          <Typography
            variant="span"
            style={{
              fontWeight: 600,
              color: theme.palette.text.descriptionText,
              marginRight: theme.spacing(2),
            }}
          >
            Already have an account?
          </Typography>
          <Link
            to="/login"
            style={{ fontWeight: 600, color: theme.palette.secondary.main }}
          >
            LOGIN
          </Link>
        </Typography>
      </Box>
    </section>
  );
};

export default RegisterForm;
