import React, { useState, useEffect } from 'react';

import "./style.css"

// const Card = props => {
//   const [classFlip, setClassFlip] = useState("");
//   const [flipping, setFlipping] = useState(false);
//   const { Front, Back, id, handleFlip, enableSelect } = props;


//   const handleClick = e => {
//     e.stopPropagation();
//     if (enableSelect && !flipping) {
//       if (classFlip.includes("card--flipped")) {
//         unflipCard();
//       } else {
//         flipCard();
//       }
//     }
//   }
// }


const Card = props => {
  const { Front, Back, isFlipped, handleClick, id } = props;
  const [classFlip, setClassFlip] = useState("");

  const flipCard = () => {
    setClassFlip(classFlip + " card--flipped");
    setTimeout(() => {
      //Here i will handle when te user flips the card. It happend after the effect is over.
    }, 200)
  }

  const unflipCard = () => {
    setClassFlip(classFlip + " card--unflip");
    setTimeout(() => {
      setClassFlip("");
    }, 500);
  }

  useEffect(() => {
    if (isFlipped) {
      flipCard();
    } else {
      unflipCard();
    }
  }, [isFlipped])

  return (
    <div className="card-scene" onClick={() => !isFlipped ? handleClick(id) : null}>
      <div id="card" className={`card ${classFlip}`}>
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