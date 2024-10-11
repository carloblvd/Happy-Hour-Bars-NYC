import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Map from "../../ui/Map";
import HoursOpenWithSlider from "./HoursOpenWithSlider";
import HoursOpenWithoutSlider from "./HoursOpenWithoutSlider";
import Directions from "../../ui/Directions";

const BarPage = ({ userLocation }) => {
  const location = useLocation();
  const { bar, travelingStyle, barTitle, userCoords, apiKey } = location.state;
  const [barPageTravelingStyle, setBarPageTravelingStyle] =
    useState(travelingStyle);
  const [coordinates, setCoordinates] = useState("");

  function selectCharactersUntilColon(inputString) {
    const index = inputString.indexOf(":");
    if (index !== -1) {
      const beforeColon = <b>{inputString.slice(0, index)}</b>;
      const colon = <b>:</b>;
      const afterColon = inputString.slice(index + 1);
      return [beforeColon, colon, afterColon];
    } else {
      return [inputString];
    }
  }

  function convertHours(hours) {
    let openTime = hours[0];
    let closeTime = hours[1];

    if (typeof hours === "string") {
      return hours;
    }
    if (openTime > 12) {
      openTime -= 12;
    }
    if (closeTime == 0) {
      closeTime = 12;
    }
    if (closeTime > 12) {
      closeTime -= 12;
    }

    return `${hours[0] < 12 ? openTime + ":00am" : openTime + ":00pm"} - ${
      hours[1] < 12 ? closeTime + ":00am" : closeTime + ":00pm"
    }`;
  }

  useEffect(() => {
    setBarPageTravelingStyle(travelingStyle);
  }, [travelingStyle]);

  return (
    <>
      <section id="bar__page">
        <div className="container">
          <div className="row">
            <Link className="black" to="/bars">
              <button className="back__btn black click">
                <FontAwesomeIcon className="black" icon={faArrowLeft} /> Back
              </button>
            </Link>
            <div className="title__wrapper">
              <a href={bar.locationLink} target="_blank">
                <div className="bar__title">{bar.barName}</div>
              </a>
              <br />
              <h2>
                {bar.neighborhood}, {bar.borough}
              </h2>
            </div>
            <br />
            <div className="bar__page--content-container">
              <div className="slider_and_disclaimer">
                <ul className="hours__open show_above_900px">
                  <HoursOpenWithoutSlider
                    bar={bar}
                    selectCharactersUntilColon={selectCharactersUntilColon}
                    convertHours={convertHours}
                  />
                </ul>
                <div className="show_below_900px">
                  <HoursOpenWithSlider
                    bar={bar}
                    selectCharactersUntilColon={selectCharactersUntilColon}
                    convertHours={convertHours}
                  />
                </div>

                <br />
                <div className="sustenance__deals--disclaimer">
                  <h3>Disclaimer</h3>
                  The following list exclusively features Happy Hour promotions
                  as advertised on the website or via their respective social
                  media channels. It's important to note that the absence of a
                  Happy Hour promotion for a particular item at a given bar does
                  not imply unavailability of that item on their menu.
                </div>
              </div>
              <div className="bar__content--wrapper">
                <div className="left__wrapper">
                  <ul className="sustenance__deals">
                    <li>
                      <b>Food:</b>{" "}
                      {bar.sustenanceDeals.food
                        ? bar.sustenanceDeals.food.length == 1
                          ? bar.sustenanceDeals.food
                          : bar.sustenanceDeals.food.length == 2
                          ? bar.sustenanceDeals.food[0] +
                            " and " +
                            bar.sustenanceDeals.food[1]
                          : bar.sustenanceDeals.food.length === 3
                          ? bar.sustenanceDeals.food[0] +
                            ", " +
                            bar.sustenanceDeals.food[1] +
                            ", and " +
                            bar.sustenanceDeals.food[2]
                          : bar.sustenanceDeals.food.join(", ") + "."
                        : "No Deals"}
                    </li>
                    <li>
                      <b>Cocktails:</b>{" "}
                      {bar.sustenanceDeals.cocktails
                        ? bar.sustenanceDeals.cocktails
                        : "No Deals"}
                    </li>
                    <li>
                      <b>Beer</b>{" "}
                      {bar.sustenanceDeals.beer
                        ? bar.sustenanceDeals.beer
                        : "No Deals"}
                    </li>
                    <li>
                      <b>Wine:</b>{" "}
                      {bar.sustenanceDeals.wine
                        ? bar.sustenanceDeals.wine
                        : "No Deals"}
                    </li>
                    <li>
                      <b>Shots:</b>{" "}
                      {bar.sustenanceDeals.shots
                        ? bar.sustenanceDeals.shots
                        : "No Deals"}
                    </li>
                    <a
                      className="menu__link click"
                      target="_blank"
                      href={bar.menuLink}>
                      Menu/Website
                    </a>
                  </ul>
                  <div className="directions__wrapper">
                    <div className="directions__btns--wrapper">
                      <button
                        className="click"
                        onClick={() => setBarPageTravelingStyle("DRIVING")}>
                        Driving
                      </button>
                      <button
                        className="click"
                        onClick={() => setBarPageTravelingStyle("TRANSIT")}>
                        Transit
                      </button>
                      <button
                        className="click"
                        onClick={() => setBarPageTravelingStyle("WALKING")}>
                        Walking
                      </button>
                    </div>
                    <Directions
                      userCoords={userCoords}
                      barTitle={barTitle}
                      bar={bar}
                      barPageTravelingStyle={barPageTravelingStyle}
                      travelingStyle={travelingStyle}
                      coordinates={coordinates}
                      apiKey={apiKey}
                      userLocation={userLocation}
                    />
                  </div>
                </div>

                <Map
                  barTitle={barTitle}
                  coordinates={coordinates}
                  setCoordinates={setCoordinates}
                  location={bar.locationLink}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BarPage;
