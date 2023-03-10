import React from "react";
import Card from "./Card";
import cardData from "./data/card-data.json";
import "./CardGallery.css";

function CardGallery() {
  // Rendering the CardGallery component,
  // which displays a list of Project components
  // with project data from project-data.json.
  return (
    // Creating a div to hold the Project components.
    <div className="container px-4 py-5 my-5">
      <h1 className="display-4 mb-5 text-center">
        Click on an image to earn points, but don't click on any more than once!
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Project data is mapped over to create a list of Project components */}
        {cardData.map((card) => (
          <Card key={card.id} image={card.image} title={card.title}></Card>
        ))}
      </div>
    </div>
  );
}

export default CardGallery;
