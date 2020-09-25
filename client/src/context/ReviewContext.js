import React, { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext();

const ReviewContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {}, []);

  return (
    <ReviewContext.Provider value={{ reviews, setReviews }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContextProvider;
