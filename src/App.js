import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './libs/font-awesome-4.7.0/css/font-awesome.min.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<img src="and.jpeg" className="img-circle" alt="logoAndrei" />
					<img src={logo} className="app-logo" alt="logo" />
					<img src="ben.jpeg" className="img-circle" alt="logoBenedetto" />
					<h1 className="app-title">Manage your <span>Finance</span> with <span>React</span></h1>
				</header>
			</div>
		);
	}
}

export default App;
