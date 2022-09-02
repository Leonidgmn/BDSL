import React from 'react'

function ScheduleItem(props) {
    return (
        <div  className="schedule-item">                
            <div className="hour-day-schedule">                    
                <p className="hour-schedule">{props.duplicateDay.hour}</p>                    
                <p className="hour-schedule">21:00</p>
            </div>
            <div style={{color: "white"}} className="level">{props.data.level}</div>
            <div className="name-schedule">
            <h3 className='name-dance-schedule'>{props.data.dance}</h3>
            <p className='teacher-schedule'>{props.data.teacher}</p>
            <p className='number-room-schedule'>{props.data.hall}</p>
            </div>                
        </div>
    )
}

export default ScheduleItem
