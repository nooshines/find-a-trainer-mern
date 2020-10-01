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

    // if(result){
    //   <Results />
    // }

    setFormData({
      location: "",
      distance: "",
    });
  };

  return (
    <Fragment>
      <div className="search">
        <h1>
          Find A <span className="search-titile">Personal Trainer</span> Near
          You
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-box">
            <input
              className="search-field location"
              type="text"
              name="location"
              placeholder="enter a location"
              value={location}
              onChange={onChange}
            />

            <input
              className="search-field distance"
              type="text"
              name="distance"
              placeholder="distance(meters)"
              value={distance}
              onChange={onChange}
            />
            <button type="submit" className="search-btn">
              <span className="search-btn-titile">Search</span>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
