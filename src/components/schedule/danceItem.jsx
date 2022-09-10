import React from "react";

function DanceItem(props) {
  const isActive = props.dance === props.activeDance ? "active" : "";

  function onDanceClick() {
    props.setActiveDance(props.dance);
  }

  return (
    <li onClick={onDanceClick} className={`select-dance-item ${isActive}`}>
      <span>{props.dance}</span>
    </li>
  );
}

export default DanceItem;
