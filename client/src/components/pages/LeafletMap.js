import React, { Fragment, useState, useContext, useEffect } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import userLocationURL from "./user_location.svg";

const LeafletMap = () => {
  const { SearchResults } = useContext(TrainerContext);
  const [state, setState] = useState({
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  });

  // const myIcon = L.icon({
  //   iconUrl: userLocationURL,
  //   iconSize: [50, 82],
  // });

  const position = [state.lat, state.lng];

  return (
    <Fragment>
      <Map center={position} zoom={state.zoom} id="mapid">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </Fragment>
  );
};

export default LeafletMap;
