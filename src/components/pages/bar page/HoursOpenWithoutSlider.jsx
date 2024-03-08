import React, { useEffect } from "react";

const HoursOpenWithoutSlider = ({
  bar,
  selectCharactersUntilColon,
  convertHours,
}) => {
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
    const currentDay = weekday[d.getDay()]; // Get the current day of the week

    // Loop through all days of the week
    weekday.forEach((day) => {
      const element = document.getElementsByClassName(day)[0];
      if (element) {
        // Set the border color based on whether it's the current day or not
        element.style.borderColor = day === currentDay ? "#2d2de3" : "#d8d8d8";
      }
    });
  }, []);

  const renderDay = (day) => (
    <li className={day} key={day} value={day}>
      <div className="day_of_week">{day}</div>
      <div>{convertHours(bar.daysAndHours[day])}</div>
      <div>
        {bar.specificDaySpecial[day]
          ? selectCharactersUntilColon(bar.specificDaySpecial[day])
          : null}
      </div>
    </li>
  );

  return <>{weekday.map((day) => renderDay(day))}</>;
};

export default HoursOpenWithoutSlider;
