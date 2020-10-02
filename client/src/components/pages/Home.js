import React, { Fragment, useState, useContext } from "react";
import Search from "../pages/Search";
import LeafletMap from "./LeafletMap";
import Results from "../pages/Results";
import { TrainerContext } from "../../context/trainer/TrainerContext";

const Home = () => {
  const { searchResults } = useContext(TrainerContext);

  return (
    <Fragment>
      <Search />
      <LeafletMap />
      {searchResults.length ? <Results /> : <div></div>}
    </Fragment>
  );
};

export default Home;
