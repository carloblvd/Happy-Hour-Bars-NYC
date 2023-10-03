import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Map from "../ui/Map";

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
                <div className="day_of_week">Monday</div>
                <div> {convertHours(bar.daysAndHours.Monday)} </div>
                <div className="day__special">
                  {bar.specificDaySpecial.Monday
                    ? bar.specificDaySpecial.Monday
                    : null}
                </div>
              </li>
              <li className="Tuesday" value="Tuesday">
                <div className="day_of_week">Tuesday</div>
                <div> {convertHours(bar.daysAndHours.Tuesday)} </div>
                <div>
                  {bar.specificDaySpecial.Tuesday
                    ? bar.specificDaySpecial.Tuesday
                    : null}
                </div>
              </li>
              <li className="Wednesday" value="Wednesday">
                <div className="day_of_week">Wednesday</div>
                <div> {convertHours(bar.daysAndHours.Wednesday)} </div>
                <div>
                  {bar.specificDaySpecial.Wednesday
                    ? bar.specificDaySpecial.Wednesday
                    : null}
                </div>
              </li>
              <li className="Thursday" value="Thursday">
                <div className="day_of_week">Thursday</div>
                <div> {convertHours(bar.daysAndHours.Thursday)} </div>
                <div>
                  {bar.specificDaySpecial.Thursday
                    ? bar.specificDaySpecial.Thursday
                    : null}
                </div>
              </li>
              <li className="Friday" value="Friday">
                <div className="day_of_week">Friday</div>
                <div> {convertHours(bar.daysAndHours.Friday)} </div>
                <div>
                  {bar.specificDaySpecial.Friday
                    ? bar.specificDaySpecial.Friday
                    : null}
                </div>
              </li>
              <li className="Saturday" value="Saturday">
                <div className="day_of_week">Saturday</div>
                <div> {convertHours(bar.daysAndHours.Saturday)} </div>
                <div>
                  {bar.specificDaySpecial.Saturday
                    ? bar.specificDaySpecial.Saturday
                    : null}
                </div>
              </li>
              <li className="Sunday" value="Sunday">
                <div className="day_of_week">Sunday</div>
                <div> {convertHours(bar.daysAndHours.Sunday)} </div>
                <div>
                  {bar.specificDaySpecial.Sunday
                    ? bar.specificDaySpecial.Sunday
                    : null}
                </div>
              </li>
            </ul>
            <br />
            <div className="bar__content--wrapper">
              <ul className="sustenance__deals">
                <li>
                  Food:{" "}
                  {bar.sustenanceDeals.food
                    ? bar.sustenanceDeals.food.length == 1
                      ? bar.sustenanceDeals.food
                      : bar.sustenanceDeals.food.length == 2
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
              <Map location={bar.locationLink} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BarPage;
