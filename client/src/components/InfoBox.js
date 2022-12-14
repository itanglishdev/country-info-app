import { Context } from "./Context";
import { useContext } from "react";


function InfoBox() {

  const {selectedCountry} = useContext(Context);

  // const countryInfo = data.data
  // console.log('HERE',data.data.data);
  console.log('countries',selectedCountry)
  
  // const countryDetails = countryInfo.map((el, id) => {
 const population = (selectedCountry.population/ 1000000).toFixed(2)
  // })
  return ( 
    <div className="info-box">
      <h3  className="info-box__main"><strong>{selectedCountry.name}</strong></h3>
      <p>{`The native name is ${selectedCountry.nativeName} and the local language is ${selectedCountry.languages[0].name}. The capital is ${selectedCountry.capital}. It is located in ${selectedCountry.region} in the sub-region of ${selectedCountry.subregion}. The population is of circa ${population} millions. The local currency is ${selectedCountry.currencies[0].name}/${selectedCountry.currencies[0].code} (${selectedCountry.currencies[0].symbol}).`}</p>
      <p >{` Time zone is ${selectedCountry.timezones[0]}. The phone access code to the country is +${selectedCountry.callingCodes[0]}. The top level Website domain here is "${selectedCountry.topLevelDomain[0]}".`}</p>
    </div>
   );
}

export default InfoBox;