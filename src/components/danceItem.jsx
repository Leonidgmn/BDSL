import React from 'react'

function DanceItem (props) {


    function onDanceClick () {
      props.setActiveDance(props.dance)
        
    }

    return (
        <li onClick={onDanceClick} className="select-dance-item">
            <span>{props.dance}</span>
        </li>
    )
}

export default DanceItem
