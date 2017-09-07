import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewCard } from '../../actions/Cards.js';
import NewCardForm from '../NewCardForm';
import Header from '../../components/Header.js';
import Body from '../../components/Body.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewCardForm />
        <Body />

      </div>
    );
  }
}

export default App;
