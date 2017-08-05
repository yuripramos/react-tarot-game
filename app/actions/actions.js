export var toggleEachCard = (id, opened) => {
  console.log('toggle each card action!!');
  return {
    type: 'TOGGLE_EACH_CARD',
    opened,
    id,
  };
};

export var flipAllCards = (id, oneOpened) => {
  return {
    type: 'FLIP_ALL_CARDS',
    id,
    oneOpened
  };
};
