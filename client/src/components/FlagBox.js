import { Context } from "./Context";
import { useContext } from "react";


function FlagBox() {


  const { selectedCountry} = useContext(Context);


  return (  
    <div className="flag-box">
      <img src={selectedCountry.flag} alt=""  className="flag-box__flag"/>
      <p>{`The phone access code to the country is +${selectedCountry.callingCodes[0]}.`}</p>
      <p>{` The top level Website domain here is "${selectedCountry.topLevelDomain[0]}".`}</p>
    </div>
  );
}

export default FlagBox;