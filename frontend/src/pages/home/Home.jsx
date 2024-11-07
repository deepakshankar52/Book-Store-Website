import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommended from "./Recommended";
import NewsSection from "./NewsSection";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommended />
      <NewsSection />
    </>
  );
};

export default Home;
