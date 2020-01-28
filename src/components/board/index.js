import React from 'react';
import Card from '../card'

import './style.css'

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

const Board = ({ status, handleCardClick }) => {
  const { cards } = status;

  return (
    <div className="board">
      {cards.map(({ content, id, isFlipped, groupId }, i) => {
        return <Card
          Front={front}
          Back={back(content)}
          key={i}
          id={id}
          isFlipped={isFlipped}
          groupId={groupId}
          handleClick={handleCardClick} />
      })}
    </div>
  )
}

export default Board;