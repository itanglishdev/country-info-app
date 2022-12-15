import "./style/InputPage.css";
import "./style/HomePage.css";
import axios from "axios";
import { motion } from "framer-motion";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "./Context";
import Footer from "./Footer";

const HomePage = () => {
  const [countryExists, setCountryExists] = useState(true);

  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:2500/api/v1/country-info`)
      .then((data) => {
        dispatch({ type: "get all data", payload: data });
      })
      .catch((err) => console.log(err));
  }, []);

  let countryDataArr;
  if (Object.keys(state.data).length > 0) {
    countryDataArr = state.data.data.data.countryData;
  }
  const countryNamesArr = countryDataArr?.map((el) => el.name);

  const changeHandlers = (e) => {
    dispatch({ type: "set country name", payload: e.target.value });

    const filteredArr = countryNamesArr.filter((el) => {
      return (
        e.target.value.toLowerCase() ===
        el.toLowerCase().slice(0, e.target.value.length)
      );
    });

    dispatch({ type: "get filtered country names", payload: filteredArr });
  };

  const showInfoHandler = () => {
    countryDataArr.forEach((el) => {
      if (el.name.toLowerCase() === state.countryName.toLowerCase()) {
        dispatch({ type: "select country object", payload: el });
        nav("/map");
        setCountryExists(true);
        dispatch({ type: "erase country name" });
      } else {
        setCountryExists(false);
        dispatch({ type: "erase country name" });
      }
    });
  };

  const handleFocus = () => {
    setCountryExists(true);
  };

  const nav = useNavigate();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="home-page"
    >
      <div className="main-page__top">
        <h1 className="heading">Welcome to the Country Info app</h1>
        <p className="about-text">
          This interactive info about countries is designed to give you
          information on Countries. You just simply add the country's name and
          you will get general information about it, pin pointed on the World's
          map.
        </p>
        <p className="request">Type in the box below and give it a try!</p>
      </div>
      <Filter />
      {
        //     <Back />
      }
      {!countryExists && (
        <h1 className="err-msg">Country name doesn't exist</h1>
      )}
      <div className="input-box">
        <input
          className="input-field"
          onChange={changeHandlers}
          onFocus={handleFocus}
          type="text"
          value={state.countryName}
          placeholder="Put country name"
        />
        {state.filteredCountryNames.length === 0 ? (
          <button onClick={showInfoHandler} className="btn">
            Show map
          </button>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </motion.div>
  );
};
export default HomePage;
