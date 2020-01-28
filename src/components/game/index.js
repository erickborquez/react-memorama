/* eslint-disable no-unused-vars */
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
const HISTORY = [{
  cards: [
    {
      content: "0",
      id: 0,
      isFlipped: false,
      groupId: 0
    }, {
      content: "1",
      id: 1,
      isFlipped: false,
      groupId: 1
    }, {
      content: "0",
      id: 2,
      isFlipped: false,
      groupId: 0
    }, {
      content: "1",
      id: 3,
      isFlipped: false,
      groupId: 1
    }
  ],
  selectEnabled: true,
}];

const EQUAL_CARDS = 2;
const IS_REPRODUCING = false;

const Game = props => {
  // const { isReproducing } = props;
  const isReproducing = IS_REPRODUCING;

  const [history, setHistory] = useState(HISTORY);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [shownCards, setShownCards] = useState([]);


  //This whill run when te game is playing from a recorded game
  useEffect(() => {
    if (isReproducing) {
      setTimeout(() => {
        setStep((step + 1) % history.length);
      }, 1000)
    }
  }, [step, isReproducing, history]);

  //This is used when there are an active game
  useEffect(() => {
    if (!isReproducing) {
      setStep(history.length - 1);
    }
  }, [history, isReproducing]);

  const handleCardClick = (id, groupId) => {
    if (isPlaying) {
      let newBoard = { ...history[step] };
      // This will update the board
      newBoard.cards = newBoard.cards.map((card) => {
        if (card.id !== id) return card;
        else return { ...card, isFlipped: true };
      })
      let newHistory = [...history, newBoard];
      setHistory(newHistory);
      if (shownCards.length === EQUAL_CARDS - 1) {
        //When te user select the max amount of cards the animation will show up
        //and handle whether the user select the same cards or no
        setTimeout(() => {
          if (shownCards.every(card => groupId === card.groupId)) {
            console.log("yey you selected the same cards");
          } else {
            newBoard.cards = newBoard.cards.map(card => {
              return { ...card, isFlipped: false };
            })
            console.log("uhhh you failed :(");
            newBoard.selectEnabled = true;
            setHistory([...newHistory, newBoard]);
          }
        }, 500)
        newBoard.selectEnabled = false;
        setShownCards([]);
      } else {
        //if a card is selected but the user hastn selected the maximum 
        //amount of cards the game will wait for the user to selecte more cards
        setShownCards([...shownCards, { id, groupId }]);
      }
    }
    console.log(history);
  }
  return (
    <div className="game" >
      <Board status={history[step]} handleCardClick={handleCardClick} />
    </div>
  )
}

export default Game;