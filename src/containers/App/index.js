import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewCard } from '../../actions/Cards.js';
import NewCardForm from '../NewCardForm';
import Header from '../../components/Header.js';
import Body from '../../components/Body.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state= {

    }
  }

  render() {
    console.log(this.props);
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



const ConnectedApp = connect(
  mapStateToProps
)(App)

export default ConnectedApp;

