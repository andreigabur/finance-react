import React, { Component } from 'react';
import AppHeader from './app-header/app-header';
import MenuBar from './menu-bar/menu-bar';
import Content from './content/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../libs/font-awesome-4.7.0/css/font-awesome.min.css';
import './app.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<AppHeader />
				<MenuBar />
				<Content />
			</div>
		);
	}
}

export default App;
