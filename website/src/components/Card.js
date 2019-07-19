import React from "react";

import CardInfo from "../components/CardInfo";

const Card = ({ item, hover }) => (
  <div className="d-inline-block d-card" onMouseEnter={() => hover(item.id)}>
    <img className="d-card-image" src={item.imgSrc} alt="" />
    {item.selected && (
      <CardInfo title={item.title} subTitle={item.subTitle} link={item.link} />
    )}
  </div>
);

export default Card;
