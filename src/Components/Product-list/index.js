import React, { useEffect } from "react";
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
import Image16 from "./../../Assets/Images/30.jpg";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import { CallApi, fileBaseUrl } from "../Context/ApiContext";
import { toast, ToastContainer } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .product-list": {
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
          "& .product-grid": {
            textAlign: "center",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: theme.shadows[0],
            height: "100%",
            "& .product-image": {
              overflow: "hidden",
              position: "relative",
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
                  objectFit: "cover",
                  borderRadius: "15px 15px 0 0",
                },
                "& .pic-1": {
                  transition: "all 0.5s",
                },
                "& .pic-2": {
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  transformOrigin: "center",
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "all 0.5s",
                },
              },
              "& .product-sale-label": {
                color: "#fff",
                background: theme.palette.primary.main,
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "5px 5px 2px",
                position: "absolute",
                top: "10px",
                left: "10px",
              },
              "& .product-links": {
                listStyle: "none",
                position: "absolute",
                bottom: "50px",
                right: "10px",
                "& li": {
                  margin: "0 0 10px",
                  opacity: 0,
                  transition: "all 0.5s",
                  "&:nth-child(1)": {
                    transform: "translateY(100px)",
                  },
                  "&:nth-child(2)": {
                    transform: "translateY(50px)",
                  },
                  "&:last-child": {
                    margin: 0,
                  },
                  "& a": {
                    color: theme.palette.primary.main,
                    background: "#F3F3F3",
                    fontSize: "16px",
                    lineHeight: "45px",
                    height: "44px",
                    width: "44px",
                    borderRadius: "50%",
                    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.5s ease 0s",
                    "& .MuiSvgIcon-root": {
                      fontSize: "20px",
                    },
                    "&:hover": {
                      color: "#fff",
                      background: theme.palette.primary.main,
                    },
                  },
                },
              },
            },
            "& .product-content": {
              padding: theme.spacing(2),
              "& .product-category": {
                color: theme.palette.text.descriptionText,
                fontSize: theme.typography.h5,
                fontWeight: theme.typography.fontWeightMedium,
                letterSpacing: "0.5px",
                margin: "0 0 7px",
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
                margin: "0 0 7px",
                "& a": {
                  color: theme.palette.text.gray,
                  transition: theme.transitions.easing.easeOut,
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                },
              },
              "& .price": {
                color: "#0A0B2E",
                fontSize: theme.typography.h3,
                fontWeight: theme.typography.fontWeightMedium,
                display: "block",
                "& span": {
                  display: "block",
                  fontSize: theme.typography.h4,
                  textDecoration: "line-through",
                  margin: "0 5px 0 0",
                  opacity: ".5",
                  color: "#ff0000",
                },
              },
            },
            "&:hover": {
              "& .product-image": {
                "& .image": {
                  "&::before": {
                    left: "125%",
                  },
                  "& .pic-2": {
                    opacity: 1,
                  },
                },
                "& .product-links": {
                  "& li": {
                    opacity: 1,
                    "&:nth-child(1)": {
                      transform: "translateY(0)",
                    },
                    "&:nth-child(2)": {
                      transform: "translateY(0)",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "@media(max-width: 600px)": {
      padding: theme.spacing(10, 0),
      "& .product-list": {
        "& .text-holder": {
          "& .title": {
            fontSize: theme.typography.h1,
          },
        },
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            width: "50%",
            "& .product-grid": {
              "& .product-image": {
                "& .image": {
                  "& img": {
                    height: "150px",
                  },
                },
              },
            },
          },
        },
      },
    },
    "@media(min-width: 768px)": {
      padding: theme.spacing(10, 0),
      "& .product-list": {
        "& .text-holder": {
          "& .title": {
            fontSize: theme.typography.h1,
          },
        },
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            width: "50%",
            "& .product-grid": {
              "& .product-image": {
                "& .image": {
                  "& img": {
                    height: "150px",
                  },
                },
              },
            },
          },
        },
      },
    },
    "@media(min-width: 992px)": {
      padding: theme.spacing(0, 0, 5),
      "& .product-list": {
        "& .text-holder": {
          "& .title": {
            fontSize: theme.typography.customFont2,
          },
        },
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            width: "100%",
            "& .product-grid": {
              "& .product-image": {
                "& .image": {
                  "& img": {
                    height: "200px",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}));

const ProductList = (data) => {
  const addToCart = (id) => {
    CallApi(`cart-item/add/${id}`, []).then((response) => {
      if (response?.success) {
					toast.success(response?.message, {
					  position: toast.POSITION.TOP_RIGHT,
					});
				  } else {
					toast.error(response?.message, {
					  position: toast.POSITION.TOP_RIGHT,
					});
				  }
    }).catch((error) => {
      if (error.response.status === 401) {
        toast.error("Session expired please login first.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        window.location.href = '/login';
      } else if (error.response.status === 503) {
        toast.error("Something went wrong. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };
  const classes = useStyles();

  return data?.forYouProducts && data?.forYouProducts ? (
    <section className={classes.root}>
      <ToastContainer />
      <Container className="product-list">
        <Typography component="div" className="text-holder" align="left" sx={{ mb: 2 }}>
          <Typography variant="h1" className="title">
            Just For You
          </Typography>
        </Typography>
        <Grid container spacing={3}>
          {data?.forYouProducts && data?.forYouProducts?.map((item, i) => {
            let data = {id:item.id, quantity: 1};
            let id = item?.id;
            return(
              <Grid item lg={3} md={4} sm={4} key={i + "__"}>
            <div className="product-grid">
              <div className="product-image" >
                {item?.attachments && item?.attachments?.map((attachment, i) => (
                    <Link to="/detail" state={{id}} className="image" key={i + "__"}>
                      <img className={"pic-" + (i + 1)} src={fileBaseUrl + "/product/" + attachment.name} alt={item.name}/>
                    </Link>
                  ))}
                <span className="product-sale-label">
                  Save : {item?.discountPercent ?? 0}%
                </span>
                <ul className="product-links">
                  <li>
                    <Button
                      variant="contained" onClick ={() => addToCart(item.id)}>
                      <AddShoppingCartRoundedIcon />
                    </Button>
                  </li>
                  {/* <li>
                    <Link to="#">
                      <FavoriteBorderRoundedIcon />
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/buy-now" state={{data}}>
                      <ShuffleRoundedIcon />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <div className="product-category">
                  <Link to="#">{item.categoryName}</Link>
                </div>
                <div className="title">
                  <Link to="#">{item.name}</Link>
                </div>
                <div className="price">
                  Rs.{item.salePrice} <span>Rs.{item.marketPrice}</span>
                </div>
              </div>
            </div>
          </Grid>
            )
            })}
        </Grid>
      </Container>
    </section>
  ) : null;
};

export default ProductList;
