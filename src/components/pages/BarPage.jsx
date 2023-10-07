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
                    ? selectCharactersUntilColon(bar.specificDaySpecial.Monday)
                    : null}
                </div>
              </li>
              <li className="Tuesday" value="Tuesday">
                <div className="day_of_week">Tuesday</div>
                <div> {convertHours(bar.daysAndHours.Tuesday)} </div>
                <div>
                  {bar.specificDaySpecial.Tuesday
                    ? selectCharactersUntilColon(bar.specificDaySpecial.Tuesday)
                    : null}
                </div>
              </li>
              <li className="Wednesday" value="Wednesday">
                <div className="day_of_week">Wednesday</div>
                <div> {convertHours(bar.daysAndHours.Wednesday)} </div>
                <div>
                  {bar.specificDaySpecial.Wednesday
                    ? selectCharactersUntilColon(
                        bar.specificDaySpecial.Wednesday
                      )
                    : null}
                </div>
              </li>
              <li className="Thursday" value="Thursday">
                <div className="day_of_week">Thursday</div>
                <div> {convertHours(bar.daysAndHours.Thursday)} </div>
                <div>
                  {bar.specificDaySpecial.Thursday
                    ? selectCharactersUntilColon(
                        bar.specificDaySpecial.Thursday
                      )
                    : null}
                </div>
              </li>
              <li className="Friday" value="Friday">
                <div className="day_of_week">Friday</div>
                <div> {convertHours(bar.daysAndHours.Friday)} </div>
                <div>
                  {bar.specificDaySpecial.Friday
                    ? selectCharactersUntilColon(bar.specificDaySpecial.Friday)
                    : null}
                </div>
              </li>
              <li className="Saturday" value="Saturday">
                <div className="day_of_week">Saturday</div>
                <div> {convertHours(bar.daysAndHours.Saturday)} </div>
                <div>
                  {bar.specificDaySpecial.Saturday
                    ? selectCharactersUntilColon(
                        bar.specificDaySpecial.Saturday
                      )
                    : null}
                </div>
              </li>
              <li className="Sunday" value="Sunday">
                <div className="day_of_week">Sunday</div>
                <div> {convertHours(bar.daysAndHours.Sunday)} </div>
                <div>
                  {bar.specificDaySpecial.Sunday
                    ? selectCharactersUntilColon(bar.specificDaySpecial.Sunday)
                    : null}
                </div>
              </li>
            </ul>
            <br />
            <div className="bar__content--wrapper">
              <ul className="sustenance__deals">
                <li>
                  <p className="sustenance__deals--disclaimer">
                    <h3>Disclaimer</h3>
                    The following list exclusively features Happy Hour
                    promotions as advertised on the website or via their
                    respective social media channels. It's important to note
                    that the absence of a Happy Hour promotion for a particular
                    item at a given bar does not imply unavailability of that
                    item on their menu.
                  </p>
                </li>
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
              <Map location={bar.locationLink} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BarPage;
