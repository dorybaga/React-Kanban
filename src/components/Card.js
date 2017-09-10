import React from 'react';
import NewCardForm from '../containers/NewCardForm';

const Card = ({id, title, priority, createdBy, assignedTo, handleDelete}) => {
  return(
    <div className="card">
      <div className="cardBody">
        <div className="taskTitle">{title}</div>
        <div className="priorityStatus">{priority}</div>
        <div className="createdBy">{createdBy}</div>
        <div className="assignedTo">{assignedTo}</div>
      </div>
      <div className="cardFooter">
        <button className="editCard">Edit</button>
        <button
          className="deleteCard"
          onClick={handleDelete}
          id={id}>
          Delete
          </button>
        <button className="moveCard">Move</button>
        <div className="createdBy"></div>
      </div>
    </div>
  )
};

export default Card;
