import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "./Rating";

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  color: black;
  text-align: center;
  :hover {
    background: #f8f8f8;
    cursor: pointer;
  }
`;

const Image = styled.div`
  padding: 10px 0 5px 0;
  img {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    border: 2px solid #efefef;
  }
  @media (max-width: 1000px) {
    img {
      margin-top: 10px;
      height: 90px;
      width: 90px;
    }
  }
`;

const Name = styled.div`
  padding: 10px 0 5px 0;
`;
const Address = styled.div`
  margin-bottom: 15px;
  padding: 10px 0 5px 0;
  font-size: 14px;
`;

const Result = ({ result }) => {
  return (
    <Link to={`/profile/${result._id}`}>
      <CardWrapper>
        <Image>
          <img src={result.imageUrl} alt={result.name} />
        </Image>
        <Name>
          <h4>{result.name}</h4>
        </Name>
        <h4>
          {result.avgRating ? <Rating score={result.avgRating} /> : "No Rating"}
        </h4>
        <Address>{result.address}</Address>
      </CardWrapper>
    </Link>
  );
};

export default Result;
