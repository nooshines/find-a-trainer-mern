import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid black;
  /* background: #efefef; */
  text-align: center;
`;

const Image = styled.div`
  width: 50px;
  margin-left: 40px;

  img {
    margin-top: 20px;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    border: 2px solid #efefef;
  }
  @media (max-width: 1000px) {
    margin-left: 45px;
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
  padding: 10px 0 5px 0;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;
  a {
    color: #fff;
    background: #333;
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
`;

const Result = ({ result }) => {
  return (
    <CardWrapper>
      <Image>
        <img src={result.imageUrl} alt={result.name} />
      </Image>
      <Name>
        <h4>{result.name}</h4>
      </Name>
      <Address>{result.address}</Address>
      <LinkWrapper>
        <Link to={`/profile/${result._id}`}>View Profile</Link>
      </LinkWrapper>
    </CardWrapper>
  );
};

export default Result;
