import React from 'react';
import Card from './Card.js';

const ProgressList = (props) => {
  return (
    <div className="progressList column">
      <h3 className="columnName">
        IN PROGRESS
      </h3>
      <div className="cards_container">
        {
          props.cards
          .filter( (card) => {
            return card.status === "progress"
          })
          .map( (card) => {
            return (
              <Card
                title={card.title}
                priority={card.priority}
                createdBy={card.createdBy}
                assignedTo={card.assignedTo}
              />
            )
          })
        }
      </div>
    </div>
  )
}
export default ProgressList;