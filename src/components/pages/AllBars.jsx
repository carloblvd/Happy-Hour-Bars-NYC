import React, { useState } from "react";
import { BarData } from "../../BarData";
import BarTile from "../ui/BarTile";
import FilterBar from "../ui/FilterBar";
import NoResultsImg from "../../assets/undraw_searching.svg";

const AllBars = () => {
  const [allBars, setAllBars] = useState(BarData);
  const [barsShowing, setBarsShowing] = useState(allBars);

  return (
    <>
      <section id="AllBars">
        <div className="row">
          <FilterBar
            setBarsShowing={setBarsShowing}
            allBars={allBars}
            barsShowing={barsShowing}
          />
          <div className="container bar__container">
            <ul className="bar__list">
              {barsShowing.length > 0 ? (
                <>
                  {barsShowing.map((bar, index) => (
                    <li className="bar__list--item" key={index}>
                      <BarTile bar={bar} index={index} />
                    </li>
                  ))}
                </>
              ) : (
                <>
                  <figure className="no-results__img--wrapper">
                    <img src={NoResultsImg} alt="" />
                    <p>Sorry No Results</p>
                  </figure>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBars;
