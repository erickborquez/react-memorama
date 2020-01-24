import React, { useState } from 'react';

import "./style.css"

const Card = () => {
  const [classFlip, setClassFlip] = useState("");
  const [flipping, setFlipping] = useState(false);


  const flipCard = () => {
    setClassFlip(classFlip + " card--flipped");
    setTimeout(() => {
      //Here i will handle when te user flips the card. It happend after the effect is over.
      console.log("flipped");
    }, 200)
  }

  const unflipCard = () => {
    setClassFlip(classFlip + " card--unflip");
    setFlipping(true);
    setTimeout(() => {
      setClassFlip("");
      setFlipping(false);
    }, 500);
  }

  const handleClick = e => {
    e.stopPropagation();
    flipCard();
    if (!flipping) {
      if (classFlip.includes("card--flipped")) {
        unflipCard();
      } else {
        flipCard();
      }
    }
  }

  return (
    <div className="card-scene">
      <div id="card" className={`card ${classFlip}`} onClick={handleClick}>
        <div className="card-face card-backing">
          <div className="grain-overlay"></div>
          <div className="back-main">

            Este es el bueno

          </div>
        </div>
        <div className="card-face card-front">
          Este es el de atras

        </div>
      </div>
    </div>
  )
}

export default Card;