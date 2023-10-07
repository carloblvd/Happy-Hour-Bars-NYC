import React from "react";
import aboutImgRob from "../../../assets/rob img.jpeg";
import aboutImgCarlo from "../../../assets/carlo img.jpeg";
import WaveImg from "../../../assets/wave.svg";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="wave__img--wrapper">
          <img className="wave__img--top wave__img" src={WaveImg} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <h1
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="400"
              className="about__header">
              About
            </h1>
            <div className="about__content">
              <figure
                data-aos="fade-in"
                data-aos-delay="500"
                className="about__img--wrapper">
                <img src={aboutImgRob} alt="Rob Image" className="about__img" />
              </figure>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="about__para">
                {"  "}Rob, the guy on the left, has been curating a list of
                happy hour bars in the city, mainly using TikTok. He compiled
                the list in his notes. Carlo, the guy on the right, transformed
                this list into a website. Now, whenever their friends in the
                city want to find a bar with great happy hour deals, they can
                easily share all the collected data from this website.
              </p>
              <figure
                data-aos="fade-in"
                data-aos-delay="500"
                className="about__img--wrapper">
                <img
                  src={aboutImgCarlo}
                  alt="Carlo Image"
                  className="about__img"
                />
              </figure>
            </div>
          </div>
        </div>
        <figure className="wave__img--wrapper">
          <img className="wave__img--bottom wave__img" src={WaveImg} alt="" />
        </figure>
      </section>
    </>
  );
};

export default About;
