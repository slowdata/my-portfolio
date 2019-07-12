import React from "react";

import Hero from "../components/Hero";

const HomePage = ({ ...props }) => (
  <>
    <Hero {...props} />
  </>
);

export default HomePage;
