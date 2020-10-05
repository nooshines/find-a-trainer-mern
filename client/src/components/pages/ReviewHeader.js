import React, { useState } from "react";
import Rating from "./Rating";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 20px;
  img {
    margin-right: 10px;
    height: 80px;
    width: 80px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0, 1);
    margin-bottom: --8px;
  }
`;

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`;
const ReviewHeader = ({ trainer, trainerReviews }) => {
  const scores = trainerReviews.map((review) => {
    return review.score;
  });
  const totalScore = scores.reduce((acc, score) => {
    return score + acc;
  }, 0);
  const avg = parseInt(totalScore / scores.length);

  return (
    <Wrapper>
      <img src={"/" + trainer.imageUrl} />
      <h1>{trainer.name}</h1>
      <h4>Certificate : </h4>
      <p>{trainer.certificate}</p>
      <h4>Bio :</h4>
      <p>{trainer.bio}</p>
      <h4>Address : </h4>
      <p>{trainer.address}</p>
      <div>
        <h3>total reviews : {trainerReviews.length}</h3>
        <TotalOutOf>
          <Rating score={avg} />
          {avg ? avg + " out of 5" : "there are no reviews"}
        </TotalOutOf>
      </div>
    </Wrapper>
  );
};

export default ReviewHeader;
