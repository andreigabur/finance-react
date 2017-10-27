import React from 'react';
import PropTypes from 'prop-types';
import './transactions-list.css';

class TransactionsList extends React.Component {
	render() {
		return (
			<div className="transactions-list">
				{this.props.transactions.map(
					(transaction) => {
						return (
							<div className="transaction" style={{ padding: '10px' }} key={transaction.id}>
								<div>
									{transaction.desctiption}
								</div>
								<div style={{color: '#23527C', fontWeight: '700'}}>
									{transaction.amount} $$
								</div>
							</div>
						)
					}
				)}
			</div>
		)
	}
}

TransactionsList.propTypes = {
	transactions: PropTypes.array
};

TransactionsList.defaultProps = {
	transactions: [
		{
			id: 1,
			desctiption: 'The first transaction',
			amount: 100,
			type: 'payment',
			category: 'other',
			account: 'ING000011110000'
		}
	]
};

export default TransactionsList;