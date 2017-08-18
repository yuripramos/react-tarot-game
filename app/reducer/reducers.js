export const toggleEachCardReducer = (state = [], action) => {
	console.log('toggle each card reducer!!', action);
	console.log('state', state);
	switch (action.type) {
	case 'TOGGLE_EACH_CARD':
		return state.map(card => {
			if (card.id !== card.id) {
				return card;
			}

			return {
				...card,
				opened: !card.opened,
			};
		});
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
