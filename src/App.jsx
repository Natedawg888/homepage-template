import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* at “/” render your Homepage */}
        <Route path="/" element={<Homepage />} />
        {/*
        // in the future you can add more:
        // <Route path="/about" element={<About />} />
      */}
      </Routes>
    </>
  );
}

export default App;
