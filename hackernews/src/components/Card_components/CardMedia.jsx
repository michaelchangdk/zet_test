import React from "react";
import styled from "styled-components/macro";

const CardMedia = ({ title, score }) => {
  return (
    <CardImage
      src={`https://source.unsplash.com/random/${title.split(" ")[0]}`}
    >
      <CardScore>{score}</CardScore>
    </CardImage>
  );
};

export default CardMedia;

const CardImage = styled.div`
  height: 400px;
  padding: 16px;
  border-radius: 16px 16px 0 0;
  background-image: url(${(props) => props.src});
  background-color: black;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const CardScore = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.7);
`;
