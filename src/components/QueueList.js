import React from 'react';
import Card from './Card.js';

const QueueList = (props) => {
  return (
    <div className="queueList column">
      <h3 className="columnName">
        IN QUEUE
      </h3>
      <div className="cards_container">
        {
          props.cards
          .filter( (card) => {
            return card.status === "queue"
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
export default QueueList;