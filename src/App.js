import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarPage from "./components/pages/BarPage";
import AllBars from "./components/pages/all bars/AllBars";
import Nav from "./components/Nav";
import Home from "./components/pages/home/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/init";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState(auth);
  const [loadingState, setLoadingState] = useState(true);

  AOS.init({
    duration: 1000,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setTimeout(() => {
          setUser(user);
          setUserLoggedIn(true);
          setLoadingState(false);
        }, 200);
      } else {
        setTimeout(() => {
          setLoadingState(false);
        }, 200);
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav
          loadingState={loadingState}
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
          <Route
            path="/bars"
            element={<AllBars userLoggedIn={userLoggedIn} />}
          />
          <Route path="/:barName" element={<BarPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
