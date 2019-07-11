import React from "react";

const HomePage = ({ title, subTitle, text }) => (
  <>
    <h1>{title}</h1>
    <h3>{subTitle}</h3>
    <p>{text}</p>
  </>
);

export default HomePage;
