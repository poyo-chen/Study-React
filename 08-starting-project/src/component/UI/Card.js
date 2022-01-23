import React from "react";

import classes from './Card.module.css';

const Card = (props) => {
                                          //要跟AddUser的自訂參數相同
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
