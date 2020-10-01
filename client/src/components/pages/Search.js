import React, { Fragment, useState, useContext } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import Results from "../pages/Results";

const Search = () => {
  const { searchTrainer, setSearchResults } = useContext(TrainerContext);
  const [formData, setFormData] = useState({
    location: "",
    distance: "",
  });

  const { location, distance } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const result = await searchTrainer(location, distance);
    console.log("result", result);
    setSearchResults([result]);
    setFormData({
      location: "",
      distance: "",
    });
  };

  return (
    <Fragment>
      <div className="search">
        <h4>Are you looking for a personal trainer?</h4>
        <p>
          if you are looking for a personal trainer near you, just type in a
          location and find personal trainers around your location{" "}
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="location"
              placeholder="enter a location"
              value={location}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="distance"
              placeholder="distance"
              value={distance}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary my-1" />
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
