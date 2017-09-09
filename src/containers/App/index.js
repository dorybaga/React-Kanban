import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addNewCard,
  loadAllCards
} from '../../actions/Cards.js';

import NewCardForm from '../NewCardForm';
import Header from '../../components/Header.js';
import Body from '../../components/Body.js';
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

  render() {
    return (
      <div className="App">
        <Header />
        <NewCardForm />
        <Body
          cards={this.props.cards}
        />
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
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;

