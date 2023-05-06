import React from "react";
import "./Card.css";

const Card = ({
  parameter1,
  parameter2,
  parameter3,
  parameter4,
  description,
}) => {
  return (
    <div className="card">
      <div className="parameters">
        <div className="parameter">{parameter1}</div>
        <div className="parameter">{parameter2}</div>
        <div className="parameter">{parameter3}</div>
        <div className="parameter">{parameter4}</div>
      </div>
      <div>
        <h3>Items Available</h3>
      </div>
      <div className="description">
        <ul>
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
