import React from "react";

import Carousel from "../components/Carousel";

import Hero from "../components/Hero";

const HomePage = ({ ...props }) => (
  <>
    <Hero {...props} />
    <Carousel />
  </>
);

export default HomePage;
