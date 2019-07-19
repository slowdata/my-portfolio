import React from "react";

import Navbar from "react-bootstrap/Navbar";

const Footer = ({ isHome }) => {
  const place = isHome ? { sticky: "bottom" } : { fixed: "bottom" };
  return (
    <Navbar {...place} className="bg-transparent border-top bg-light">
      <div className="container-fluid text-right">
        <div className="col-12">Feito por Ricardo Dias</div>
      </div>
    </Navbar>
  );
};

export default Footer;
