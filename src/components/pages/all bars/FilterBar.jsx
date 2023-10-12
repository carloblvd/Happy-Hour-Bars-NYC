import {
  faBeerMugEmpty,
  faDrumstickBite,
  faMartiniGlassCitrus,
  faStar,
  faWhiskeyGlass,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const FilterBar = ({
  barsShowing,
  allBars,
  setBarsShowing,
  setTravelingStyle,
  barTravelTimes,
  travelingStyle,
}) => {
  const [filteredBars, setFilteredBars] = useState(null);
  const [buttonClicked, setButtonClicked] = useState({});

  const [borough, setBorough] = useState(false);
  const [selectedTravelingStyle, setSelectedTravelingStyle] = useState(null);
  const [selectedBorough, setSelectedBorough] = useState(null);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // useEffect(() => {
  //   setBarsSortedByDuration(
  //     [...barTravelTimes].sort((a, b) => a.duration - b.duration)
  //   );
  //   console.log(SortedByDuration);
  // }, [barTravelTimes]);

  const d = new Date();
  let day = weekday[d.getDay()];

  function handleFilter(e) {
    let value = e.target.value;
    if (value == "special_today") {
      const filteredBars = barsShowing.filter(
        (bar) => bar.specificDaySpecial[day]
      );
      setBarsShowing(filteredBars);
    } else {
      const filteredBars = barsShowing.filter(
        (bar) => bar.sustenanceDeals[value]
      );
      setBarsShowing(filteredBars);
    }
  }

  function filterBorough(e) {
    let barsByBorough = allBars.filter((bar) => bar.borough === e.target.value);
    setBorough(e.target.value);
    setFilteredBars(barsByBorough);
    setBarsShowing(barsByBorough);
    setSelectedBorough(e.target.value);
    setSelectedNeighborhood(null);
    setButtonClicked({
      beer: false,
      cocktails: false,
      food: false,
      shots: false,
      special_today: false,
      wine: false,
    });
  }

  function filterNeighborhood(e) {
    let barsByNeighborhood = filteredBars.filter(
      (bar) => bar.neighborhood === e.target.value
    );
    setBarsShowing(barsByNeighborhood);
    setSelectedNeighborhood(e.target.value);
    setButtonClicked({
      beer: false,
      cocktails: false,
      food: false,
      shots: false,
      special_today: false,
      wine: false,
    });
  }

  function handleButtonClick(value) {
    if (!buttonClicked[value]) {
      const updatedButtonClicked = { ...buttonClicked };
      updatedButtonClicked[value] = true;
      setButtonClicked(updatedButtonClicked);
    }
  }

  function resetFilterButtons() {
    setButtonClicked({});
  }

  function filterByDuration() {
    const barsSortedByDuration = [...barTravelTimes].sort(
      (a, b) => a.duration - b.duration
    );

    if (barTravelTimes && barsShowing) {
      const barsShowingOrdered = barsSortedByDuration
        .map(({ barName }) =>
          barsShowing.find((bar) => bar.barName === barName)
        )
        .filter((bar) => bar); // Filter out undefined (not found in barsShowing)

      setBarsShowing(barsShowingOrdered);
    }
  }

  return (
    <>
      <div className="filter__bar">
        <div className="open-now__filter"></div>
        <div className="borough__filter">
          <button
            className={`filter__btn click ${
              selectedBorough === "Manhattan" ? "selected" : ""
            }`}
            onClick={(e) => {
              handleButtonClick("Manhattan");
              filterBorough(e);
              setSelectedTravelingStyle(null);
            }}
            value="Manhattan">
            Manhattan
          </button>
          <button
            className={`filter__btn click ${
              selectedBorough === "Brooklyn" ? "selected" : ""
            }`}
            onClick={(e) => {
              handleButtonClick("Brooklyn");
              filterBorough(e);
              setSelectedTravelingStyle(null);
            }}
            value="Brooklyn">
            Brooklyn
          </button>
        </div>
        {borough ? (
          <>
            <div className="neighborhood__filter">
              {borough === "Manhattan" ? (
                <>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Alphabet City"
                        ? "selected"
                        : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Alphabet City");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Alphabet City">
                    Alphabet City
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Chelsea" ? "selected" : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Chelsea");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Chelsea">
                    Chelsea
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Chinatown"
                        ? "selected"
                        : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Chinatown");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Chinatown">
                    Chinatown
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "East Village"
                        ? "selected"
                        : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("East Village");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="East Village">
                    East Village
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Gramercy" ? "selected" : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Gramercy");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Gramercy">
                    Gramercy
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Hell's Kitchen"
                        ? "selected"
                        : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Hell's Kitchen");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Hell's Kitchen">
                    Hell's Kitchen
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Kips Bay" ? "selected" : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Kips Bay");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Kips Bay">
                    Kips Bay
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Lower East Side"
                        ? "selected"
                        : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Lower East Side");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Lower East Side">
                    Lower East Side
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Midtown" ? "selected" : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Midtown");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Midtown">
                    Midtown
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Morningside Heights"
                        ? "selected"
                        : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Morningside Heights");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Morningside Heights">
                    Morningside Heights
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Murray Hill"
                        ? "selected"
                        : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Murray Hill");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Murray Hill">
                    Murray Hill
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Noho" ? "selected" : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Noho");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Noho">
                    Noho
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Upper East Side"
                        ? "selected"
                        : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Upper East Side");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Upper East Side">
                    Upper East Side
                  </button>
                </>
              ) : borough === "Brooklyn" ? (
                <>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Bushwick" ? "selected" : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Bushwick");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Bushwick">
                    Bushwick
                  </button>
                  <button
                    className={`filter__btn ${
                      selectedNeighborhood === "Dumbo" ? "selected" : "click"
                    }`}
                    onClick={(e) => {
                      handleButtonClick("Dumbo");
                      filterNeighborhood(e);
                      setSelectedTravelingStyle(null);
                    }}
                    value="Dumbo">
                    Dumbo
                  </button>
                </>
              ) : null}
            </div>
          </>
        ) : null}
        <div className="travel-style__filter">
          <button
            value="DRIVING"
            className={`filter__btn ${
              selectedTravelingStyle == "DRIVING" ? "selected" : "click"
            }  `}
            onClick={() => {
              handleButtonClick("DRIVING");
              setTravelingStyle("DRIVING");
              setSelectedTravelingStyle("DRIVING");
              setTimeout(() => {
                filterByDuration();
              }, 500);
            }}>
            Closest Driving
          </button>
          <button
            value="TRANSIT"
            className={`filter__btn  ${
              selectedTravelingStyle == "TRANSIT" ? "selected" : "click"
            }  `}
            onClick={() => {
              handleButtonClick("TRANSIT");
              setTravelingStyle("TRANSIT");
              setSelectedTravelingStyle("TRANSIT");
              setTimeout(() => {
                filterByDuration();
              }, 300);
            }}>
            Closest On Subway
          </button>
          <button
            value="WALKING"
            className={`filter__btn  ${
              selectedTravelingStyle == "WALKING" ? "selected" : "click"
            }  `}
            onClick={() => {
              handleButtonClick("WALKING");
              setTravelingStyle("WALKING");
              setSelectedTravelingStyle("WALKING");
              setTimeout(() => {
                filterByDuration();
              }, 500);
            }}>
            Closest Walking
          </button>
        </div>
        <div className="filter__btns--wrapper">
          <button
            value="special_today"
            onClick={(e) => {
              handleButtonClick("special_today");
              handleFilter(e);
            }}
            className={`filter__btn special-deal-today__filter ${
              buttonClicked["special_today"] ? "clicked" : "click"
            } `}>
            <FontAwesomeIcon icon={faStar} />
            Special Today?
          </button>
          <button
            value="beer"
            onClick={(e) => {
              handleButtonClick("beer");
              handleFilter(e);
            }}
            className={`filter__btn has-beer-deal__filter ${
              buttonClicked["beer"] ? "clicked" : "click"
            } `}>
            <FontAwesomeIcon icon={faBeerMugEmpty} />
            Beer?
          </button>
          <button
            value="wine"
            onClick={(e) => {
              handleButtonClick("wine");
              handleFilter(e);
            }}
            className={`filter__btn has-wine-deal__filter ${
              buttonClicked["wine"] ? "clicked" : "click"
            } `}>
            <FontAwesomeIcon icon={faWineGlass} />
            Wine?
          </button>
          <button
            value="cocktails"
            onClick={(e) => {
              handleButtonClick("cocktails");
              handleFilter(e);
            }}
            className={`filter__btn has-cocktail-deal__filter ${
              buttonClicked["cocktails"] ? "clicked" : "click"
            } `}>
            <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            Cocktail?
          </button>
          <button
            value="shots"
            onClick={(e) => {
              handleButtonClick("shots");
              handleFilter(e);
            }}
            className={`filter__btn has-shots-deal__filter ${
              buttonClicked["shots"] ? "clicked" : "click"
            } `}>
            <FontAwesomeIcon icon={faWhiskeyGlass} />
            Shots?
          </button>
          <button
            value="food"
            onClick={(e) => {
              handleButtonClick("food");
              handleFilter(e);
            }}
            className={`filter__btn has-food-deal__filter ${
              buttonClicked["food"] ? "clicked" : "click"
            } `}>
            <FontAwesomeIcon icon={faDrumstickBite} />
            Food?
          </button>
        </div>
        <button
          value="reset"
          onClick={() => {
            setBarsShowing(allBars);
            setBorough(false);
            resetFilterButtons();
            setSelectedBorough(null);
            setSelectedNeighborhood(null);
            setSelectedTravelingStyle(null);
            setTravelingStyle("TRANSIT");
          }}
          className="filter__btn click reset__btn">
          Clear
        </button>
      </div>
    </>
  );
};

export default FilterBar;
