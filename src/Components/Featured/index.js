import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "./../../Assets/Images/tshirt.png";
import Image2 from "./../../Assets/Images/basketbass.png";
import Image3 from "./../../Assets/Images/tshirt.png";
import Image4 from "./../../Assets/Images/basketbass.png";
import Image5 from "./../../Assets/Images/tshirt.png";
import Image6 from "./../../Assets/Images/basketbass.png";
import { makeStyles } from "@mui/styles";
import { Button, Container, Typography } from "@mui/material";
import { CallApi } from "../Context/ApiContext";
import { fileBaseUrl } from "../Context/ApiContext";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .featured": {
      background: "#fff",
      borderRadius: "15px",
      padding: "20px",
      "& .text-holder": {
        marginBottom: theme.spacing(10),
        "& .title": {
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.text.gray,
        },
      },
      "& .slick-slider": {
        "& .slick-prev": {
          left: "-10px",
          zIndex: 1,
          height: "40px",
          width: "40px",
          boxShadow: theme.shadows[1],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: `1px solid ${theme.palette.text.descriptionText}`,
          "&::before": {
            content: "'\\f104'",
            font: "normal normal normal 24px/1 FontAwesome",
            color: theme.palette.text.descriptionText,
          },
        },
        "& .slick-next": {
          right: "-10px",
          zIndex: 1,
          height: "40px",
          width: "40px",
          boxShadow: theme.shadows[1],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: `1px solid ${theme.palette.text.descriptionText}`,
          "&::before": {
            content: "'\\f105'",
            font: "normal normal normal 24px/1 FontAwesome",
            color: theme.palette.text.descriptionText,
          },
        },
        "& .slick-list": {
          "& .slick-track": {
            "& .slick-slide": {
              "& .category-slider": {
                "& a": {
                  background: "rgb(254 252 232)",
                  padding: theme.spacing(6),
                  display: "flex",
                  alignItems: "center",
                  borderRadius: theme.shape.borderRadius5,
                  "& .content-holder": {
                    "& .sub-title": {
                      color: theme.palette.text.descriptionText,
                      fontSize: theme.typography.h4,
                    },
                    "& .title": {
                      color: theme.palette.text.gray,
                      fontWeight: theme.typography.fontWeightSemiBold,
                      fontSize: theme.typography.h2,
                    },
                    "& .MuiButtonBase-root": {
                      background: theme.palette.text.light,
                      color: theme.palette.text.gray,
                      fontWeight: theme.typography.fontWeightSemiBold,
                      textTransform: "capitalize",
                      borderRadius: theme.shape.borderRadius6,
                      boxShadow: "2px 8px 40px rgb(0 0 0 / 8%)",
                      minWidth: "150px",
                      padding: "10px 20px",
                    },
                  },
                  "& img": {
                    maxHeight: "200px",
                    objectFit: "contain",
                  },
                },
              },
            },
          },
        },
      },
    },
    "@media(max-width: 600px)": {
      padding: theme.spacing(5, 0),
      "& .featured": {
        "& .text-holder": {
          "& .title": {
            fontSize: theme.typography.h1,
          },
        },
        "& .category-slider": {
          "& a": {
            flexWrap: "wrap",
            "& .content-holder": {
              order: 2,
              "& .title": {
                marginBottom: "20px",
              },
            },
            "& img": {
              order: 1,
              marginBottom: "10px",
            },
          },
        },
      },
    },
    "@media(min-width: 768px)": {
      padding: theme.spacing(5, 0),
      "& .featured": {
        "& .text-holder": {
          "& .title": {
            fontSize: theme.typography.h1,
          },
        },
        "& .category-slider": {
          "& a": {
            flexWrap: "wrap",
            "& .content-holder": {
              order: 2,
              "& .title": {
                marginBottom: "20px",
              },
            },
            "& img": {
              order: 1,
              marginBottom: "10px",
            },
          },
        },
      },
    },
    "@media(min-width: 992px)": {
      padding: theme.spacing(0, 0, 0),
      "& .featured": {
        "& .text-holder": {
          "& .title": {
            fontSize: theme.typography.customFont2,
          },
        },
        "& .category-slider": {
          "& a": {
            flexWrap: "nowrap",
            "& .content-holder": {
              order: 1,
              "& .title": {
                marginBottom: "80px",
              },
            },
            "& img": {
              order: 2,
              marginBottom: "0",
            },
          },
        },
      },
    },
  },
}));

// const featuredList = [
//   {
//     title: "Lorem ipsum dolor sit amet.",
//     subtitle: "Digital gift cards",
//     image: Image,
//     className: "green",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet.",
//     subtitle: "Digital gift cards",
//     image: Image2,
//     className: "blue",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet.",
//     subtitle: "Digital gift cards",
//     image: Image3,
//     className: "black",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet.",
//     subtitle: "Digital gift cards",
//     image: Image4,
//     className: "red",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet.",
//     subtitle: "Digital gift cards",
//     image: Image5,
//     className: "skyblue",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet.",
//     subtitle: "Digital gift cards",
//     image: Image6,
//     className: "yellow",
//   },
// ];

const Featured = (data) => {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: data?.featuredCategories?.length > 1,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: data?.featuredCategories?.length > 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className={classes.root}>
      <Container className="featured">
        <Typography component="div" className="text-holder">
          <Typography variant="h2" className="title">
            Top Products
          </Typography>
        </Typography>
        <Slider {...settings}>
          {data?.featuredCategories &&
            data?.featuredCategories?.map((item, i) => {
              let id = item.id;
              return (
                <Typography component="div" className="category-slider" key={i + "__"}>
                  <Typography component="div" className="center" sx={{ mx: 1 }}>
                    <Link to="/list" state={{id}}>
                      <Typography component="div" className="content-holder">
                        <Typography ariant="h6" className="sub-title" sx={{ mb: 1 }}>
                          {item.description}
                        </Typography>
                        <Typography variant="h4" className="title" sx={{ mb: 10 }}>
                          {item.name}
                        </Typography>
                        <Button variant="contained">Shop Now</Button>
                      </Typography>
                      <img
                        src={ fileBaseUrl + "/category_thumbnail/" + item.thumbnailImage}
                        alt="img" width="100%"
                      />
                    </Link>
                  </Typography>
                </Typography>
              );
            })}
        </Slider>
      </Container>
    </section>
  );
};

export default Featured;
