import React from "react";

function ScheduleItem(props) {
  return (
    <div className="schedule-item">
      <div className="hour-day-schedule">
        <p className="hour-schedule">
          {props.data.hour}:{props.data.minute}
        </p>
      </div>
      <div style={{ color: "white", background: "black" }} className="level">
        {props.data.level}
      </div>
      <div className="name-schedule">
        <h3 className="name-dance-schedule">{props.data.dance}</h3>
        <p className="teacher-schedule">{props.data.teacher}</p>
      </div>
      {/* <h4 className='hall-schedule'>{props.data.hall}</h4> */}
    </div>
  );
}

export default ScheduleItem;
