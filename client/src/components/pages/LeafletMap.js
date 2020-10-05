import React, { Fragment, useState, useContext, useEffect } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const LeafletMap = () => {
  const { searchResults } = useContext(TrainerContext);

  let locations = [];
  locations = searchResults
    ? searchResults.map((sr) => {
        return {
          lat: sr.location.coordinates[1],
          lng: sr.location.coordinates[0],
        };
      })
    : [];

  const [state, setState] = useState({
    lat: -33.87271,
    lng: 151.207609,
    zoom: 10,
  });

  const customMarker = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  const position = [state.lat, state.lng];

  return (
    <Fragment>
      <Map
        center={position}
        zoom={state.zoom}
        id="mapid"
        style={{ zIndex: -1 }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => {
          return (
            <Marker position={location} icon={customMarker} key={index}>
              {/* <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup> */}
            </Marker>
          );
        })}
      </Map>
    </Fragment>
  );
};

export default LeafletMap;
