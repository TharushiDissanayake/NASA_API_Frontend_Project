import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home/Home";
import MarsRoverPhotos from "./components/MarsRoverPhotos/MarsRoverPhotos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
          path="/"
          element={<Login />}
          />
          <Route
          path="/Home"
          element={<Home />}
          />
          <Route
          path="/mars_photos"
          element={<MarsRoverPhotos />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )}

export default App;
