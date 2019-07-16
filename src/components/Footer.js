import React from "react";

import Navbar from "react-bootstrap/Navbar";

const Footer = ({ isHome }) => {
  const place = isHome ? { sticky: "bottom" } : { fixed: "bottom" };
  return (
    <Navbar {...place} className="border-top bg-light">
      Ricardo Dias
    </Navbar>
  );
};

export default Footer;
