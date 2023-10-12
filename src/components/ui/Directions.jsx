import React, { useEffect, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { useLocation } from "react-router";

const Directions = ({
  apiKey,
  coordinates,
  userLocation,
  barPageTravelingStyle,
  travelingStyle,
  setBarTravelTimes,
  barTravelTimes,
  bar,
}) => {
  const location = useLocation();
  const [userCoords, setUserCoords] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    if (isLoaded && userLocation) {
      setUserCoords(`${userLocation.latitude},${userLocation.longitude}`);
    }
  }, [isLoaded, userLocation]);

  useEffect(() => {
    if (userCoords) {
      async function calculateRoute() {
        try {
          const directionsService = new window.google.maps.DirectionsService();
          const request = {
            origin: userCoords,
            destination: coordinates,
            travelMode: barPageTravelingStyle,
          };

          const response = await directionsService.route(request);

          if (response.status === "OK") {
            setDirectionsResponse(response);
            const legs = response.routes[0].legs[0];
            setDistance(legs.distance.text);
            setDuration(legs.duration.text);
          } else {
            console.error("Error calculating directions:", response.status);
          }

          setIsLoading(false);
        } catch (error) {
          console.error("Error calculating directions:", error);
          setIsLoading(false);
        }
      }

      calculateRoute();
    }
  }, [
    barPageTravelingStyle,
    travelingStyle,
    userCoords,
    coordinates,
    location.pathname,
  ]);

  useEffect(() => {
    if (location.pathname === "/bars" && directionsResponse) {
      const updatedBarTravelTimes = [...barTravelTimes];

      for (let i = 0; i < updatedBarTravelTimes.length; i++) {
        if (updatedBarTravelTimes[i].barName === bar.barName) {
          updatedBarTravelTimes[i].duration = convertTimeToMinutes(duration);
          break;
        }
      }

      setBarTravelTimes(updatedBarTravelTimes);
    }
  }, [duration]);

  function convertTimeToMinutes(timeString) {
    const timeArray = timeString.match(/(\d+)? hours? (\d+) mins?|(\d+) mins/);

    if (timeArray) {
      if (timeArray[1] || timeArray[2]) {
        const hours = timeArray[1] ? parseInt(timeArray[1], 10) : 0;
        const mins = timeArray[2] ? parseInt(timeArray[2], 10) : 0;

        const totalMinutes = hours * 60 + mins;

        return totalMinutes;
      } else if (timeArray[3]) {
        const mins = parseInt(timeArray[3], 10);
        return mins;
      }
    }

    console.error("Invalid time string format.");
    return null;
  }

  return (
    <div className="directions__content--wrapper">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {location.pathname == "/bars" ? (
            <>
              {barPageTravelingStyle === "WALKING" ? (
                <p>
                  {`${duration} `}
                  <br />
                  Walking
                </p>
              ) : barPageTravelingStyle === "TRANSIT" ? (
                <p>
                  {`${duration} `}
                  <br />
                  Bus/Train
                </p>
              ) : (
                <p>
                  {`${duration} `}
                  <br />
                  Driving
                </p>
              )}
            </>
          ) : (
            <>
              <a
                href={bar.locationLink}
                target="_blank"
                className="bar__page--directions click">
                <p>Selected Traveling Method: {barPageTravelingStyle}</p>
                <p>{`${distance}, ${duration}`}</p>
              </a>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Directions;
