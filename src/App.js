// https://reacttraining.com/react-router/web/guides/quick-start
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './resources/basics.css';
import Header from './home/Header';
import Index from './home/Index';
import Home from './home/Home';
//
import Reflect from './apis/Reflect';
import Controls from './raspi/Controls';
import Users from './apis/Users';
import Photos from './apis/Photos';
import Hacks from './apis/Hacks';
import Apod from './apis/Apod';
import Paged from './apis/Paged';
import Logos from './apis/Logos';

// const Home = ( ) => <h1>Greetings</h1>;

class App extends Component {

	render() {
		return (
			<Router>
			<body><div className="all">
				<div className = "header">
					<Header />
					</div>
				<div className="content">
					<div className="index" >
						<Index />
						</div>
					<div className="main" >
						<Main />
						</div>
				</div>
			</div>
			</body>
			</Router>
		);
	}
}
export default App;

class Main extends Component {
	render() {
		return (
			<div>
				<Route path='/' exact component={ Home } />
				<Route path='/author' component={ () =>
					<div className="author"><h3>Martin George</h3>
						<br /><h5 style={ { color: "green" } }>{ new Date().toISOString() }</h5>
					</div> } />
				<Route path='/reflect' component={ Reflect } />
				<Route path='/controls' component={ Controls } />
				<Route path='/users' component={ Users } />
				<Route path='/photos' component={ Photos } />
				<Route path='/hacks' component={ Hacks } />
				<Route path='/apod' component={ Apod } />

				<Route path='/paged' component={ Paged } />
				<Route path='/word' component={ Logos } />
			</div>
		);
	}
}
