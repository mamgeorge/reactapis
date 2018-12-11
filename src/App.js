// https://reacttraining.com/react-router/web/guides/quick-start
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './resources/basics.css';
import Header from './home/Header';
import Index from './home/Index';
import Home from './home/Home';
//
import Reflect from './apis/Reflect';
import Users from './apis/Users';
import Photos from './apis/Photos';
import Paged from './apis/Paged';
import Hacks from './apis/Hacks';
import Apods from './apis/Apods';
import Taxons from './apis/Taxons';
import Archs from './apis/Archs';

import Controls from './raspi/Controls';
import Logos from './apis/Logos';

// const Home = ( ) => <h1>Greetings</h1>;

class App extends Component {

	render() {
		return (
			<Router>
			<div className="all">
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
					<div className="author"><h3>Author: Martin George</h3>
						<br />dateTime: <h5 style={ { color: "green" } }>{ new Date().toISOString() }</h5>
					</div> } />
				<Route path='/reflect' component={ Reflect } />

				<Route path='/users' component={ Users } />
				<Route path='/photos' component={ Photos } />
				<Route path='/paged' component={ Paged } />
				<Route path='/hacks' component={ Hacks } />
				<Route path='/apods' component={ Apods } />

				<Route path='/archs' component={ Archs } />
				<Route path='/taxons' component={ Taxons } />
				<Route path='/controls' component={ Controls } />
				<Route path='/logos' component={ Logos } />
			</div>
		);
	}
}
