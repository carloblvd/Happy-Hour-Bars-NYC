import React, { useEffect } from "react";

const Map = ({ apiKey, coordinates, setCoordinates, location }) => {
  const zoom = 16;

  useEffect(() => {
    // Extract coordinates from the location prop
    const result = extractTextBetweenCharacters(location, "@", ",", 2);
    if (result) {
      setCoordinates(result);
    }
  }, [location]);

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

  const url = `https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7C${coordinates}&center=${coordinates}&zoom=${zoom}&size=400x400&key=${apiKey}`;

  return (
    <>
      <a className="map__link" href={location} target="_blank">
        <img className="map__img click" src={url} alt="Map" />
      </a>
    </>
  );
};

export default Map;
