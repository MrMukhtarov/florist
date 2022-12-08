import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const ArrivalContexts = createContext();

export const ArrivalContext = ({ children }) => {
  const [arrival, setArrival] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/arrivals")
      .then((res) => setArrival(res.data.arrival))
      .catch((err) => console.log(err));
  }, []);

  const values = {
    arrival,
    setArrival,
  };

  return (
    <ArrivalContexts.Provider value={values}>
      {children}
    </ArrivalContexts.Provider>
  );
};

export const useArrival = () => {
  const context = useContext(ArrivalContexts);

  if (context === undefined) {
    throw new Error("useArrival must be used within a ArrivalProvider");
  }

  return context;
};
