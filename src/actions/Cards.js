import {
  getCardsFromDB,
  addCardToDB,
  deleteCardFromDB
} from '../lib/cardsapi.js';

export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const DELETE_CARD = 'DELETE_CARD';

export const addNewCard = (card) => {
  return (dispatch) => {
    return addCardToDB(card)
    .then( (cards) => {
      dispatch({
        type: ADD_NEW_CARD,
        cards: cards
      });
    });
  };
};

export const loadAllCards = () => {
  return (dispatch) => {
    return getCardsFromDB()
    .then( (cards) => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      });
    });
  };
};

export const deleteCard = (card) => {
  return (dispatch) => {
    return deleteCardFromDB()
    .then( (cards) => {
      dispatch({
        type: DELETE_CARD,
        cards
      });
    });
  };
};