import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [isClicked, setIsClicked] = useState(false);

  console.log(isClicked, props.title);

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
            setIsClicked(true);
            props.shuffle();
          }}
        ></img>
      </div>
    </div>
  );
}

export default Card;
