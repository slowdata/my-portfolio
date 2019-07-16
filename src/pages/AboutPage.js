import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

const AboutPage = ({ title, subTitle, text }) => (
  <>
    <Hero title={title} />
    <Content>
      This me!! My name is Ricardo and I am a developer that love tecnology and
      building cool stuff.
    </Content>
  </>
);

export default AboutPage;
