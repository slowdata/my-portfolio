import React from "react";

import { useSpring, animated } from "react-spring";

const CarInfo = ({ title, subTitle, link }) => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="d-card-title">{title}</p>
      <p className="d-card-subtitle">{subTitle}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </animated.div>
  );
};

export default CarInfo;
