import React from 'react';
import Card from './Card.js';

const QueueList = () => {
  return (
    <div className="queueList column">
      <h3 className="columnName">
        IN QUEUE
      </h3>
      <div className="cards_container">
        <Card />
      </div>
    </div>
  )
}
export default QueueList;