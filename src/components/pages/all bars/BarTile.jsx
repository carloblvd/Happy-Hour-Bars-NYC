import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Directions from "../../ui/Directions";

const BarTile = ({
  bar,
  userLocation,
  travelingStyle,
  setBarTravelTimes,
  barTravelTimes,
  barsShowing,
  userCoords,
  apiKey,
}) => {
  const [coordinates, setCoordinates] = useState("");
  const [barTileLoaded, setBarTileLoaded] = useState(false);
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
  const barTitle = bar.barName.replaceAll(" ", "+");

  useEffect(() => {
    setTimeout(() => {
      setBarTileLoaded(true);
    }, 1000);
  }, [barsShowing]);

  useEffect(() => {
    // Extract coordinates from the location prop
    const result = extractTextBetweenCharacters(bar.locationLink, "@", ",", 2);

    if (result) {
      setCoordinates(result);
    }
  }, [bar]);

  const extractTextBetweenCharacters = (
    inputString,
    startChar,
    endChar,
    occurrence
  ) => {
    const startIndex = inputString.indexOf(startChar);
    let currentIndex = startIndex;
    let count = 0;

    while (currentIndex !== -1 && count < occurrence) {
      currentIndex = inputString.indexOf(endChar, currentIndex + 1);
      count++;
    }

    if (startIndex !== -1 && currentIndex !== -1) {
      return inputString.substring(startIndex + 1, currentIndex);
    } else {
      return "";
    }
  };

  const propsToPass = {
    travelingStyle: travelingStyle,
    bar: bar,
    barTitle: barTitle,
    userCoords: userCoords,
    apiKey: apiKey,
  };

  return (
    <>
      {barTileLoaded ? (
        <>
          <Link state={propsToPass} className="link" to={`/${barTitle}`}>
            <section className="bar__tile click">
              <div className="bar__header--wrapper">
                <div className="bar__name--wrapper">
                  <h1 className="bar__name">{bar.barName}</h1>
                  <p>
                    {bar.neighborhood}, {bar.borough}
                  </p>
                </div>
                <div className="bar__deal--wrapper">
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
                    <b>Happy Hour Special</b>: {bar.theDeal}
                  </p>
                </div>
                <div className="bar__info--wrapper">
                  <p className="bar__tile--hours">
                    <b>{day}</b>: <br />
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
                  <div className="bar__tile--directions">
                    <Directions
                      userCoords={userCoords}
                      bar={bar}
                      barTitle={barTitle}
                      barTravelTimes={barTravelTimes}
                      setBarTravelTimes={setBarTravelTimes}
                      barPageTravelingStyle={travelingStyle}
                      userLocation={userLocation}
                      coordinates={coordinates}
                    />
                  </div>
                </div>
              </div>
            </section>
          </Link>
        </>
      ) : (
        <>
          <div className="bar__tile--skeleton skeleton"></div>
        </>
      )}
    </>
  );
};

export default BarTile;
