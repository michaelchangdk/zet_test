import React from "react";
import styled from "styled-components/macro";

const CardAction = ({ url }) => {
  return (
    <CardActionArea>
      <CardButton onClick={() => window.open(url)} target="_blank">
        READ MORE
      </CardButton>
    </CardActionArea>
  );
};

export default CardAction;

const CardActionArea = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 16px;
  justify-content: center;
`;

const CardButton = styled.button`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: #ebe8e8;

  &&:hover {
    cursor: pointer;
  }
`;
