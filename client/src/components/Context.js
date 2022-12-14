import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/country-info")
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={{ data, selectedCountry, setSelectedCountry }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
