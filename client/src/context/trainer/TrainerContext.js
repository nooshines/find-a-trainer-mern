import React, { createContext, useState, useEffect } from "react";

export const TrainerContext = createContext();

const TrainerContextProvider = ({ children }) => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {}, []);

  return (
    <TrainerContext.Provider value={{ trainers, setTrainers }}>
      {children}
    </TrainerContext.Provider>
  );
};

export default TrainerContextProvider;
