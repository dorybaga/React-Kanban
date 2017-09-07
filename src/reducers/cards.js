import { ADD_NEW_CARD } from '../actions/Cards.js';

const initialState = [];

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      console.log('REDUCER*******', action.card);
      return [...state, action.card];
    default:
      return state;
  }
};

export default cards;
