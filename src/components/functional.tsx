import React, { FC } from "react";
import styled from "styled-components";

type FlexProps = {
  direction?: 'row' | 'column',
}

type CardProps = {
  title?: string; //optional
};

const Styles = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction};
`;

const Card: FC<CardProps> = ({ title = 'Hello World' }) => {
  return (
    <Styles direction="row">
      <h1>{title}</h1>
    </Styles>
  );
};

export default Card;