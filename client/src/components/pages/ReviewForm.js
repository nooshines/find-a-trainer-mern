import React, { Fragment, useState, useContext } from "react";
import { ReviewContext } from "../../context/review/ReviewContext";
import styled from "styled-components";
import StarRating from "./StarRating";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 20px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  margin: 20px 0;
  padding: 20px;
  background: #fff;
`;

const Field = styled.div`
  border-radius: 4px;
  input {
    width: 100%;
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`;
const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;
  padding: 12px 12px;
  margin-top: 10px;
  border: 1px solid #71b406;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`;
const ReviewWrapper = styled.div`
  background: white;
  padding: 20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom: 80px;
  /* border-left: 1px solid rgba(0, 0, 0, 0.1); */
  height: 100vh;
  /* padding-top: 100px; */
  padding-right: 80px;
`;

const ReviewHeadline = styled.div`
  font-size: 20px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`;

const ReviewForm = ({ profileId, name, setTrainerReviews, trainerReviews }) => {
  const { createReview } = useContext(ReviewContext);

  const [review, setReview] = useState({
    title: "",
    description: "",
    score: null,
    profileId,
  });

  const { title, description, score } = review;

  const onChangeHandler = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newReview = await createReview(review);
    setTrainerReviews([...trainerReviews, newReview]);
    console.log("newReview", newReview);
    setReview({
      title: "",
      description: "",
      score: null,
      profileId,
    });
  };

  return (
    <ReviewWrapper>
      <form onSubmit={onSubmitHandler}>
        <ReviewHeadline>
          Have an experience with {name} ? Share your review !
        </ReviewHeadline>
        <Field>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Review Title"
            onChange={onChangeHandler}
            required={true}
          />
        </Field>
        <Field>
          <input
            type="text"
            name="description"
            value={description}
            placeholder="Review Description"
            onChange={onChangeHandler}
            required={true}
          />
        </Field>
        <Field>
          <RatingContainer>
            <StarRating
              setScoreValue={onChangeHandler}
              scoreValue={review.score}
            />
          </RatingContainer>
        </Field>
        <SubmitBtn>Submit Your Review</SubmitBtn>
      </form>
    </ReviewWrapper>
  );
};

export default ReviewForm;
