import { Context } from "./Context";
import { useContext } from "react";


function InfoBox() {

  const { data, selectedCountry} = useContext(Context);

  const countryInfo = data.data
  console.log(countryInfo);
  // const selectedCountryInfo = selectedCountry.map(( el, idx) => {
  //   return <ul key={idx}>{el[idx]}</ul>
  // })
  return ( 
    <div className="info-box">
      {/* <ul>
        <li>{selectedCountry.name}</li>
      </ul> */}
      
      {/* <p>{selectedCountry.name}</p> */}
      {/* <p>{`The local language is ${selectedCountry.languages.name} and the capital is ${selectedCountry.capita}. It is located in ${selectedCountry.region} in the sub-region of ${selectedCountry.subregion}. `} </p> */}
      HERE
      
    </div>
   );
}

export default InfoBox;