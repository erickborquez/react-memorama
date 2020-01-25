import React, { useState } from 'react';

import "./style.css"

const Card = props => {
  const [classFlip, setClassFlip] = useState("");
  const [flipping, setFlipping] = useState(false);
  const { Front, Back, id, handleFlip, enableSelect } = props;


  const flipCard = () => {
    setClassFlip(classFlip + " card--flipped");
    setTimeout(() => {
      //Here i will handle when te user flips the card. It happend after the effect is over.
      handleFlip({ id: id, unflipCard: unflipCard });
      console.log(id)
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
    if (enableSelect && !flipping) {
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
            <Front />

          </div>
        </div>
        <div className="card-face card-front">
          <Back />
        </div>
      </div>
    </div>
  )
}

export default Card;