import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const BarPage = () => {
  const location = useLocation();
  const bar = location.state;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const d = new Date();
    const day = weekday[d.getDay()];

    const Today = document.getElementsByClassName(day)[0];
    if (Today) {
      Today.style.borderColor = "#2d2de3";
    }
  }, []);

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

  return (
    <>
      <section id="bar__page">
        <div className="container">
          <div className="row">
            <Link to="/bars">
              <button className="back__btn click">
                <FontAwesomeIcon icon={faArrowLeft} /> Back
              </button>
            </Link>
            <div className="title__wrapper">
              <a href={bar.locationLink} target="_blank">
                <span className="bar__title">{bar.barName}</span>
              </a>
              <br />
              <h2>
                {bar.neighborhood}, {bar.borough}
              </h2>
            </div>
            <br />
            <ul className="hours__open">
              <li className="Monday" value="Monday">
                <div>Monday:</div>
                <div> {convertHours(bar.daysAndHours.Monday)} </div>
                <>
                  {bar.specificDaySpecial.Monday
                    ? "Monday: " + bar.specificDaySpecial.Monday
                    : null}
                </>
              </li>
              <li className="Tuesday" value="Tuesday">
                <div>Tuesday:</div>
                <div> {convertHours(bar.daysAndHours.Tuesday)} </div>
                <>
                  {bar.specificDaySpecial.Tuesday
                    ? bar.specificDaySpecial.Tuesday
                    : null}
                </>
              </li>
              <li className="Wednesday" value="Wednesday">
                <div>Wednesday:</div>
                <div> {convertHours(bar.daysAndHours.Wednesday)} </div>
                <>
                  {bar.specificDaySpecial.Wednesday
                    ? bar.specificDaySpecial.Wednesday
                    : null}
                </>
              </li>
              <li className="Thursday" value="Thursday">
                <div>Thursday:</div>
                <div> {convertHours(bar.daysAndHours.Thursday)} </div>
                <>
                  {bar.specificDaySpecial.Thursday
                    ? bar.specificDaySpecial.Thursday
                    : null}
                </>
              </li>
              <li className="Friday" value="Friday">
                <div>Friday:</div>
                <div> {convertHours(bar.daysAndHours.Friday)} </div>
                <>
                  {bar.specificDaySpecial.Friday
                    ? bar.specificDaySpecial.Friday
                    : null}
                </>
              </li>
              <li className="Saturday" value="Saturday">
                <div>Saturday:</div>
                <div> {convertHours(bar.daysAndHours.Saturday)} </div>
                <>
                  {bar.specificDaySpecial.Saturday
                    ? bar.specificDaySpecial.Saturday
                    : null}
                </>
              </li>
              <li className="Sunday" value="Sunday">
                <div>Sunday:</div>
                <div> {convertHours(bar.daysAndHours.Sunday)} </div>
                <>
                  {bar.specificDaySpecial.Sunday
                    ? bar.specificDaySpecial.Sunday
                    : null}
                </>
              </li>
            </ul>
            <br />
            <ul className="sustenance__deals">
              <li>
                Food:{" "}
                {bar.sustenanceDeals.food
                  ? bar.sustenanceDeals.food.length == 2
                    ? bar.sustenanceDeals.food[0] +
                      " and " +
                      bar.sustenanceDeals.food[1]
                    : bar.sustenanceDeals.food.join(", ") + "."
                  : "No Deals"}
              </li>
              <li>
                Cocktail:{" "}
                {bar.sustenanceDeals.cocktails
                  ? bar.sustenanceDeals.cocktails
                  : "No Deals"}
              </li>
              <li>
                Beer:{" "}
                {bar.sustenanceDeals.beer
                  ? bar.sustenanceDeals.beer
                  : "No Deals"}
              </li>
              <li>
                Wine:{" "}
                {bar.sustenanceDeals.wine
                  ? bar.sustenanceDeals.wine
                  : "No Deals"}
              </li>
              <li>
                Shots:{" "}
                {bar.sustenanceDeals.shots
                  ? bar.sustenanceDeals.shots
                  : "No Deals"}
              </li>
            </ul>
            <br />
            <a className="menu__link" target="_blank" href={bar.menuLink}>
              Menu
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BarPage;
