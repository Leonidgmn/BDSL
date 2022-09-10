import React, { useState } from "react";
import ScheduleItem from "./scheduleItem";

function ScheduleDayItem(props) {
  const day = props.data;
  const newDayArr = props.danceCategory.filter((obj) => day.includes(obj.day));
  return (
    <div>
      <h2 className="schedule-title">{day}</h2>
      {newDayArr.map((data, index) => (
        <ScheduleItem data={data} key={index} />
      ))}
    </div>
  );
}

export default ScheduleDayItem;
