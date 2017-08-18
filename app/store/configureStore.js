import * as redux from 'redux';
import thunk from 'redux-thunk';

import { flipAllCardsReducer, toggleEachCardReducer, fetchAllCardsReducer } from '../reducer/reducers.js';


export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		flipAllCards: flipAllCardsReducer,
		toggleEachCard: toggleEachCardReducer,
		fetchAllCards: fetchAllCardsReducer,
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	window.store = store;

	return store;
};
