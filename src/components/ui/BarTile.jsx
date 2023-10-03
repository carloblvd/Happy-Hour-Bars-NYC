import React from "react";
import { Link } from "react-router-dom";

const BarTile = ({ bar }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  const weekHours = bar.daysAndHours;
  const weekSpecials = bar.specificDaySpecial;
  const BarTitle = bar.barName.toLowerCase().replaceAll(" ", "_");

  return (
    <>
      <Link state={bar} className="link" to={`/${BarTitle}`}>
        <section className="bar__tile click">
          <div className="bar__name--wrapper">
            <h1 className="bar__name">{bar.barName}</h1>
            <p>
              {bar.neighborhood}, {bar.borough}
            </p>
            <p>
              {day}:{" "}
              {typeof weekHours[day] === "string" ? (
                weekHours[day]
              ) : (
                <>
                  {weekHours[day][0] == 12
                    ? weekHours[day][0] + ":00pm - "
                    : weekHours[day][0] > 12
                    ? weekHours[day][0] - 12 + ":00pm - "
                    : weekHours[day][0] < 12
                    ? weekHours[day][0] + ":00am - "
                    : weekHours[day][0]}
                  {weekHours[day][1] == 0
                    ? "12:00am"
                    : weekHours[day][1] > 12
                    ? weekHours[day][1] - 12 + ":00pm"
                    : weekHours[day][1] + ":00am"}
                </>
              )}
            </p>
          </div>
          <div className="bar__info--wrapper">
            {weekSpecials[day] ? (
              <>
                <p>
                  <b>Special Today</b>
                  {" -> "}

                  {weekSpecials[day] ? weekSpecials[day] : null}
                </p>
                <br />
              </>
            ) : null}
            <p>
              <b>The Deal</b>: {bar.theDeal}
            </p>
          </div>
        </section>
      </Link>
    </>
  );
};

export default BarTile;
