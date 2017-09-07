import { ADD_NEW_CARD } from '../actions/Cards.js';

const initialState = { cards: [] };

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      console.log('REDUCER*******', action.book);
      return {
        cards: [state.cards, action.card]
      };

      default:
        return state;
  }
};

export default cards;
