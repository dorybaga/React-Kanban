import React from 'react';
import Card from './Card.js';

const DoneList = (props) => {
  return (
    <div className="doneList column">
      <h3 className="columnName">
        DONE
      </h3>
      <div className="cards_container">
        {
          props.cards
          .filter( (card) => {
            return card.status === "done"
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
export default DoneList;