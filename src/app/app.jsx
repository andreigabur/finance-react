import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../libs/font-awesome-4.7.0/css/font-awesome.min.css';
import './app.css';
import AppHeader from './app-header/app-header';
import MenuBar from './menu-bar/menu-bar';

class App extends Component {
	render() {
		return (
			<div className="app">
				<AppHeader />
				<MenuBar />
			</div>
		);
	}
}

export default App;
