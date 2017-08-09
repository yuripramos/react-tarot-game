import axios from 'axios';


describe('Response tests', () => {
	it('check if the size of the response is the same of the array', () => {
		let items = 0;
		axios.get('https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json')
		.then(res => {
			items = res.data.length;
			expect(items).toEqual(res.data.length);
		});
	});
});
