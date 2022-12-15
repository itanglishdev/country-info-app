import { Routes, Route, useLocation } from "react-router-dom";
import InputPage from "./InputPage";
import GoogleMap from "./GoogleMap";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<InputPage />} />
        <Route path="/map" element={<GoogleMap />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
