export const toggleEachCardReducer = (state = false, action) => { // possivelmente trocar action por id
  switch (action.type) {
    case 'TOGGLE_EACH_CARD':
      console.log(action);
      return action;
      // return state.map(card =>
      // (card.id === action.id)
      // ? { ...card, opened: !action.opened }
      // : card)
    default:
      return state;
  }
};

export const flipAllCardsReducer = (state = false, action) => {
  switch (action.type) {
    case 'FLIP_ALL_CARDS':
      return !state;
    default:
      return state;
  }
};
