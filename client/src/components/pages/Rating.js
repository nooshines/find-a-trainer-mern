import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Star = styled.div`
  transition: color 200ms;
`;

const InputWrapper = styled.div`
  input[type="radio"] {
    display: none;
  }
`;

const Rating = ({ score }) => {
  return (
    <MainWrapper>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <Star>
              <FaStar
                size={30}
                color={ratingValue <= score ? "#ffc107" : "#e4e5e9"}
              />
            </Star>
          </label>
        );
      })}
    </MainWrapper>
  );
};

export default Rating;
