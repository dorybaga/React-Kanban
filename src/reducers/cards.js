import {
  ADD_NEW_CARD,
  LOAD_CARDS,
  DELETE_CARD
} from '../actions/Cards.js';

const initialState = [];

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      return action.cards;

    case LOAD_CARDS:
      return action.cards;

    case DELETE_CARD:
      return action.cards;

    default:
      return state;
  }
};

export default cards;
