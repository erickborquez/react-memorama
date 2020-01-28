import React, { useState, useEffect } from 'react';
import Board from '../board'

import './style.css'

const OLD_HISTORY = [
  {
    cards: [
      {
        content: "0",
        id: 0,
        isFlipped: false
      }, {
        content: "1",
        id: 1,
        isFlipped: false
      }
    ],
    selectEnabled: true,
  }, {
    cards: [
      {
        content: "0",
        id: 0,
        isFlipped: true
      }, {
        content: "1",
        id: 1,
        isFlipped: false
      }
    ], selectEnabled: true,

  }, {
    cards: [
      {
        content: "0",
        id: 0,
        isFlipped: true
      }, {
        content: "1",
        id: 1,
        isFlipped: true
      },
    ],
    selectEnabled: false,
  }
]
const HISTORY = [

]
const ACTUAL_STEP = 1;
const EQUAL_CARDS = 2;

const Game = props => {
  const { isReproducing } = props;
  const [history, setHistory] = useState(OLD_HISTORY);
  const [step, setStep] = useState(ACTUAL_STEP);
  const [isPlaying, setIsPlaying] = useState(true);
  const [shownCards, setShownCards] = useState(0);


  useEffect(() => {
    if (isReproducing) {
      setTimeout(() => {
        setStep((step + 1) % history.length);
      }, 1000)
    }
  }, [step, isReproducing, history]);


  useEffect(() => {
    if (!isReproducing) {
      setStep(ACTUAL_STEP);
    }
  }, [history, isReproducing]);


  const handleCardClick = (card) => {
    if (isPlaying) {
      const newState = {}
    }
  }
  return (
    <div className="game" >
      <Board status={history[step]} handleCardClick={handleCardClick} />
    </div>
  )
}

export default Game;