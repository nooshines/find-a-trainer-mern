import React, { Fragment } from "react";

const Result = ({ result }) => {
  return (
    <Fragment>
      <div>{result.name}</div>
      <div>{result.certificate}</div>
      <div>{result.address}</div>
      <div>{result.bio}</div>
      {/* <img src={result.imgUrl}></img> */}
    </Fragment>
  );
};

export default Result;
