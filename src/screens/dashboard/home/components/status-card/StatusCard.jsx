import React from "react";
import "./status-card.css";

const StatusCard = (props) => {
  return (
    <div className="status-card">
      <div className="status-card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="status-card__info">
        <div className="status-card__count">{props.count}</div>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default StatusCard;
