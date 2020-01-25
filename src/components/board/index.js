import React, { useState, useEffect } from 'react';
import Card from '../Card'
import { shuffle } from '../../utilities';

import './style.css'


const CARDS_CONTENT = [
  { content: "0", id: 0 },
  { content: "1", id: 1 },
  { content: "2", id: 2 },
  { content: "3", id: 3 }
];
const front = () => {
  return (
    <div className="card-front-view">
      ?
  </div>)
}

const back = content => {
  return () => (
    <div className="card-back-view">
      {content}
    </div>)
}
const Board = () => {
  const [cardFlipped, setCardFlipped] = useState({});
  const [enableSelect, setEnableSelect] = useState(true);
  const [cards, setCards] = useState([])

  const handleCardFlip = card => {
    if (cardFlipped.id !== undefined) {
      ///When the user select 2 cards, they must wait to aniation end to select more cards
      setEnableSelect(false);
      setTimeout(() => {
        setEnableSelect(true);
      }, 500);

      if (cardFlipped.id === card.id) {
        /// Here i will handle when the user selects 2 equal cards
      } else {
        card.unflipCard();
        cardFlipped.unflipCard();
      }
      setCardFlipped({});
    } else {
      setCardFlipped(card);
    }
  }

  useEffect(() => {
    setCards(shuffle([...CARDS_CONTENT, ...CARDS_CONTENT]));
  }, [])
  return (
    <div className="board">
      {cards.map(({ content, id }, i) => {
        return <Card Front={front} Back={back(content)} handleFlip={handleCardFlip} id={id} enableSelect={enableSelect} key={i} />
      })}
    </div>
  )
}

export default Board;