import React, { useContext } from "react";
import { Context } from "./Context";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import Back from "./Back";
import InfoBox from './InfoBox'
import FlagBox from './FlagBox'

export default function GoogleMap() {
  const { state } = useContext(Context);

  let lat = 60.116667;
  let lng = 19.9;

  if (state.selectedCountry) {
    lat = state.selectedCountry.latlng[0];
    lng = state.selectedCountry.latlng[1];
  }

  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 5,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="g-map">
      <Back />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={lat}
          lng={lng}
          text={<i class="fa-solid fa-location-crosshairs"></i>}
        />
      </GoogleMapReact>
      <FlagBox/>
      <InfoBox/>
    </div>
  );
}
