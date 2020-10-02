import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Star = styled.div`
  cursor: pointer;
  transition: color 200ms;
`;

const InputWrapper = styled.div`
  input[type="radio"] {
    display: none;
  }
`;

const StarRating = ({ setScoreValue }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <MainWrapper>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <InputWrapper>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
            </InputWrapper>
            <Star>
              <FaStar
                size={50}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </Star>
          </label>
        );
      })}
    </MainWrapper>
  );
};

export default StarRating;
