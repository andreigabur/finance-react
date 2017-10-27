import React from 'react';
import TransactionsList from './transactions-list/transactions-list';
import './content.css';

class Content extends React.Component {
	render() {
		return (
			<div className="content">
				<div>
					<TransactionsList />
				</div>
			</div>
		)
	}
}

export default Content;