import React from "react";
import Landing from "./Landing";
import About from "./About";

const Home = ({ setUserLoggedIn, userLoggedIn, setUser, user }) => {
  return (
    <>
      <Landing
        user={user}
        setUser={setUser}
        setUserLoggedIn={setUserLoggedIn}
        userLoggedIn={userLoggedIn}
      />
      <About />
    </>
  );
};

export default Home;
