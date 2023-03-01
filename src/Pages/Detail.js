import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Typography } from "@mui/material";
import Breadcrumbs from "../Components/Breadcrumbs";
import Slider from "react-slick";
import Image from "./../Assets/Images/bg.jpg";
import Image2 from "./../Assets/Images/bg2.jpg";
import Image3 from "./../Assets/Images/22.jpg";
import Image4 from "./../Assets/Images/26.jpg";
import Image5 from "./../Assets/Images/29.jpg";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ReviewsRatings from "../Components/Review-section";
import { Link } from "react-router-dom";
import { CallApi } from "../Components/Context/ApiContext";
import { fileBaseUrl } from "../Components/Context/ApiContext";
import { useLocation } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { toast, ToastContainer } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 0),
    "& .detail": {
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          width: "100%",
          "& .slick-slider": {
            display: "flex",
            gap: "5px",
            "& .slick-dots": {
              width: "80px",
              position: "relative",
              bottom: "0",
              background: "rgba(255,255,255,.15)",
              padding: theme.spacing(0, 0),
              order: 1,
              "& li": {
                height: "unset",
                width: "unset",
                transition: theme.transitions.easing.easeOut,
                "&:not(:last-child)": {
                  marginBottom: "5px",
                },
                "& .thumb-bg": {
                  height: "65.5px",
                  width: "70px",
                  position: "relative",
                  zIndex: 1,
                  opacity: 0.5,
                  borderRadius: "5px",
                },
              },
              "& .slick-active": {
                position: "relative",
                "&::before": {
                  content: "''",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                  height: "65.5px",
                  width: "70px",
                  borderRadius: "5px",
                  border: `1px solid ${theme.palette.secondary.main}`,
                  transition: theme.transitions.easing.easeOut,
                },
                "& .thumb-bg": {
                  opacity: 1,
                },
              },
            },
            "& .slick-list": {
              width: "100%",
              order: 2,
              "& .slick-track": {
                "& .slick-slide": {
                  "& .home-slider-list": {
                    "& .img-holder": {
                      width: "100%",
                      height: "369px",
                      "& .bg-stretch": {
                        height: "100%",
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "15px",
                        "& .content-holder": {
                          position: "relative",
                          zIndex: 1,
                          "& .sub-title": {
                            color: "#fff",
                            fontWeight: theme.typography.fontWeightMedium,
                            fontSize: theme.typography.h2.fontSize,
                            marginBottom: theme.spacing(2),
                          },
                          "& .title": {
                            color: "#fff",
                            fontWeight: theme.typography.fontWeightBold,
                            fontSize: "52px",
                            margin: theme.spacing(0, "auto", 2),
                          },
                          "& .description": {
                            color: "#fff",
                            fontWeight: theme.typography.fontWeightMedium,
                            fontSize: theme.typography.h3.fontSize,
                            margin: theme.spacing(0, "auto"),
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "& .content-holder": {
            "& .title": {
              fontSize: theme.typography.h1,
              fontWeight: theme.typography.fontWeightSemiBold,
              color: theme.palette.text.gray,
              marginBottom: theme.spacing(4),
            },
            "& .stars": {
              marginBottom: theme.spacing(4),
              "& .MuiSvgIcon-root": {
                color: theme.palette.secondary.main,
                fontSize: theme.typography.h2,
              },
              "& span": {
                color: theme.palette.text.descriptionText,
              },
            },
            "& .price": {
              fontSize: theme.typography.h2,
              color: theme.palette.secondary.main,
              fontWeight: theme.typography.fontWeightSemiBold,
              marginBottom: theme.spacing(4),
            },
            "& .description": {
              color: theme.palette.text.descriptionText,
              fontWeight: theme.typography.fontWeightMedium,
              marginBottom: theme.spacing(6),
            },
            "& .qty-btn": {
              marginBottom: theme.spacing(6),
              "& .plus": {
                background: "#eff0f5",
                color: theme.palette.text.gray,
                minWidth: "unset",
              },
              "& .number": {
                color: theme.palette.text.gray,
              },
              "& .minus": {
                background: "#eff0f5",
                color: theme.palette.text.gray,
                minWidth: "unset",
              },
            },
            "& .button-holder": {
              "& .buy-now": {
                backgroundColor: theme.palette.primary.main,
                boxShadow: theme.shadows[1],
                minWidth: "150px",
                textTransform: "capitalize",
                fontSize: theme.typography.h4,
                borderRadius: theme.shape.borderRadius3,
              },
              "& .add-to-cart": {
                backgroundColor: theme.palette.secondary.main,
                boxShadow: theme.shadows[1],
                minWidth: "150px",
                textTransform: "capitalize",
                fontSize: theme.typography.h4,
                borderRadius: theme.shape.borderRadius3,
              },
            },
          },
          "& .MuiTabs-root": {
            "& .MuiTabs-scroller": {
              "& .MuiTabs-flexContainer": {
                justifyContent: "center",
                "& .MuiButtonBase-root": {
                  textTransform: "capitalize",
                  fontSize: theme.typography.h4,
                  color: theme.palette.text.descriptionText,
                  "&:not(:last-child)": {
                    marginRight: theme.spacing(6),
                  },
                },
                "& .Mui-selected": {},
              },
              "& .MuiTabs-indicator": {
                backgroundColor: theme.palette.secondary.main,
              },
            },
          },
          "& .tabs-content": {
            "& .tab-items": {
              border: "1px solid rgb(0 0 0 / 12%)",
              padding: theme.spacing(4),
              borderRadius: "15px",
              "& .tab-title": {
                fontSize: theme.typography.h2,
                color: theme.palette.text.gray,
                fontWeight: theme.typography.fontWeightSemiBold,
              },
              "& .description": {
                color: theme.palette.text.descriptionText,
                lineHeight: 2,
                fontWeight: theme.typography.fontWeightMedium,
              },
            },
          },
        },
      },
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography component="div" className="tabs-content">
          {children}
        </Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// const slider = [
// 	{
// 		image: Image,
// 	},
// 	{
// 		image: Image2,
// 	},
// 	{
// 		image: Image3,
// 	},
// 	{
// 		image: Image4,
// 	},
// 	{
// 		image: Image5,
// 	},
// ];

const Detail = () => {
  var location = useLocation();
  let { id } = location?.state ?? 0;
  const [product, setProduct] = useState();
  const [slider, setSlider] = useState();
  const [count, setCount] = useState(1);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (id) {
      CallApi(`product/find-by-id/${id}`, []).then((response) => {
        let data = response?.data;
        if (data?.success) {
          setProduct(data?.body?.products);
          setSlider(data?.body?.products?.attachment);
        }
      });
    }
  }, []);

  const imagesUrlMap = new Map();

  slider &&
    slider?.map((item, key) => {
      imagesUrlMap.set(key, fileBaseUrl + "/product/" + item.name);
    });

  const increment = () => {
    if (count < 100) setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const settings = {
    customPaging: function (key) {
      return (
        <div
          className="thumb-bg background-image"
          style={{ backgroundImage: `url('${imagesUrlMap.get(key)}')` }}
        />
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 600,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const addToCart = (id) => {
    CallApi(`cart-item/add/${id}`, []).then((response) => {
      if (response?.data?.success) {
        toast.success(response?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        } else {
        toast.error(response?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        }
    });
  };
  let data = { id: id, quantity: count };
  return (
    <>
      <Breadcrumbs />
      {product ? (
        <section className={classes.root}>
          <ToastContainer />
          <Container className="detail">
            <Grid container spacing={3}>
              <Grid item lg={6} md={12} sm={12}>
                <Slider {...settings}>
                  {slider &&
                    slider?.map((item, i) => {
                      return (
                        <Typography component="div" className="home-slider-list" key={i + "__"}>
                          <Typography component="div" className="img-holder">
                            <Typography component="div" className="bg-stretch background-image"
                              style={{
                                backgroundImage: `url('${fileBaseUrl}/product/${item.name}')`,
                              }}>
                              {item.title ? (
                                <Typography component="div" className="content-holder" align="center">
                                  <Typography variant="h1" className="title">
                                    {item.title}
                                  </Typography>
                                  <Typography variant="p" component="p" className="description">
                                    {item.summary}
                                  </Typography>
                                </Typography>
                              ) : null}
                            </Typography>
                          </Typography>
                        </Typography>
                      );
                    })}
                </Slider>
              </Grid>
              <Grid item lg={6} md={6} sm={6} mb={5}>
                <Typography component="div" className="content-holder">
                  <Typography variant="h1" className="title">
                    {product?.name}
                  </Typography>
                  <Typography component="div" className="stars" display="flex" alignItems="center">
                    <StarRateRoundedIcon />
                    <StarRateRoundedIcon />
                    <StarRateRoundedIcon />
                    <StarRateRoundedIcon />
                    <StarBorderRoundedIcon />
                    <Typography variant="span" sx={{ ml: 1 }}>
                      (2 Reviews)
                    </Typography>
                  </Typography>
                  <Typography variant="h6" className="price">
                    Rs.{product?.salePrice} - Rs.{product?.marketPrice}
                  </Typography>
                  <Typography component="div" className="description">
                    {HTMLReactParser(product?.description)}
                  </Typography>
                  <Typography component="div" className="qty-btn">
                    <Typography variant="span" sx={{ mr: 2 }}>
                      Qty:
                    </Typography>
                    <Button className="minus" onClick={decrement} sx={{ mr: 3 }}>
                      <RemoveRoundedIcon />
                    </Button>
                    <span className="number">{count}</span>
                    <Button className="plus" onClick={increment} sx={{ ml: 3 }}>
                      <AddRoundedIcon />
                    </Button>
                  </Typography>
                  <Typography component="div" className="button-holder">
                    <Button variant="contained" className="buy-now" sx={{ mr: 2 }} component={Link}
                      to="/buy-now" state={{ data }}>
                      Buy now
                    </Button>
                    <Button variant="contained" className="add-to-cart" onClick={() => addToCart(id)}
                    >
                      Add to Cart
                    </Button>
                  </Typography>
                </Typography>
              </Grid>
              <Grid item lg={12} md={6} sm={6}>
                <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 5 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Description" {...a11yProps(0)} />
                    <Tab label="Additional Information" {...a11yProps(1)} />
                    <Tab label="Shipping & Returns" {...a11yProps(2)} />
                    <Tab label="Reviews(2)" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Typography component="div" className="tab-items">
                    <Typography variant="h2" className="tab-title" mb={1}>
                      Product Information
                    </Typography>
                    <Typography component="div" className="description">
                      {HTMLReactParser(product.description)}
                    </Typography>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography component="div" className="tab-items">
                    <Typography variant="h2" className="tab-title" mb={1}>
                      Information
                    </Typography>
                    <Typography className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda blanditiis, culpa dolor doloremque dolorum eius,
                      error exercitationem facere inventore iste, non officia
                      praesentium provident quasi qui quisquam recusandae
                      repellat suscipit. Consectetur perferendis praesentium
                      repellat! A ab, accusamus assumenda consequuntur
                      cupiditate eos facilis fuga maxime optio reprehenderit
                      tenetur voluptatem. Ad aliquam autem consequuntur cum,
                      delectus est explicabo in incidunt, libero minus nostrum
                      odio odit praesentium rem repellendus sint ullam ut
                      voluptate? Aliquam consequuntur debitis dolorem, earum
                      eveniet explicabo iure minus nesciunt placeat quam ratione
                      repudiandae, similique voluptatibus! Aliquid aspernatur
                      beatae cupiditate dolores ducimus eum, expedita facere in,
                      iusto laudantium modi nesciunt nihil praesentium quaerat
                      quasi quod rerum! Amet assumenda beatae debitis
                      dignissimos eos expedita facilis magni modi, nisi numquam
                      pariatur perferendis quae quibusdam quidem recusandae
                      reiciendis rerum sapiente sed sunt totam. Accusamus,
                      aperiam cumque ex minima natus nobis quidem quod
                      reiciendis! Aliquid doloribus nemo nihil nulla odio optio
                      qui quod reprehenderit soluta voluptas! Adipisci, animi
                      deserunt distinctio, dolorem eos maxime obcaecati officia
                      quisquam ratione totam ullam veritatis! Aliquid, atque
                      autem blanditiis omnis quae quibusdam repellat. A
                      accusamus, accusantium atque beatae corporis cumque
                      ducimus exercitationem explicabo fugit illo ipsam libero
                      magni modi necessitatibus nisi numquam optio perferendis
                      quibusdam quo ratione, temporibus totam.
                    </Typography>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography component="div" className="tab-items">
                    <Typography variant="h2" className="tab-title" mb={1}>
                      Delivery & returns
                    </Typography>
                    <Typography className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda blanditiis, culpa dolor doloremque dolorum eius,
                      error exercitationem facere inventore iste, non officia
                      praesentium provident quasi qui quisquam recusandae
                      repellat suscipit. Consectetur perferendis praesentium
                      repellat! A ab, accusamus assumenda consequuntur
                      cupiditate eos facilis fuga maxime optio reprehenderit
                      tenetur voluptatem. Ad aliquam autem consequuntur cum,
                      delectus est explicabo in incidunt, libero minus nostrum
                      odio odit praesentium rem repellendus sint ullam ut
                      voluptate? Aliquam consequuntur debitis dolorem, earum
                      eveniet explicabo iure minus nesciunt placeat quam ratione
                      repudiandae, similique voluptatibus! Aliquid aspernatur
                      beatae cupiditate dolores ducimus eum, expedita facere in,
                      iusto laudantium modi nesciunt nihil praesentium quaerat
                      quasi quod rerum! Amet assumenda beatae debitis
                      dignissimos eos expedita facilis magni modi, nisi numquam
                      pariatur perferendis quae quibusdam quidem recusandae
                      reiciendis rerum sapiente sed sunt totam. Accusamus,
                      aperiam cumque ex minima natus nobis quidem quod
                      reiciendis! Aliquid doloribus nemo nihil nulla odio optio
                      qui quod reprehenderit soluta voluptas! Adipisci, animi
                      deserunt distinctio, dolorem eos maxime obcaecati officia
                      quisquam ratione totam ullam veritatis! Aliquid, atque
                      autem blanditiis omnis quae quibusdam repellat. A
                      accusamus, accusantium atque beatae corporis cumque
                      ducimus exercitationem explicabo fugit illo ipsam libero
                      magni modi necessitatibus nisi numquam optio perferendis
                      quibusdam quo ratione, temporibus totam.
                    </Typography>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Typography component="div" className="tab-items">
                    <ReviewsRatings />
                  </Typography>
                </TabPanel>
              </Grid>
            </Grid>
          </Container>
        </section>
      ) : null}
    </>
  );
};

export default Detail;
