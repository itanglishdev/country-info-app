import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<GoogleMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
