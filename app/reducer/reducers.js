export const toggleEachCardReducer = (state = false, action) => { // possivelmente trocar action por id
  console.log('toggle each card reducer!!', action);
  console.log('state', state);
  switch (action.type) {
    case 'TOGGLE_EACH_CARD':
      return [
        ...state,
        !state,
      ];
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
