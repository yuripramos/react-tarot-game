export var toggleEachCard = (id, opened) => {
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
