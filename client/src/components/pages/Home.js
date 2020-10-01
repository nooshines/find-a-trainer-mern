import React, { Fragment, useState, useContext } from "react";
import Search from "../pages/Search";
import Map from "../pages/Map";
import Results from "../pages/Results";
import { TrainerContext } from "../../context/trainer/TrainerContext";

const Home = () => {
  const { SearchResults } = useContext(TrainerContext);

  console.log("SearchResults in home", SearchResults);
  return (
    <Fragment>
      <Search />
      <Map />
      {SearchResults ? <Results /> : <div>No Result</div>}
    </Fragment>
  );
};

export default Home;
