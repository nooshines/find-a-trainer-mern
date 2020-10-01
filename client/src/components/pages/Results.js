import React, { Fragment, useState, useContext } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import Result from "./Result";

const Results = () => {
  const { SearchResults } = useContext(TrainerContext);

  console.log("searchResults in results", SearchResults);
  return (
    <Fragment>
      {SearchResults &&
        SearchResults.map((result) => {
          return <Result result={result} key={result.id} />;
        })}
    </Fragment>
  );
};

export default Results;
