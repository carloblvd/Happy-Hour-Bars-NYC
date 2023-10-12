import React, { useEffect } from "react";

const HoursOpenWithoutSlider = ({
  bar,
  selectCharactersUntilColon,
  convertHours,
}) => {
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
    const currentDay = weekday[d.getDay()]; // Get the current day of the week

    // Loop through all days of the week
    for (let i = 0; i < weekday.length; i++) {
      const day = weekday[i];
      const element = document.getElementsByClassName(day)[0];

      if (element) {
        // Set the border color based on whether it's the current day or not
        element.style.borderColor = day === currentDay ? "#2d2de3" : "#d8d8d8";
      }
    }
  }, []);

  return (
    <>
      <li className="Monday" value="Monday">
        <div className="day_of_week">Monday</div>
        <div> {convertHours(bar.daysAndHours.Monday)} </div>
        <div className="day__special">
          {bar.specificDaySpecial.Monday
            ? selectCharactersUntilColon(bar.specificDaySpecial.Monday)
            : null}
        </div>
      </li>
      <li className="Tuesday" value="Tuesday">
        <div className="day_of_week">Tuesday</div>
        <div> {convertHours(bar.daysAndHours.Tuesday)} </div>
        <div>
          {bar.specificDaySpecial.Tuesday
            ? selectCharactersUntilColon(bar.specificDaySpecial.Tuesday)
            : null}
        </div>
      </li>
      <li className="Wednesday" value="Wednesday">
        <div className="day_of_week">Wednesday</div>
        <div> {convertHours(bar.daysAndHours.Wednesday)} </div>
        <div>
          {bar.specificDaySpecial.Wednesday
            ? selectCharactersUntilColon(bar.specificDaySpecial.Wednesday)
            : null}
        </div>
      </li>
      <li className="Thursday" value="Thursday">
        <div className="day_of_week">Thursday</div>
        <div> {convertHours(bar.daysAndHours.Thursday)} </div>
        <div>
          {bar.specificDaySpecial.Thursday
            ? selectCharactersUntilColon(bar.specificDaySpecial.Thursday)
            : null}
        </div>
      </li>
      <li className="Friday" value="Friday">
        <div className="day_of_week">Friday</div>
        <div> {convertHours(bar.daysAndHours.Friday)} </div>
        <div>
          {bar.specificDaySpecial.Friday
            ? selectCharactersUntilColon(bar.specificDaySpecial.Friday)
            : null}
        </div>
      </li>
      <li className="Saturday" value="Saturday">
        <div className="day_of_week">Saturday</div>
        <div> {convertHours(bar.daysAndHours.Saturday)} </div>
        <div>
          {bar.specificDaySpecial.Saturday
            ? selectCharactersUntilColon(bar.specificDaySpecial.Saturday)
            : null}
        </div>
      </li>
      <li className="Sunday" value="Sunday">
        <div className="day_of_week">Sunday</div>
        <div> {convertHours(bar.daysAndHours.Sunday)} </div>
        <div>
          {bar.specificDaySpecial.Sunday
            ? selectCharactersUntilColon(bar.specificDaySpecial.Sunday)
            : null}
        </div>
      </li>
    </>
  );
};

export default HoursOpenWithoutSlider;
