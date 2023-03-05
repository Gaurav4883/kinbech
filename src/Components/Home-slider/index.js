import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import { CallApi } from "../Context/ApiContext";
import { fileBaseUrl } from "../Context/ApiContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(5),
    "& .MuiGrid-root": {
      "& .MuiGrid-item": {
        width: "100%",
        "& .slick-prev": {
          left: 20,
          zIndex: 1,
          "&::before": {
            content: "'\\f104'",
            font: "normal normal normal 32px/1 FontAwesome",
          },
        },
        "& .slick-next": {
          zIndex: 1,
          right: 20,
          "&::before": {
            content: "'\\f105'",
            font: "normal normal normal 32px/1 FontAwesome",
          },
        },
        "& .home-slider": {
          "& .img-holder": {
            height: "400px",
            width: "90%",
            marginLeft: "80px",
            borderRadius: theme.shape.borderRadius5,
            position: "relative",
            "&::before": {
              content: "''",
              position: "absolute",
              left: 0,
              top: 0,
              background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 99%, transparent 100%)`,
              height: "100%",
              width: "100%",
              zIndex: 1,
              borderRadius: "15px",
            },
            "& .content-holder": {
              position: "absolute",
              left: "50px",
              bottom: "20px",
              zIndex: 1,
              "& .sub-title": {
                color: theme.palette.text.light,
                fontSize: theme.typography.h2,
              },
              "& .title": {
                color: theme.palette.text.light,
                fontWeight: theme.typography.fontWeightBold,
                marginBottom: "10px",
              },
              "& .price": {
                fontSize: theme.typography.h2,
                color: theme.palette.text.light,
                "& span": {
                  fontSize: theme.typography.customFont2,
                  color: theme.palette.secondary.main,
                  fontWeight: theme.typography.fontWeightBold,
                },
              },
              "& .MuiButtonBase-root": {
                background: theme.palette.secondary.main,
                color: theme.palette.text.light,
                fontSize: theme.typography.h5,
                textTransform: "capitalize",
                boxShadow: "none",
                border: "2px solid #fff",
                borderRadius: theme.shape.borderRadius7,
                "& .MuiSvgIcon-root": {
                  fontSize: theme.typography.h3,
                },
              },
            },
          },
        },
        "& .category-list": {
          "& .category-image": {
            "& a": {
              position: "relative",
              display: "block",
              overflow: "hidden",
              "&::before": {
                content: "''",
                position: "absolute",
                left: 0,
                top: 0,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, transparent 99%, transparent 100%)`,
                height: "180px",
                width: "100%",
                zIndex: 1,
                borderRadius: "15px",
              },
              "& img": {
                borderRadius: "15px",
                position: "relative",
              },
              "& .content-holder": {
                position: "absolute",
                left: "20px",
                bottom: "20px",
                zIndex: 2,
                "& .sub-title": {
                  color: theme.palette.text.light,
                  fontSize: theme.typography.h5,
                },
                "& .title": {
                  fontSize: theme.typography.h3,
                  color: theme.palette.text.light,
                  fontWeight: theme.typography.fontWeightSemiBold,
                  marginBottom: "5px",
                },
                "& .price": {
                  fontSize: theme.typography.h3,
                  color: theme.palette.text.light,
                },
                "& .button": {
                  color: theme.palette.secondary.main,
                  fontSize: theme.typography.h5,
                  "& .MuiSvgIcon-root": {
                    fontSize: theme.typography.h3,
                  },
                },
              },
            },
          },
        },
      },
    },
    "@media(max-width: 600px)": {
      marginTop: theme.spacing(20),
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          "& .title": {
            fontSize: theme.typography.h1,
          },
        },
      },
    },
    "@media(min-width: 768px)": {
      marginTop: theme.spacing(20),
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          "& .title": {
            fontSize: theme.typography.h1,
          },
        },
      },
    },
    "@media(min-width: 992px)": {
      marginTop: theme.spacing(0),
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          "& .content-holder": {
            width: "50%",
            "& .title": {
              fontSize: theme.typography.customFont2,
            },
          },
        },
      },
    },
  },
}));

const HomeSlider = (data) => {
  const classes = useStyles();
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className={classes.root}>
      <Container>
        <Grid spacing={5}>
          <Grid item lg={8} md={8} sm={12}>
            <Slider {...settings}>
              {data?.sliders &&
                data?.sliders?.map((item, i) => {
                  return (
                    <div className="home-slider" key={i + "__"}>
                      <Typography
                        component="div"
                        className="img-holder background-image"
                        style={{
                          backgroundImage: `url('${fileBaseUrl}/slider_image/${item.image}')`,
                        }}
                      >
                        <Typography component="div" className="content-holder">
                          <Typography variant="h6" className="sub-title">
                            {item.subTitle}

                          </Typography>
                          <Typography variant="h2" className="title">
                            {item.title}
                          </Typography>
                          {/* <Typography
                                                  variant="h5"
                                                  className="price"
                                                  sx={{ mb: 1 }}
                                                >
                                                  Today: <span>Rs.{item.price}</span>
                                                </Typography> */}
                          <Button variant="contained" component={Link} to="/list">
                            Shop Now
                            <ArrowForwardRoundedIcon />
                          </Button>
                        </Typography>
                      </Typography>
                    </div>
                  );
                })}
            </Slider>
          </Grid>
        </Grid>
      </Container >
    </section >
  )
};

export default HomeSlider;
