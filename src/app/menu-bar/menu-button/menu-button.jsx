import React from 'react';
import PropTypes from 'prop-types';
import './menu-button.css';

class MenuButton extends React.Component {

	render() {
		let componentClasses = ["menu-button"];
		if (this.props.active)
			componentClasses.push("active");

		let iconClasses = ['fa'];
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

MenuButton.propTypes = {
	icon: PropTypes.string,
	label: PropTypes.string,
	active: PropTypes.bool,
};

export default MenuButton;