import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  /* font-size: 30px; */
  img {
    height: 70px;
    width: 70px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0, 1);
    margin-bottom: --8px;
  }
`;

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`;
const ReviewHeader = ({ trainer }) => {
  return (
    <Wrapper>
      <h1>
        <img src={trainer.imageUrl} />
        {trainer.name}
      </h1>
      <h4>{trainer.certificate}</h4>
      <p>{trainer.bio}</p>
      <p>{trainer.address}</p>
      <div>
        <TotalReviews>total reviews goes here</TotalReviews>
        <div className="starRating">star rating goes here</div>
        <TotalOutOf>3 out of 5</TotalOutOf>
      </div>
    </Wrapper>
  );
};

export default ReviewHeader;
