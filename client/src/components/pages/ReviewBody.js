import React, { Fragment } from "react";
import Review from "./Review";

const ReviewBody = ({ trainerReviews }) => {
  return (
    <Fragment>
      {trainerReviews !== undefined &&
        trainerReviews.map((trainerReview) => {
          return (
            <Review key={trainerReview._id} trainerReview={trainerReview} />
          );
        })}
    </Fragment>
  );
};

export default ReviewBody;
