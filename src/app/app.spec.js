import React from 'react';
import Enzyme from 'enzyme';
import App from './app.jsx';

it('renders app witout crashing', () => {
	Enzyme.mount(<App />);
});