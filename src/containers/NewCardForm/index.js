import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewCard } from '../../actions/Cards.js';

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      priority: 'low',
      createdBy: '',
      assignedTo: ''
    };
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleChangePriorityStatus(e) {
    this.setState({
      priority: e.target.value
    });
  }

  handleChangeCreatedBy(e) {
    this.setState({
      createdBy: e.target.value
    });
  }

  handleChangeAssignedTo(e) {
    this.setState({
      assignedTo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let newCard = {
      title: this.state.title,
      status: "queue",
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

            <select
            name="priority"
            value={this.state.priority}
            onChange={this.handleChangePriorityStatus.bind(this)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>

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

