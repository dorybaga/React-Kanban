import React from 'react';

const Card = (data) => {
  return(
    <div className="card">
      <div className="cardBody">
        <div className="taskTitle"></div>
        <div className="priorityStatus"></div>
        <div className="assignedTo"></div>
      </div>
      <div className="cardFooter">
        <button className="editCard">Edit</button>
        <button className="deleteCard">Delete</button>
        <button className="moveCard">Move</button>
        <div className="createdBy"></div>
      </div>
    </div>
  )
};

export default Card;