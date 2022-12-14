import { createContext, useReducer } from "react";

export const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "get all data":
      return { ...state, data: action.payload };
    case "select country object":
      return { ...state, selectedCountry: action.payload };
    case "set country name":
      return { ...state, countryName: action.payload };
    case "erase country name":
      return { ...state, countryName: "" };
    case "get filtered country names":
      return { ...state, filteredCountryNames: action.payload };
    case "erase filtered country names":
      return { ...state, filteredCountryNames: [] };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const initialState = {
    data: {},
    selectedCountry: {},
    countryName: "",
    filteredCountryNames: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
