import React, { useState } from "react";
import Card from "./Card";
import cardData from "./data/card-data.json";
import "./CardGallery.css";

function CardGallery() {
  const [cardShuffle, setCardShuffle] = useState(cardData);
  const [idArray, setIdArray] = useState([]);

  shuffle(cardData);

  return (
    // Creating a div to hold the Project components.
    <div className="container px-4 py-5 my-5">
      <h1 className="display-4 mb-5 text-center">
        Click on an image to earn points, but don't click on any more than once!
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Project data is mapped over to create a list of Project components */}
        {cardShuffle.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            shuffle={() => setCardShuffle(shuffle(cardData))}
            idArray={idArray}
            setIdArray={setIdArray}
            reset={() => emptyArray()}
          ></Card>
        ))}
      </div>
    </div>
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return [...array];
}

const emptyArray = () => {
  console.log("reset");
};

export default CardGallery;
