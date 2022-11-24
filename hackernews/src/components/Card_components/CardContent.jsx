import React from "react";
import styled from "styled-components/macro";

const CardContent = ({ title, datetime, author, karma }) => {
  return (
    <ContentArea>
      <CardTitle>
        <h2>{title}</h2>
      </CardTitle>
      <CardInfo>
        <AuthorChip>
          <AuthorAvatar>{author[0].toUpperCase()}</AuthorAvatar>
          <p>
            {author} - {karma} karma
          </p>
        </AuthorChip>
        <Datetime>{datetime}</Datetime>
      </CardInfo>
    </ContentArea>
  );
};

export default CardContent;

const ContentArea = styled.div`
  padding: 16px 16px 0 16px;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  line-height: 1.25;
  font-weight: 500;
  min-height: 75px;
  text-align: center;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.825rem;
  padding: 8px 0;
`;

const AuthorAvatar = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: white;
`;

const AuthorChip = styled.div`
  border-radius: 16px;
  font-size: 0.8125rem;
  padding: 4px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border: 1px solid black;
  width: 100%;
`;

const Datetime = styled.p`
  text-align: right;
`;
