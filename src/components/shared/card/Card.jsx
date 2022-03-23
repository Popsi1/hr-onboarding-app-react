import React from "react";
import "./Card.css";
import Image from "../images/a.png";

function Card(props) {
  
  return (
    <div className="card-main">
      <div className="card-body">
        <img
          className="employee-image"
          src={props.avatar}
          alt={Image}
        />
        <h3 className="employee-name">{props.firstName}</h3>

        <div className="position-div">
          <h4 className="position">Position</h4>
          <h4 className="position-value">{props.designation}</h4>
        </div>
        <div className="work-duration-div">
          <h4 className="work-duration">Worked Here</h4>
          <h4 className="work-duration-value">10yrs</h4>
        </div>
        <button className="card-button" type="submit" >
          View Profile
        </button>
      </div>
    </div>
  );
}

export default Card;