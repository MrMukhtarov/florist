import axios from "axios";
import { useContext, useEffect, useState, createContext } from "react";

const SliderContext = createContext();

export const SliderContextProvider = ({ children }) => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/slider")
      .then((res) => setSlider(res.data.slider))
      .catch((err) => console.log(err));
  }, []);

  const values = {
    slider,
    setSlider,
  };
  return (
    <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);

  if (context === undefined) {
    throw new Error("useSlider must be used within a SliderProvider");
  }

  return context;
};
