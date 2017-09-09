import {
  ADD_NEW_CARD,
  LOAD_CARDS
} from '../actions/Cards.js';

const initialState = [];

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      return [
        ...state,
        action.card
      ];

    case LOAD_CARDS:
      return [
        ...action.cards
      ];

    default:
      return state;
  }
};

export default cards;
