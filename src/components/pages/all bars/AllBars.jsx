import React, { useEffect, useState } from "react";
import { BarData } from "../../../BarData";
import BarTile from "./BarTile";
import FilterBar from "./FilterBar";
import NoResultsImg from "../../../assets/undraw_searching.svg";
import { useNavigate } from "react-router";

const AllBars = ({ userLoggedIn, userLocation }) => {
  const navigate = useNavigate();
  const [barTravelTimes, setBarTravelTimes] = useState(
    [...BarData].map((bar) => ({ barName: bar.barName, duration: undefined }))
  );

  const [travelingStyle, setTravelingStyle] = useState("TRANSIT");
  const allBars = [...BarData].sort((a, b) => {
    const nameA = a.barName.toLowerCase();
    const nameB = b.barName.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const [barsShowing, setBarsShowing] = useState(allBars);

  return (
    <>
      {!userLoggedIn ? (
        navigate("/")
      ) : (
        <section id="AllBars">
          <FilterBar
            barTravelTimes={barTravelTimes}
            travelingStyle={travelingStyle}
            setTravelingStyle={setTravelingStyle}
            setBarsShowing={setBarsShowing}
            allBars={allBars}
            barsShowing={barsShowing}
          />
          <div className="row">
            <div className="container bar__container">
              <ul className="bar__list">
                {barsShowing.length > 0 ? (
                  <>
                    {barsShowing.map((bar, index) => (
                      <li className="bar__list--item" key={index}>
                        <BarTile
                          barsShowing={barsShowing}
                          barTravelTimes={barTravelTimes}
                          setBarTravelTimes={setBarTravelTimes}
                          travelingStyle={travelingStyle}
                          setTravelingStyle={setTravelingStyle}
                          userLocation={userLocation}
                          bar={bar}
                          index={index}
                        />
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    <figure className="no-results__img--wrapper">
                      <img src={NoResultsImg} alt="" />
                      <p>
                        Oops! It seems there are no results that match your
                        current filters.
                        <br />
                        <br />
                        Try adjusting your search criteria or clearing the
                        filters to see more options.
                      </p>
                    </figure>
                  </>
                )}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AllBars;
