import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarPage from "./components/pages/BarPage";
import AllBars from "./components/pages/all bars/AllBars";
import Nav from "./components/Nav";
import Home from "./components/pages/home/HomePage";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Router>
      <div className="App">
        <Nav
          user={user}
          setUser={setUser}
          setUserLoggedIn={setUserLoggedIn}
          userLoggedIn={userLoggedIn}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                user={user}
                setUser={setUser}
                setUserLoggedIn={setUserLoggedIn}
                userLoggedIn={userLoggedIn}
              />
            }
          />
          <Route path="/bars" element={<AllBars />} />
          <Route path="/:barName" element={<BarPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
