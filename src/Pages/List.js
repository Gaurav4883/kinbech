import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Image from "./../Assets/Images/tshirt.png";
import Image2 from "./../Assets/Images/basketbass.png";
import Image3 from "./../Assets/Images/14.jpg";
import Image4 from "./../Assets/Images/16.jpg";
import Image5 from "./../Assets/Images/18.jpg";
import Image6 from "./../Assets/Images/20.jpg";
import Image7 from "./../Assets/Images/19.jpg";
import Image8 from "./../Assets/Images/22.jpg";
import { CallApi, fileBaseUrl } from "../Components/Context/ApiContext";
import Pagination from "../Components/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 5, 0),
    "& .list": {
      "& .text-holder": {
        marginBottom: theme.spacing(5),
        "& .list-title": {
          fontSize: theme.typography.h1,
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.text.descriptionText,
        },
      },
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          "& .list-item": {
            "& a": {
              boxShadow: theme.shadows[0],
              padding: theme.spacing(2),
              display: "block",
              borderRadius: "15px",
              transition: theme.transitions.easing.easeOut,
              "& .img-holder": {
                height: "150px",
                width: "100%",
                borderRadius: "5px",
                marginBottom: theme.spacing(3),
              },
              "& .content-holder": {
                "& .title": {
                  color: theme.palette.text.gray,
                  fontSize: theme.typography.h4,
                  fontWeight: theme.typography.fontWeightSemiBold,
                  marginBottom: theme.spacing(3),
                },
                "& .price": {
                  color: theme.palette.secondary.main,
                  fontSize: theme.typography.h4,
                  fontWeight: theme.typography.fontWeightSemiBold,
                  marginBottom: theme.spacing(3),
                  "& del": {
                    display: "block",
                    color: theme.palette.text.descriptionText,
                    fontSize: theme.typography.h6,
                  },
                },
                "& .MuiButtonBase-root": {
                  display: "block",
                  margin: "0 auto",
                  color: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                },
              },
              "&:hover": {
                transform: "translateY(-10px)",
              },
            },
          },
        },
      },
    },
    "@media(max-width: 600px)": {
      "& .list": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            width: "50%",
          },
        },
      },
    },
    "@media(min-width: 768px)": {
      "& .list": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            width: "50%",
          },
        },
      },
    },
    "@media(min-width: 992px)": {
      "& .list": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            width: "100%",
          },
        },
      },
    },
  },
}));

const List = (data) => {
  const classes = useStyles();
  var location = useLocation();
  let {id} =  location?.state ?? 0;
  const [products, setProducts] = useState();
  useEffect(() => {
    if(typeof id !== undefined &&  id !== null && id !== 0){
      CallApi(`product/find-by-product-category/${id ? id : 0}`, []).then((response) => {
        data = response?.data;
        if (data?.success) {
          setProducts(data?.body);
        }
      });
    } else{
      setProducts(data?.products);
    }
  }, []);

  return (
    <section className={classes.root}>
      <Container className="list">
        <Typography component="div" className="text-holder">
          <Typography variant="h1" className="list-title">
            {products?.length} items found
          </Typography>
        </Typography>
        <Grid container spacing={3}>
          {products &&
            products.map((item, i) => {
              let id = item.id;
              return (
                <Grid item lg={3} md={6} sm={6} key={i + "__"}>
                  <Typography component="div" className="list-item">
                    <Link to="/detail" state={{ id }}>
                      <Typography
                        className="img-holder background-image"
                        style={{
                          backgroundImage: `url('${fileBaseUrl}/product/${item.fileName}')`,
                        }}
                      />
                      <Typography component="div" className="content-holder">
                        <Typography variant="h2" className="title">
                          {item.name}
                        </Typography>
                        <Typography variant="h6" className="price">
                          Rs.{item.salePrice}
                          <del>Rs.{item.marketPrice}</del>
                        </Typography>
                        <Button variant="outlined">Buy Now</Button>
                      </Typography>
                    </Link>
                  </Typography>
                </Grid>
              );
            })}
        </Grid>
        <Pagination/>
      </Container>
    </section>
  );
};

export default List;
