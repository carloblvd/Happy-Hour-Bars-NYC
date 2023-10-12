import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HoursOpenWithSlider = ({
  bar,
  selectCharactersUntilColon,
  convertHours,
}) => {
  const sliderRef = React.useRef(null);

  useEffect(() => {
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
    const currentDay = weekday[d.getDay()];

    for (let i = 0; i < weekday.length; i++) {
      const day = weekday[i];
      const element = document.getElementsByClassName(day)[0];

      if (element) {
        element.style.borderColor = day === currentDay ? "#2d2de3" : "#d8d8d8";
      }
    }
  }, []);

  const getCurrentDayIndex = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    return currentDay === 0 ? 6 : currentDay - 1;
  };

  const initialSlideIndex = getCurrentDayIndex();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialSlideIndex,
  };

  return (
    <>
      <Slider className="hours__open" ref={sliderRef} {...settings}>
        <li key={1} className="Monday" value="Monday">
          <div className="day_of_week">Monday</div>
          <div> {convertHours(bar.daysAndHours.Monday)} </div>
          <div className="day__special">
            {bar.specificDaySpecial.Monday
              ? selectCharactersUntilColon(bar.specificDaySpecial.Monday)
              : null}
          </div>
        </li>
        <li key={2} className="Tuesday" value="Tuesday">
          <div className="day_of_week">Tuesday</div>
          <div> {convertHours(bar.daysAndHours.Tuesday)} </div>
          <div>
            {bar.specificDaySpecial.Tuesday
              ? selectCharactersUntilColon(bar.specificDaySpecial.Tuesday)
              : null}
          </div>
        </li>
        <li key={3} className="Wednesday" value="Wednesday">
          <div className="day_of_week">Wednesday</div>
          <div> {convertHours(bar.daysAndHours.Wednesday)} </div>
          <div>
            {bar.specificDaySpecial.Wednesday
              ? selectCharactersUntilColon(bar.specificDaySpecial.Wednesday)
              : null}
          </div>
        </li>
        <li key={4} className="Thursday" value="Thursday">
          <div className="day_of_week">Thursday</div>
          <div> {convertHours(bar.daysAndHours.Thursday)} </div>
          <div>
            {bar.specificDaySpecial.Thursday
              ? selectCharactersUntilColon(bar.specificDaySpecial.Thursday)
              : null}
          </div>
        </li>
        <li key={5} className="Friday" value="Friday">
          <div className="day_of_week">Friday</div>
          <div> {convertHours(bar.daysAndHours.Friday)} </div>
          <div>
            {bar.specificDaySpecial.Friday
              ? selectCharactersUntilColon(bar.specificDaySpecial.Friday)
              : null}
          </div>
        </li>
        <li key={6} className="Saturday" value="Saturday">
          <div className="day_of_week">Saturday</div>
          <div> {convertHours(bar.daysAndHours.Saturday)} </div>
          <div>
            {bar.specificDaySpecial.Saturday
              ? selectCharactersUntilColon(bar.specificDaySpecial.Saturday)
              : null}
          </div>
        </li>
        <li key={7} className="Sunday" value="Sunday">
          <div className="day_of_week">Sunday</div>
          <div> {convertHours(bar.daysAndHours.Sunday)} </div>
          <div>
            {bar.specificDaySpecial.Sunday
              ? selectCharactersUntilColon(bar.specificDaySpecial.Sunday)
              : null}
          </div>
        </li>
      </Slider>
      <button className="slider-prev-btn slider-btn" onClick={previous}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="slider-next-btn slider-btn" onClick={next}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  );
};

export default HoursOpenWithSlider;
