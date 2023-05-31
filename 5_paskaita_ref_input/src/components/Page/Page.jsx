import { v4 as uuidv4 } from "uuid";
import cardsArray from "./cardsArray";
import Hero from "./Hero";
import React from "react";
import Card from "./Card";

const Page = () => {
  const cards = cardsArray;

  return (
    <div>
      <Hero
        title={"Title"}
        subtitle={"Some about text"}
        text={"in two lines"}
      />
      <div className="cardsWraper">
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere saepe
          dignissimos at iste similique dolores tempora? Magnam alias voluptas
          voluptatum! Illo ipsum dolore suscipit tempore eum nam natus quidem
          sequi.
        </p>

        <div className="cards">
          {cards.map((card) => (
            <Card imgUrl={card.imgUrl} title={card.title} key={uuidv4()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
