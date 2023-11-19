import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorsList from "./components/DoctorsList";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors/:category" element={<DoctorsList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
