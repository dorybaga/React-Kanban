import getCards from '../lib/cardsapi.js';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';

export const addNewCard = (card) => {
  return {
    type: ADD_NEW_CARD,
    card
  };
};

export const loadAllCards = () => {
  return (dispatch) => {
    return getCards()
    .then( ({ cards }) => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      });
    });
  };
};