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
        <select
          className="borough__filter"
          defaultValue="default"
          onChange={filterBorough}>
          <option value="default" disabled>
            Borough
          </option>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          {/* <option value="Bronx">Bronx</option>
          <option value="Queens">Queens</option>
          <option value="Staten_Island">Staten Island</option> */}
        </select>
        {borough ? (
          <select
            className="neighborhood__filter"
            defaultValue="default"
            onChange={filterNeighborhood}>
            <option value="default" disabled>
              Neighborhood
            </option>
            {borough === "Manhattan" ? (
              <>
                <option value="Alphabet City">Alphabet City</option>
                <option value="Chelsea">Chelsea</option>
                <option value="Chinatown">Chinatown</option>
                <option value="East Village">East Village</option>
                <option value="Gramercy">Gramercy</option>
                <option value="Hell's Kitchen">Hell's Kitchen</option>
                <option value="Kips Bay">Kips Bay</option>
                <option value="Lower East Side">Lower East Side</option>
                <option value="Midtown">Midtown</option>
                <option value="Morningside Heights">Morningside Heights</option>
                <option value="Murray Hill">Murray Hill</option>
                <option value="Noho">Noho</option>
                <option value="Upper East Side">Upper East Side</option>
              </>
            ) : borough === "Brooklyn" ? (
              <>
                <option value="Bushwick">Bushwick</option>
                <option value="Dumbo">Dumbo</option>
              </>
            ) : null}
          </select>
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
