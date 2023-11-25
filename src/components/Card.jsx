import React from "react";

function Card({ image, series, title, text }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{series}</span>
        </div>
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-sub-details">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;