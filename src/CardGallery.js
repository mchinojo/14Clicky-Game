import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardData from "./data/card-data.json";
import "./CardGallery.css";

const hasRepeated = (array) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (array.indexOf(element) !== index) {
      return true;
    }
  }
  return false;
};

function CardGallery(props) {
  const [cardShuffle, setCardShuffle] = useState(cardData);
  const [idArray, setIdArray] = useState([]);
  // const [message, setMessage] = useState(
  //   "Click on an image to earn points, but don't click on any more than once!"
  // );

  useEffect(() => {
    setCardShuffle(shuffle(cardData));
    if (hasRepeated(idArray)) {
      props.setMessage("You guessed incorrectly.");
      setIdArray([]);
      props.setCount(0);
    } else {
      if (props.count > 0) {
        props.setMessage("Keep going...");
      }
      if (props.count > props.topScore) {
        props.setTopScore(props.count);
      }
    }
  }, [idArray, props]);

  shuffle(cardData);

  return (
    // Creating a div to hold the Project components.
    <div className="py-5">
      <div className="myJumbotron p-5 my-5">
        <div className="container-fluid">
          <h1 className="display-5 text-center">
            Click on an image to earn points, but don't click on any more than
            once!
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Project data is mapped over to create a list of Project components */}
          {cardShuffle.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              idArray={idArray}
              setIdArray={setIdArray}
              count={props.count}
              setCount={props.setCount}
            ></Card>
          ))}
        </div>
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

export default CardGallery;
