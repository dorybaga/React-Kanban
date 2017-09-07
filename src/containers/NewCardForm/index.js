import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewCard } from '../../actions/Cards.js';

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    };
  }

  handleChangeTitle(e) {
    console.log('HANDLING TITLE CHANGE', e.target.value);
    this.setState({
      title: e.target.value
    });
  }

  handleChangePriorityStatus(e) {
    console.log('HANDLING PRIORITY CHANGE', e.target.value);
    this.setState({
      priority: e.target.value
    });
  }

  handleChangeCreatedBy(e) {
    console.log('HANDLING CREATEDBY CHANGE', e.target.value);
    this.setState({
      createdBy: e.target.value
    });
  }

  handleChangeAssignedTo(e) {
    console.log('HANDLING ASSIGNEDTO CHANGE', e.target.value);
    this.setState({
      assignedTo: e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();

    let newCard = {
      title: this.state.title,
      priority: this.state.priority,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo

    };
    console.log('NEW CARD ***********', newCard);

    this.props.addNewCard(newCard);
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="title">title</label>
            <input
              type="text"
              placeholder="task name"
              value={this.state.title}
              onChange={this.handleChangeTitle.bind(this)}
            />

          <label htmlFor="priority">priority</label>
            <input
              type="text"
              placeholder="priority level"
              value={this.state.priority}
              onChange={this.handleChangePriorityStatus.bind(this)}
            />

          <label htmlFor="createdBy">created by</label>
            <input
              type="text"
              placeholder="created by"
              value={this.state.createdBy}
              onChange={this.handleChangeCreatedBy.bind(this)}
            />

           <label htmlFor="assignedTo">assigned to</label>
            <input
              type="text"
              placeholder="assigned to"
              value={this.state.assignedTo}
              onChange={this.handleChangeAssignedTo.bind(this)}
            />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCard: (card) => {
      dispatch(addNewCard(card));
    }
  }
}

const ConnectedNewCardForm = connect(
null,
mapDispatchToProps
)(NewCardForm)

export default ConnectedNewCardForm;

