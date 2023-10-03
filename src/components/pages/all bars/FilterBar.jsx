import {
  faBeerMugEmpty,
  faDrumstickBite,
  faMartiniGlassCitrus,
  faStar,
  faWhiskeyGlass,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FilterBar = ({ barsShowing, allBars, setBarsShowing }) => {
  const [borough, setBorough] = useState(false);
  const [filteredBars, setFilteredBars] = useState(null);
  const boroughFilter = document.getElementsByClassName("borough__filter");
  const neighborhoodFilter = document.getElementsByClassName(
    "neighborhood__filter"
  );

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
    let barsByBorough = barsShowing.filter(
      (bar) => bar.borough === e.target.value
    );
    setBorough(e.target.value);
    setFilteredBars(barsByBorough);
    setBarsShowing(barsByBorough);
  }

  function filterNeighborhood(e) {
    let barsByNeighborhood = filteredBars.filter(
      (bar) => bar.neighborhood === e.target.value
    );
    setBarsShowing(barsByNeighborhood);
  }

  return (
    <>
      <div className="filter__bar">
        <div className="open-now__filter"></div>
        <div className="borough__filter">
          <button
            className="filter__btn click"
            onClick={filterBorough}
            value="Manhattan">
            Manhattan
          </button>
          <button
            className="filter__btn click"
            onClick={filterBorough}
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
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Alphabet City">
                    Alphabet City
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Chelsea">
                    Chelsea
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Chinatown">
                    Chinatown
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="East Village">
                    East Village
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Gramercy">
                    Gramercy
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Hell's Kitchen">
                    Hell's Kitchen
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Kips Bay">
                    Kips Bay
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Lower East Side">
                    Lower East Side
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Midtown">
                    Midtown
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Morningside Heights">
                    Morningside Heights
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Murray Hill">
                    Murray Hill
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Noho">
                    Noho
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Upper East Side">
                    Upper East Side
                  </button>
                </>
              ) : borough === "Brooklyn" ? (
                <>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Bushwick">
                    Bushwick
                  </button>
                  <button
                    className="filter__btn click"
                    onClick={filterNeighborhood}
                    value="Dumbo">
                    Dumbo
                  </button>
                </>
              ) : null}
            </div>
          </>
        ) : null}
        <div className="filter__btns--wrapper">
          <button
            value="special_today"
            onClick={handleFilter}
            className="filter__btn click special-deal-today__filter">
            <FontAwesomeIcon icon={faStar} />
            Special Today?
          </button>
          <button
            value="beer"
            onClick={handleFilter}
            className="filter__btn click has-beer-deal__filter">
            <FontAwesomeIcon icon={faBeerMugEmpty} />
            Beer?
          </button>
          <button
            value="wine"
            onClick={handleFilter}
            className="filter__btn click has-wine-deal__filter">
            <FontAwesomeIcon icon={faWineGlass} />
            Wine?
          </button>
          <button
            value="cocktails"
            onClick={handleFilter}
            className="filter__btn click has-cocktail-deal__filter">
            <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            Cocktail?
          </button>
          <button
            value="shots"
            onClick={handleFilter}
            className="filter__btn click has-shots-deal__filter">
            <FontAwesomeIcon icon={faWhiskeyGlass} />
            Shots?
          </button>
          <button
            value="food"
            onClick={handleFilter}
            className="filter__btn click has-food-deal__filter">
            <FontAwesomeIcon icon={faDrumstickBite} />
            Food?
          </button>
          <button
            value="reset"
            onClick={() => {
              setBarsShowing(allBars);
              neighborhoodFilter.value = "default";
              boroughFilter.value = "default";
              setBorough(false);
            }}
            className="filter__btn click reset__btn">
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
