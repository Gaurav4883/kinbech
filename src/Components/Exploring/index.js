import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FemaleRoundedIcon from "@mui/icons-material/FemaleRounded";
import MaleRoundedIcon from "@mui/icons-material/MaleRounded";
import LaptopIcon from "@mui/icons-material/Laptop";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import FaceRetouchingNaturalRoundedIcon from "@mui/icons-material/FaceRetouchingNaturalRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "./../../Assets/Images/tshirt.png";
import Image2 from "./../../Assets/Images/basketbass.png";
import { Link } from "react-router-dom";
import { CallApi } from "../Context/ApiContext";
import { fileBaseUrl } from "../Context/ApiContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .exploring": {
      background: "#fff",
      padding: "20px",
      borderRadius: "25px",
    },
    "& .text-holder": {
      marginBottom: theme.spacing(10),
      "& .title": {
        color: theme.palette.text.gray,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    "& .tab-holder": {
      "& .MuiTabs-root": {
        overflow: "visible",
        "& .MuiTabs-scroller": {
          background: "#fff",
          boxShadow: theme.shadows[0],
          flex: "unset",
          width: "unset",
          margin: "0 auto",
          borderRadius: "60px",
          minHeight: "unset",
          padding: theme.spacing(1),
          "& .MuiTabs-flexContainer": {
            justifyContent: "center",
            "& .MuiButtonBase-root": {
              borderRadius: "30px",
              color: theme.palette.text.descriptionText,
              textTransform: "capitalize",
              fontSize: theme.typography.h4,
              fontWeight: theme.typography.fontWeightMedium,
              padding: "12px 25px",
              maxHeight: "unset",
              minHeight: "unset",
            },
            "& .Mui-selected": {
              background: theme.palette.primary.main,
              color: "#fff",
            },
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        },
      },
      "& .tab-content": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            width: "50%",
            "& .category-list": {
              background: "#fff",
              padding: theme.spacing(4),
              borderRadius: theme.shape.borderRadius5,
              position: "relative",
              boxShadow: theme.shadows[0],
              display: "block",
              "& .category-content": {
                position: "relative",
                "& .category-image": {
                  marginBottom: "10px",
                  "& img": {
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  },
                },
                "& .category-quantity": {
                  fontSize: theme.typography.h4,
                  color: theme.palette.text.descriptionText,
                },
              },
              "& .sub-title": {
                fontSize: theme.typography.h5,
                color: theme.palette.text.descriptionText,
                position: "relative",
              },
              "& .title": {
                fontWeight: theme.typography.fontWeightSemiBold,
                color: theme.palette.text.gray,
                position: "relative",
              },
              "& a": {
                position: "relative",
                display: "flex",
                alignItems: "center",
                color: theme.palette.text.gray,
                transition: theme.transitions.easing.easeOut,
                "& .MuiSvgIcon-root": {
                  fontSize: theme.typography.h3,
                },
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              },
            },
          },
        },
      },
    },
    "@media(max-width: 600px)": {
      padding: theme.spacing(5, 0),
      "& .text-holder": {
        "& .title": {
          fontSize: theme.typography.h1,
        },
      },
      "& .tab-holder": {
        "& .MuiTabs-root": {
          "& .MuiTabs-scroller": {
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
              "& .MuiButtonBase-root": {
                width: "50%",
              },
            },
          },
        },
        "& .tab-content": {
          "& .MuiGrid-root": {
            "& .MuiGrid-item": {
              "& .category-list": {
                "& .title": {
                  fontSize: theme.typography.h3,
                },
              },
            },
          },
        },
      },
    },
    "@media(min-width: 768px)": {
      padding: theme.spacing(10, 0),
      "& .text-holder": {
        "& .title": {
          fontSize: theme.typography.h1,
        },
      },
      "& .tab-content": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            "& .category-list": {
              "& .title": {
                fontSize: theme.typography.h3,
              },
            },
          },
        },
      },
    },
    "@media(min-width: 992px)": {
      padding: theme.spacing(5, 0, 0),
      "& .text-holder": {
        "& .title": {
          fontSize: theme.typography.customFont2,
        },
      },
      "& .tab-content": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            "& .category-list": {
              height: "360px",
              "& .title": {
                fontSize: theme.typography.h1,
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
        <Typography component="div" className="tab-content">
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

const iconsMap = new Map([
  ["Women", <FemaleRoundedIcon />],
  ["Men", <MaleRoundedIcon />],
  ["Electronics", <LaptopIcon />],
  ["Arts", <ColorLensIcon />],
  ["Sports", <SportsSoccerRoundedIcon />],
]);

const Exploring = (data) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className="exploring">
        <Typography component="div" className="text-holder" align="left">
          <Typography variant="h1" className="title">
            Start exploring
          </Typography>
        </Typography>
        <Typography component="div" className="tab-holder">
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ mb: 6 }} >
            {data?.tags && data?.tags?.map((item, i) => {
                const iconsValue = iconsMap.get(item?.tag);
                return (
                  <Tab label={item.tag} icon={iconsValue} iconPosition="start" {...a11yProps(i)} key={i + "__"}/>
                );
              })}
          </Tabs>
          {data?.tags && data?.tags?.map((item, i) => {
              return (
                <TabPanel value={value} index={i} key={i + "__"}>
                <Grid container spacing={3} key={i + "__"}>
                  {item && item?.categories?.map((tagItem, i) => {
                    let id = tagItem?.id;
                      return (
                        <Grid item lg={4} md={6} sm={6} key={i + "__"}>
                            <Typography component="div" className="category-list" key= {i + "__"}>
                              <Typography component="div" className="category-content" mb={2} >
                                <Typography component="div" className="category-image" >
                                  <img src={ fileBaseUrl + "/category_thumbnail/" + tagItem.thumbnailImage }
                                    alt={tagItem.name}
                                  />
                                </Typography>
                                <Typography variant="h6" className="category-quantity" >
                                  100 Products
                                </Typography>
                              </Typography>
                              <Typography variant="h4" className="sub-title" mb={1}  >
                                {tagItem.description}
                              </Typography>
                              <Typography variant="h1" className="title" mb={2} >
                                {tagItem.name}
                              </Typography>
                              <Link to="/list" state={{id}}>
                                See Collection
                                <ArrowForwardRoundedIcon />
                              </Link>
                            </Typography>
                          </Grid>
                      );
                    })}
                </Grid>
              </TabPanel>
              );
            })}
        </Typography>
      </Container>
    </section>
  );
};

export default Exploring;
