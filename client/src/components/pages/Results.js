import React, { Fragment, useState, useContext } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import Result from "./Result";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Results = () => {
  const { searchResults } = useContext(TrainerContext);

  console.log("searchResults in results", searchResults);

  const grid = searchResults.map((result) => {
    return <Result key={result._id} result={result} />;
  });
  return <Fragment>{grid ? <Grid>{grid}</Grid> : <h4>No Result</h4>}</Fragment>;
};

export default Results;
