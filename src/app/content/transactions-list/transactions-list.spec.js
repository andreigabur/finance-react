import React from 'react';
import Enzyme from 'enzyme';
import TransactionsList from './transactions-list';

describe('</TransactionsList />', () => {
	it('renders 2 transactions', () => {
		const transactions = [
			{
				id: 1,
				desctiption: '1',
				amount: 100
			},
			{
				id: 2,
				desctiption: '1',
				amount: 100
			}
		]
		const transactionsList = Enzyme.shallow(<TransactionsList transactions={transactions}/>);
		expect(transactionsList.find('.transactions-list').children()).toHaveLength(2);
	});
})
