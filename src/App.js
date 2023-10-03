import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarPage from "./components/pages/BarPage";
import AllBars from "./components/pages/all bars/AllBars";
import Nav from "./components/ui/Nav";
import Home from "./components/pages/home/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/bars" element={<AllBars />} />
          <Route path="/:barName" element={<BarPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
