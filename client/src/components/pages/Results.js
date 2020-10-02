import React, { Fragment, useState, useContext } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import Result from "./Result";

const Results = () => {
  const { searchResults } = useContext(TrainerContext);

  console.log("searchResults in results", searchResults);
  return (
    <Fragment>
      {searchResults.length &&
        searchResults.map((result) => {
          console.log("result", result);
          return <Result result={result} key={result._id} />;
        })}
    </Fragment>
  );
};

export default Results;
