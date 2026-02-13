import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";   // your landing page
import Homepage from "./homepage";       // your homepage component

const isLoggedIn = false; // change this later based on auth

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Homepage /> : <Landing />}
        />
        {/* You can add more routes here later */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
