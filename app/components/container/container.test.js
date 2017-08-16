import React from 'react';
import axios from 'axios';
import { shallow } from 'enzyme';
import Card from './card/card.js';

let items = [];

const Container = () => {
	axios.get('https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json')
		.then(res => {
			items = res.data.cards;
		});
	const cardsMap = items.map((item, key) => {
		return (
			<Card
				item={item}
				keyId={key}
			/>
		);
	});

	return (
		<div className="col-lg-12 text-center">
			{cardsMap}
		</div>
	);
};

describe('<Container /> Component tests', () => {
	it('Rendering wrapper Div and <Card /> Component', () => {
		const wrapper = shallow(<Container />);
		expect(wrapper.find(<div className="col-lg-12 text-center" />)).toBeTruthy();
		expect(wrapper.find(<Card />)).toBeTruthy();
	});
});
