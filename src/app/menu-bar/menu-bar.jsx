import React from 'react';
import './menu-bar.css';
import MenuButton from './menu-button/menu-button';

class MenuBar extends React.Component {
	render() {
		return (
			<div className="menu-bar container-fluid">
				<div className="row">
					<div className="button-container col-xs-4">
						<MenuButton icon="fa-list-alt" label="Transactions" active={true}/>
					</div>
					<div className="button-container col-xs-4">
						<MenuButton icon="fa-bar-chart" label="Reports"/>
					</div>
					<div className="button-container col-xs-4">
						<MenuButton icon="fa-credit-card" label="Pay"/>
					</div>
				</div>
			</div>
		)
	}
}

export default MenuBar;