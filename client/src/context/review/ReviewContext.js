import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ReviewContext = createContext();

const ReviewContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  //get All reviews
  const getReviews = async () => {
    try {
      const res = await axios.get("/review/allreviews");
      setReviews(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //create review
  const createReview = async (newFormData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/review/new", newFormData, config);
      console.log("res", res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //delete Review
  const deleteReview = async (id) => {
    try {
      const res = await axios.delete(`/review/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ReviewContext.Provider
      value={{ reviews, setReviews, getReviews, createReview, deleteReview }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContextProvider;
