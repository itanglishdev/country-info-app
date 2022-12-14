import { Context } from "./Context";
import { useContext } from "react";


function FlagBox() {


  const { selectedCountry} = useContext(Context);


  return (  
    <div className="flag-box">
      <img src={selectedCountry.flag} alt=""  className="flag-box__flag"/>
      
    </div>
  );
}

export default FlagBox;