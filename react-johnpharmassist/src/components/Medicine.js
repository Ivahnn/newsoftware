import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>MEDICINE INFORMATION</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/gamot1.png"
              text="Pregabalin Funxion"
              label="Medicine"
              external={true}
              path="https://www.mims.com/philippines/drug/info/funxion?type=full#:~:text=Each%20capsule%20contains%3A%20Pregabalin%2050,75%20mg%2C%20or%20150%20mg.&text=Pharmacology%3A%20Pharmacodynamics%3A%20Pregabalin%20is%20an,gamma%20aminobutyric%20acid%20(GABA)."
            />

            <CardItem
              src="images/gamot2.png"
              text="Gabapentin Reinin"
              label="Medicine"
              external={true}
              path="https://www.mims.com/philippines/drug/info/reinin?type=full"
            />

            <CardItem
              src="images/gamot3.png"
              text="Paracetamol Biogesic Tablet"
              label="Medicine"
              external={true}
              path="https://www.mims.com/Philippines/drug/info/Biogesic/"
            />
            <CardItem
              src="images/gamot4.png"
              text="Aspirin Aspiltes"
              label="Medicine"
              external={true}
              path="https://www.mims.com/philippines/drug/info/aspilets-aspilets-ec"
            />
            <CardItem
              src="images/gamot5.png"
              text="Paracetimol Biogesic Syrup"
              label="Medicine"
              external={true}
              path="https://www.mims.com/Philippines/drug/info/Biogesic/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
