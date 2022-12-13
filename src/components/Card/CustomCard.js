import React from "react";
import ReadMore from "../ReadMore/ReadMore";
import "./card.css";

const CustomCard = ({room}) => {
  return (
    <div className="card text-center shadow col-12">
    <div className="overflow">
    <img src={`images/thumbnail_${room.id}.jpg`} alt="" className="card-img-top" />
    </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{room.name}</h4>
          <ReadMore>{room.description}</ReadMore>
        <a href="/" className="btn btn-outline-success">View Details</a>
      </div>
    </div>
  )
}
export default CustomCard;