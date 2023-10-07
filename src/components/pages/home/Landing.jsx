import React from "react";
import LandingImg from "../../../assets/undraw_beer_xg5f.svg";
import { Link } from "react-router-dom";

const Landing = ({ userLoggedIn }) => {
  return (
    <>
      <section id="landing">
        <div className="row">
          <div className="container">
            <div className="landing__content">
              <div className="landing__header">
                <h1 className="landing__title">
                  Rob and Carlo's
                  <br />
                  Happy Hour Website
                </h1>
                <br />
                <p className="landing__para">
                  Some of the bars we've found on TikTok that have some great
                  happy hour specials.
                </p>
                {userLoggedIn ? (
                  <Link to="/bars">
                    <button className="landing__btn click">Explore Bars</button>
                  </Link>
                ) : (
                  <button className="landing__btn click">Sign Up</button>
                )}
              </div>
              <figure className="landing__img--wrapper">
                <img src={LandingImg} alt="" className="landing__img" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
