import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
  }
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

const StarRating = ({ scoreValue, setScoreValue }) => {
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
                name="score"
                value={ratingValue}
                onClick={setScoreValue}
                required={true}
              />
            </InputWrapper>
            <Star>
              <FaStar
                size={40}
                color={
                  ratingValue <= (hover || scoreValue) ? "#ffc107" : "#e4e5e9"
                }
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
