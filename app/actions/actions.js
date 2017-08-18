import axios from 'axios';

export const toggleEachCard = (id, opened) => {
	console.log('toggle each card action!!');
	return {
		type: 'TOGGLE_EACH_CARD',
		opened,
		id,
	};
};

export const flipAllCards = (id, oneOpened) => {
	return {
		type: 'FLIP_ALL_CARDS',
		id,
		oneOpened,
	};
};


export const fetchAllCards = () => (dispatch) => {
	dispatch({ type: 'FETCH_ALL_CARDS' });
	axios.get('https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json')
	.then(res => {
		dispatch({
			type: 'FETCH_ALL_CARDS_SUCCESS',
			cards: res.data.cards,
		});
	})
	.catch(err => {
		dispatch({
			type: 'FETCH_ALL_CARDS_FAILURE',
			error: err,
		});
	});
};


window.fetchAllCards = fetchAllCards;
