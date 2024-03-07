import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarPage from "./components/pages/bar page/BarPage";
import AllBars from "./components/pages/all bars/AllBars";
import Nav from "./components/Nav";
import Home from "./components/pages/home/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/init";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState(auth);
  const [loadingState, setLoadingState] = useState(true);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const watchId = navigator.geolocation.watchPosition(
      function (position) {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      function (error) {
        console.error("Error getting user location:", error);
      },
      {
        enableHighAccuracy: true, // Request high accuracy
        maximumAge: 30000, // Accept cached positions up to 30 seconds old
        timeout: 10000, // Allow up to 10 seconds for location acquisition
      }
    );

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

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
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
            element={
              <AllBars
                userLocation={userLocation}
                userLoggedIn={userLoggedIn}
              />
            }
          />
          <Route
            path="/:barName"
            element={<BarPage userLocation={userLocation} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
