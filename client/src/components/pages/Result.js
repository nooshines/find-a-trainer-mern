import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "./Rating";

const CardWrapper = styled.div`
  border: 1px solid #ccc;

  text-align: center;
  :hover {
    background: #efecec;
    cursor: pointer;
  }
`;

const Image = styled.div`
  width: 50px;
  margin-left: 55px;

  img {
    margin-top: 20px;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    border: 2px solid #efefef;
  }
  @media (max-width: 1000px) {
    margin-left: 50px;
    img {
      margin-top: 10px;
      height: 90px;
      width: 90px;
    }
  }
  @media (max-width: 600px) {
    margin-left: 30px;
  }
`;

const Name = styled.div`
  padding: 10px 0 5px 0;
`;
const Address = styled.div`
  padding: 10px 0 5px 0;
  font-size: 14px;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;
  a {
    color: #777;
    /* background: #888; */
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    a {
      width: 30%;
      font-size: 12px;
    }
  }
  @media (max-width: 600px) {
    a {
      width: 20%;
      font-size: 8px;
    }
  }
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
