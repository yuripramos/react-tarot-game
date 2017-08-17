import React, { Component } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import '../assets/styles/app.css';
import Header from './header/header.js';
import Container from './container/container.js';

var store = require('../store/configureStore').configure();

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			loaded: false,
			shuffledCards: [],
			isShowing: true,
		};
		axios.get('https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json')
		.then(res => {
			this.setState({ items: res.data, loaded: true });
		});
		this.start = this.start.bind(this);
	}
	shuffle(a) {
		for (let i = a.length; i; i--) {
			const j = Math.floor(Math.random() * i);
			[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
	}
	start() {
		this.setState({ isShowing: false, shuffledCards: this.shuffle(this.state.items.cards) });
	}

	render() {
		return (
			<Provider store={store}>
				<div className="container">
					<div className="col-lg-12 col-md-12 col-sm-12 text-center">
						<Header start={this.start} isShowing={this.state.isShowing} />
						{
						this.state.loaded &&
							<Container
								cards={this.state.items.cards}
								basePath={this.state.items.imagesUrl}
								backCard={this.state.items.imageBackCard}
								isShowing={this.state.isShowing}
							/>
						}
					</div>
				</div>
			</Provider>
		);
	}
}
