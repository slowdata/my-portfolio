import React from "react";

const AboutPage = ({ title, subTitle, text }) => (
  <>
    <h1>{title}</h1>
    <h3>{subTitle}</h3>
    <p>{text}</p>
  </>
);

export default AboutPage;
