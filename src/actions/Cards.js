export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const addNewCard = (card) => {
  console.log('ACTION ADDING NEW CARD');
  return {
    type: ADD_NEW_CARD,
    card: card
  }
}