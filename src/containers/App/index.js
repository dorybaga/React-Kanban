import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addNewCard,
  loadAllCards,
  deleteCard
} from '../../actions/Cards.js';

import Header from '../../components/Header.js';
import NewCardForm from '../NewCardForm';
import QueueList from '../../components/QueueList.js'
import ProgressList from '../../components/ProgressList';
import DoneList from '../../components/DoneList';
import getCards from '../../lib/cardsapi.js';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state= {

    }
  }

  componentWillMount() {
    this.props.loadAllCards();
  }

  handleDelete(e) {
    console.log("handle delete event", e);
    console.log(this.props.deleteCard());
    this.props.deleteCard(e.target.id)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NewCardForm />
        <div className="body">
          <QueueList
            cards={this.props.cards}
            handleDelete={this.handleDelete.bind(this)}
          />
          <ProgressList
            cards={this.props.cards}
          />
          <DoneList
            cards={this.props.cards}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllCards: () => {
      dispatch(loadAllCards())
    },
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;

