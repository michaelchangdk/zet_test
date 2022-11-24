import React from "react";
import styled from "styled-components/macro";
import { format } from "date-fns";

// Component imports
import CardMedia from "./Card_components/CardMedia";
import CardContent from "./Card_components/CardContent";
import CardAction from "./Card_components/CardAction";

const Card = ({ title, score, datetime, author, karma, url }) => {
  return (
    <CardWrapper>
      <CardMedia title={title} score={score} />
      <CardContent
        title={title}
        datetime={format(new Date(datetime * 1000), "MMM. do, yyyy HH:mm")}
        author={author}
        karma={karma}
      />
      <CardAction url={url} />
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  border-radius: 16px;
  background-color: #f5f5f5;
`;
