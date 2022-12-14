import "../App";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./Context";
import Footer from './Footer'

const HomePage = () => {
  const [countryName, setCountryName] = useState("");
  const [countryExists, setCountryExists] = useState(true);

  const { data, selectedCountry,setSelectedCountry } = useContext(Context);

  let countryDataArr;

  if (Object.keys(data).length > 0) {
    countryDataArr = data.data.data.countryData;
  }

  const changeHandlers = (e) => {
    setCountryName(e.target.value);
  };

  const showInfoHandler = () => {
    countryDataArr.forEach((el) => {
      if (el.name.toLowerCase() === countryName.toLowerCase()) {
        setSelectedCountry({ ...el });
        nav("/map");
        setCountryName("");
        setCountryExists(true);
      } else {
        setCountryName("");
        setCountryExists(false);
      }
    });
  };

  const nav = useNavigate();

  return (
    <div className="main-page">
      <div className="main-page__top">
      <h1>Welcome to Bomb the Country Info app</h1>
      <p>This interactive info about Countries app is designed to give you information on Countries. You just simply add the country's name and you will get general information about it, pin pointed on the World's map.</p>
      <p>Type in the box below and give it a try!</p>
      </div>
      <div className="input-container">
      {!countryExists && <h1 className="doesnt-exist">Not enough Info</h1>}
      <input
        className="input-field"
        onChange={changeHandlers}
        type="text"
        value={countryName}
        placeholder="Put country name"
      />
      <button onClick={showInfoHandler} className="btn btn__show">
        Show on map
      </button>
    </div>
    <Footer/>
    </div>
  );
};
export default HomePage;
