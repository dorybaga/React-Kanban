import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  deleteCard
} from '../../actions/Cards.js';

import NewCardForm from '../containers/NewCardForm';

class Card extends Component {
  constructor() {
    super();
  }

  render(){
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
        <button className="deleteCard">Delete</button>
        <button className="moveCard">Move</button>
        <div className="createdBy"></div>
      </div>
    </div>
    )
  }
}