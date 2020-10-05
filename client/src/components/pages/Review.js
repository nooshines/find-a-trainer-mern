import React, { Fragment } from "react";
import styled from "styled-components";
import Rating from "./Rating";

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const RatingScore = styled.div``;

const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: "Poppins-Bold";
  font-size: 22px;
`;

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`;

const Review = ({ trainerReview }) => {
  return (
    <Card>
      <RatingContainer>
        <Rating score={trainerReview.score} />
      </RatingContainer>
      <Title>{trainerReview.title}</Title>
      <Description>{trainerReview.description}</Description>
    </Card>
  );
};

export default Review;
