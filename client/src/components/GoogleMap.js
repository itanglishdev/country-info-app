import React, { useContext } from "react";
import { Context } from "./Context";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import Back from "./Back";
import InfoBox from './InfoBox'

export default function GoogleMap() {
  const { selectedCountry } = useContext(Context);

  let lat = 60.116667;
  let lng = 19.9;

  if (selectedCountry) {
    lat = selectedCountry.latlng[0];
    lng = selectedCountry.latlng[1];
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
      <InfoBox/>
    </div>
  );
}
