import React from "react";
import "./Card.css";

function Card(props) {
  // Defining the structure and content of the Card component as a card.
  return (
    <div className="col">
      <div className="card rounded-0 ">
        {/* Displaying the card image */}
        <img
          src={process.env.PUBLIC_URL + props.image}
          className="card-img-top rounded-0"
          alt={props.title}
          onClick={() => {
            const newArray = [...props.idArray, props.id];
            props.setIdArray(newArray);
            props.setCount(props.count + 1);
            console.log(newArray);
          }}
        ></img>
      </div>
    </div>
  );
}

export default Card;
