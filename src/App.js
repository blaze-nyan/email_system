import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
