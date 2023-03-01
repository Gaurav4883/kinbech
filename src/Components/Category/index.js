import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "./../../Assets/Images/14.jpg";
import Image2 from "./../../Assets/Images/15.jpg";
import Image3 from "./../../Assets/Images/16.jpg";
import Image4 from "./../../Assets/Images/17.jpg";
import Image5 from "./../../Assets/Images/18.jpg";
import Image6 from "./../../Assets/Images/24.jpg";
import Image7 from "./../../Assets/Images/19.jpg";
import Image8 from "./../../Assets/Images/25.jpg";
import Image9 from "./../../Assets/Images/20.jpg";
import Image10 from "./../../Assets/Images/21.jpg";
import Image11 from "./../../Assets/Images/26.jpg";
import Image12 from "./../../Assets/Images/27.jpg";
import Image13 from "./../../Assets/Images/22.jpg";
import Image14 from "./../../Assets/Images/23.jpg";
import Image15 from "./../../Assets/Images/28.jpg";
import Image16 from "./../../Assets/Images/29.jpg";
import Image17 from "./../../Assets/Images/bg.jpg";
import Image18 from "./../../Assets/Images/bg2.jpg";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import { CallApi } from "../Context/ApiContext";
import { fileBaseUrl } from "../Context/ApiContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .category-list": {
      background: "#fff",
      padding: "20px",
      borderRadius: "25px",
      "& .text-holder": {
        "& .title": {
          color: theme.palette.text.gray,
          fontWeight: theme.typography.fontWeightBold,
        },
      },
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          width: "50%",
          "& .category-grid": {
            textAlign: "center",
            border: "1px solid #eee",
            borderRadius: "15px",
            padding: theme.spacing(2),
            "& .category-image": {
              overflow: "hidden",
              position: "relative",
              marginBottom: theme.spacing(2),
              borderRadius: "10px",
              "& .image": {
                display: "block",
                "&::before": {
                  content: "''",
                  background:
                    "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%)",
                  width: "50%",
                  height: "100%",
                  transform: "skewX(-25deg)",
                  position: "absolute",
                  top: 0,
                  left: "-75%",
                  zIndex: 2,
                  transition: "all 0.5s",
                },
                "& img": {
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                },
                "& .pic-1": {
                  transition: "all 0.5s",
                },
              },
            },
            "& .category-content": {
              "& .category-div": {
                color: theme.palette.text.descriptionText,
                fontSize: theme.typography.h5,
                fontWeight: theme.typography.fontWeightMedium,
                letterSpacing: "0.5px",
                display: "block",
                "& a": {
                  color: theme.palette.text.descriptionText,
                  transition: theme.transitions.easing.easeOut,
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                },
              },
              "& .title": {
                fontSize: theme.typography.h3,
                fontWeight: theme.typography.fontWeightMedium,
                letterSpacing: "1px",
                textTransform: "capitalize",
                "& a": {
                  color: theme.palette.text.gray,
                  transition: theme.transitions.easing.easeOut,
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                },
              },
            },
            "&:hover": {
              "& .category-image": {
                "& .image": {
                  "&::before": {
                    left: "125%",
                  },
                  "& .pic-1": {
                    transform: "scale(1.5)",
                  },
                },
              },
            },
          },
        },
      },
    },
    "@media(max-width: 600px)": {
      padding: theme.spacing(1, 0),
      "& .category-list": {
        "& .text-holder": {
          "& .title": {
            fontSize: theme.typography.h1,
          },
        },
      },
    },
    "@media(min-width: 768px)": {
      padding: theme.spacing(10, 0),
      "& .category-list": {
        "& .text-holder": {
          "& .title": {
            fontSize: theme.typography.h1,
          },
        },
      },
    },
    "@media(min-width: 992px)": {
      padding: theme.spacing(5, 0),
      "& .category-list": {
        "& .text-holder": {
          "& .title": {
            fontSize: theme.typography.customFont2,
          },
        },
      },
    },
  },
}));

const Category = (data) => {

  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container className="category-list">
        <Typography component="div" className="text-holder" align="left" sx={{ mb: 5 }} >
          <Typography variant="h1" className="title">
            Categories
          </Typography>
        </Typography>
        <Grid container spacing={1}>
          {data?.subCategories && data?.subCategories?.map((item, i) => {
              let id = item.id;
              return (
                <Grid item lg={2} md={6} sm={6} key={i + "__"}>
                  <div className="category-grid"  key={i + "__"}>
                    <div className="category-image">
                      <Link to="/list" state={{ id }} className="image">
                        <img
                          className="pic-1"
                          src={
                            fileBaseUrl +
                            "/category_thumbnail/" +
                            item.thumbnailImage
                          }
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="category-content">
                      <div className="category-div">
                        <Link to="/list" state={{ id }}>
                          {item.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </section>
  );
};

export default Category;
