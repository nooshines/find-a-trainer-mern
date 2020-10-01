import React, { Fragment, useState, useContext } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const LeafletMap = () => {
  const { SearchResults } = useContext(TrainerContext);

  return (
    <Fragment>
      <h3>Mappp</h3>
      <div id="mapid"></div>
    </Fragment>
  );
};

export default LeafletMap;
