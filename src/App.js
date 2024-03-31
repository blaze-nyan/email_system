import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
