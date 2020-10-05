import React, { Fragment, useState, useContext, useEffect } from "react";
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
  const { searchResults, setSearchResults } = useContext(TrainerContext);

  useEffect(() => {
    setSearchResults(null);
  }, []);

  const renderGrid = () => {
    if (!searchResults) {
      return <Fragment></Fragment>;
    }
    // if  <Grid>{grid}</Grid> : <h4>No Result</h4>
    return searchResults.length > 0 ? (
      searchResults.map((result) => {
        return (
          <Grid>
            <Result key={result._id} result={result} />
          </Grid>
        );
      })
    ) : (
      <h4>No Rsult</h4>
    );
  };

  console.log("searchResults in results", searchResults);

  // const grid = searchResults
  //   ? searchResults.map((result) => {
  //       return <Result key={result._id} result={result} />;
  //     })
  //   : null;

  return <Fragment>{renderGrid()}</Fragment>;
};

export default Results;
