import "../components/Filter.css";
import { useContext } from "react";
import { Context } from "./Context";

const Filter = () => {
  const { state, dispatch } = useContext(Context);

  const handleHover = (e) => {
    dispatch({ type: "set country name", payload: e.target.innerText });
  };

  const handleLeave = () => {
    dispatch({ type: "erase country name" });
  };

  const handleClick = (e) => {
    dispatch({ type: "set country name", payload: e.target.innerText });
    dispatch({ type: "erase filtered country names" });
  };

  return (
    <div className="filter-container">
      <ul className="list">
        {state.filteredCountryNames.length < 250
          ? state.filteredCountryNames.map((el, i) => {
              return (
                <li
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={handleClick}
                  className="item"
                  key={i}
                >
                  {el}
                  <img src={el} alt="" />
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};
export default Filter;
