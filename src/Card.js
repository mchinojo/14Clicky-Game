import React from "react";
import "./Card.css";

function Card(props) {
  // Defining the structure and content of the Card component as a card.
  return (
    <div className="col">
      <div className="card border border-dark rounded-0 text-center">
        {/* Displaying the card image */}
        <img
          src={process.env.PUBLIC_URL + props.image}
          className="card-img-top rounded-0 border-bottom border-dark"
          alt={props.title}
        ></img>
      </div>
    </div>
  );
}

export default Card;
