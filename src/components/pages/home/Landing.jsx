import React from "react";
import LandingImg from "../../../assets/undraw_beer_xg5f.svg";
import { Link } from "react-router-dom";
import RegisterModal from "../../ui/RegisterModal";

const Landing = ({ userLoggedIn }) => {
  const currentPage = "Landing";
  return (
    <>
      <section id="landing">
        <div className="row">
          <div className="container">
            <div className="landing__content">
              <div className="landing__header">
                <h1
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="landing__title">
                  Rob and Carlo's
                  <br />
                  Happy Hour Website
                </h1>
                <br />
                <p
                  data-aos="fade-right"
                  data-aos-delay="800"
                  className="landing__para">
                  Some of the bars we've found on TikTok that have some great
                  happy hour specials.
                </p>
                {userLoggedIn ? (
                  <div data-aos="fade-right" data-aos-delay="800">
                    <button className="landing__btn click">
                      <Link to="/bars">Explore Bars</Link>
                    </button>
                  </div>
                ) : (
                  <RegisterModal currentPage={currentPage} />
                )}
              </div>
              <figure
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                className="landing__img--wrapper">
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
