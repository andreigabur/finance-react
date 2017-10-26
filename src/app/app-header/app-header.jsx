import React, {Component} from 'react';
import logo from '../../logo.svg';
import './app-header.css';

class AppHeader extends Component {
	render() {
		return (
			<header className="app-header">
				<img src="and.jpeg" className="img-circle" alt="logoAndrei" />
				<img src={logo} className="app-logo" alt="logo" />
				<img src="ben.jpeg" className="img-circle" alt="logoBenedetto" />
				<h1 className="app-title">Manage your <span>Finance</span> with <span>React</span></h1>
			</header>
		)
	}
}

export default AppHeader;