import axios from "axios";
import { useContext, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

const CategoryConext = createContext();

export const CategoryContext = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/category")
      .then((res) => setCategory(res.data.category))
      .catch((err) => console.log(err));
  }, []);

  const values = {
    category,
    setCategory,
  };

  return (
    <CategoryConext.Provider value={values}>{children}</CategoryConext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryConext);

  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }

  return context;
};
