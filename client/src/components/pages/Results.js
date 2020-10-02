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
`;

const Results = () => {
  const { searchResults } = useContext(TrainerContext);

  console.log("searchResults in results", searchResults);

  const grid = searchResults.map((result) => {
    return <Result key={result._id} result={result} />;
  });
  return (
    <Fragment>
      <Grid>{grid}</Grid>
    </Fragment>
  );
};

export default Results;
