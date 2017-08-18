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


export const fetchAllCardsReducer = (state = {}, action) => {
	switch (action.type) {
	case 'FETCH_ALL_CARDS':
		return {
			fetchingCards: true,
			fetchedCards: false,
		};
	case 'FETCH_ALL_CARDS_SUCCESS':
		return {
			...state,
			fetchingCards: false,
			fetchedCards: true,
			cards: action.cards,
		};
	case 'FETCH_ALL_CARDS_FAILURE':
		return {
			...state,
			error: action.error,
			fetchingCards: false,
			fetchedCards: false,
		};
	default:
		return state;
	}
};
