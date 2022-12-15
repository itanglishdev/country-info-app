import React, { useContext } from "react";
import { Context } from "./Context";
import { motion } from "framer-motion";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import Back from "./Back";
import FlagBox from "./FlagBox";
import InfoBox from "./InfoBox";

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
    zoom: 7,
  };

  return (
    // Important! Always set the container height explicitly
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="g-map"
      style={{ height: "100vh", width: "100%" }}
    >
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
      <FlagBox />
      <InfoBox />
    </motion.div>
  );
}
