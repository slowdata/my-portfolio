import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

import { Link } from "react-router-dom";

const AboutPage = ({ title }) => (
  <>
    <Hero title={title} />
    <Content>
      <div>
        Hi it's me!! My name is Ricardo and I am a developer from Lisbon
        Portugal that love's tecnology and build cool stuff.
      </div>
      <div className="mt-2">
        I'm being using different tecnologies for some years now. From .net
        framework with VB to C#, building apps with WebForms and MVC to REST
        API's and SOAP Services.
      </div>
      <div className="mt-2">
        More recently started adopting more modern technologies like frontend
        frameworks (REACT, Vue) and node as a runtime engine building websites,
        apps and services in a more faster and pleasent way.
      </div>
      <div className="mt-3">
        If I'm not building or trying to solve some problems I'm probably
        learning new things and gaining more experience! Feel free to{" "}
        <Link to="/contact">reach me.</Link>
      </div>
    </Content>
  </>
);

export default AboutPage;
