import React, { useEffect, useState } from "react";
import HomeSlider from "../../Components/Home-slider";
import Featured from "../../Components/Featured";
import Exploring from "../../Components/Exploring";
import ProductList from "../../Components/Product-list";
import Category from "../../Components/Category";
import ServiceBlock from "../../Components/Services-block";
import { ToastContainer, toast } from "react-toastify";

const Home = (data) => {

  return data?.home && data?.home ? (
    <main>
      <ToastContainer />
      <HomeSlider
        sliders={data?.home?.sliders} sliderCategories={data?.home?.sliderCategories} />
      <Featured featuredCategories={data?.home?.featuredCategories} />
      <Exploring tags={data?.home?.tags} />
      <Category subCategories={data?.home?.subCategories} />
      <ProductList forYouProducts={data?.home?.forYouProducts} />
      <ServiceBlock />
    </main>
  ) : null;
};

export default Home;
