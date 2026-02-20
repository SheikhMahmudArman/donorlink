import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing";
import Homepage from "./pages/homepage";

function App() {
  const isLoggedIn = false; // change later when adding auth

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Homepage /> : <Landing />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;