import React from 'react';
import './menu-button.css';

class MenuButton extends React.Component {

	render() {
		let componentClasses = ["menu-button"];
		if (this.props.active)
			componentClasses.push("active");

		let iconClasses = ['fa'];
		if (this.props.icon)
			iconClasses.push(this.props.icon);
			
		return (
			<div className={componentClasses.join(' ')}>
				<a>
					<i className={iconClasses.join(' ')} aria-hidden="true"></i>
					{this.props.label}
				</a>
			</div>
		)
	}
}

export default MenuButton;