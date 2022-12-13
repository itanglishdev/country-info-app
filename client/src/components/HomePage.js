import "../App";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./Context";

const HomePage = () => {
  const [countryName, setCountryName] = useState("");
  const [countryExists, setCountryExists] = useState(true);

  const { data, setSelectedCountry } = useContext(Context);

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
    <div className="input-container">
      {!countryExists && <h1>Country doesn's exist</h1>}
      <input
        className="input-field"
        onChange={changeHandlers}
        type="text"
        value={countryName}
        placeholder="Put country name"
      />
      <button onClick={showInfoHandler} className="btn">
        Show map
      </button>
    </div>
  );
};
export default HomePage;
