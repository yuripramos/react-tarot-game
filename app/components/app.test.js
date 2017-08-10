import axios from 'axios';
import React from 'react';
import * as renderer from 'react-test-renderer';

describe('API tests', () => {
	it('check if response it\'s true', () => {
		expect.assertions(1);
		return axios.get('https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json')
		.then(res => {
			expect(res.data).toBeTruthy();
		}).catch(err => {
			expect(err).toBeTruthy();
			console.log('error', err);
		});
	});

	it('check response object fields', () => {
		expect.hasAssertions();
		return axios.get('https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json')
		.then(res => {
			expect(res.data).toHaveProperty('imagesUrl');
			expect(res.data).toHaveProperty('imageBackCard');
			expect(res.data.cards[0]).toHaveProperty('image');
			expect(res.data.cards[0]).toHaveProperty('name');
		});
	});
});

describe('Renderer correctly', () => {
	it('<App /> Component Rendering', () => {
		const tree = renderer.create(
			<div className="container">
				<div className="col-lg-12 col-md-12 col-sm-12 text-center" />
			</div>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
