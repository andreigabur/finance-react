import React from 'react';
import Enzyme from 'enzyme';
import App from './App';

it('renders app witout crashing', () => {
	Enzyme.mount(<App />);
});