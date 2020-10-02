import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TrainerContext = createContext();

const TrainerContextProvider = ({ children }) => {
  const [trainers, setTrainers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  console.log("searchResults in context", searchResults);

  useEffect(() => {
    getTrainers();
  }, []);

  //get All trainers
  const getTrainers = async () => {
    try {
      const res = await axios.get("/trainer/alltrainers");
      setTrainers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //get a list of trainers** post ** /trainer/findtrainers
  //Search for trainers that are near that lng and lat
  const searchTrainer = async (location, distance) => {
    try {
      const res = await axios.post("trainer/findtrainers", {
        location,
        distance,
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //get all the reviews ** trainer/allreviews/:profileId
  const getReviews = async (profileId) => {
    try {
      const res = await axios.get(`/trainer/allreviews${profileId}`);
      // setReviews(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //get trainer by id ** trainer/:id
  const getTrainerById = async (id) => {
    try {
      const res = await axios.get(`/trainer/trainer${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //get trainer profile ** /trainer/trainer/profile
  const getTrainerProfile = async () => {
    try {
      const res = await axios.get("/trainer/trainer/profile");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //create trainer
  const createTrainer = async (newFormData) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post("/trainer/newprofile", newFormData, config);
      console.log("res", res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //file upload
  const fileUpload = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post("/fileupload", formData, config);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //edit trainer
  const editTrainer = async (editFormData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(
        "/trainer/updateprofile",
        editFormData,
        config
      );
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  //delete trainer
  const deleteTrainer = async (id) => {
    try {
      const res = await axios.delete(`/trainer/deleteprofile/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TrainerContext.Provider
      value={{
        trainers,
        setTrainers,
        createTrainer,
        editTrainer,
        deleteTrainer,
        fileUpload,
        getReviews,
        getTrainerById,
        getTrainerProfile,
        searchTrainer,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </TrainerContext.Provider>
  );
};

export default TrainerContextProvider;
