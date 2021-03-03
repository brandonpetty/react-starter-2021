import React, { FC } from "react";

type CardProps = {
  title?: string; //optional
};

const Card: FC<CardProps> = ({ title = 'Hello World' }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Card;