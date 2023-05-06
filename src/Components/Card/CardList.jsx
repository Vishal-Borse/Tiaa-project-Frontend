import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <Card
          key={card.id}
          parameter1={card.parameter1}
          parameter2={card.parameter2}
          parameter3={card.parameter3}
          parameter4={card.parameter4}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
