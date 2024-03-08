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

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
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
        {weekday.map((day, index) => (
          <li key={`${day}+${index}`} className={day} value={day}>
            <div className="day_of_week">{day}</div>
            <div>{convertHours(bar.daysAndHours[day])}</div>
            <div>
              {bar.specificDaySpecial[day]
                ? selectCharactersUntilColon(bar.specificDaySpecial[day])
                : null}
            </div>
          </li>
        ))}
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
