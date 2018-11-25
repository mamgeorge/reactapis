// https://reacttraining.com/react-router/web/guides/quick-start
import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './resources/basics.css';
import Header from './home/Header';
import Index from './home/Index';
import Home from './home/Home';
//
import Logos from './apis/Logos';
import Users from './apis/Users';
import Hacks from './apis/Hacks';
import Photos from './apis/Photos';
import Paged from './apis/Paged';
import Apod from './apis/Apod';

// const Home = ( ) => <h1>Greetings</h1>;

class App extends Component {

	render( ) {
		return (
			<Router>
				<table width='100%'><tbody>
					<tr>
						<td colSpan = "2" >
							<Header /></td>
						</tr>
					<tr>
						<td width='20%' style = {{ verticalAlign: 'top' }} ><Index /></td>
						<td style = {{ verticalAlign: 'top' , height: "400px" }} ><Main /></td>
					</tr>
				</tbody></table>
			</Router>
		);
	}
}
export default App;

class Main extends Component {
	render() {
		return (
			<div style={{ backgroundColor: '#303030' }} >
				<Route path='/' exact component={Home} />
				<Route path='/name' component={Name} />
				<Route path='/date' component={ ( ) =>
					<h3 style = {{ color: "green" }}>{ new Date( ).toISOString( ) }</h3>} />

				<Route path='/users' component={Users} />
				<Route path='/photos' component={Photos} />
				<Route path='/hacks' component={Hacks} />
				<Route path='/apod' component={Apod} />

				<Route path='/paged' component={Paged} />
				<Route path='/word' component={Logos} />
			</div>
		);
	}
}

class Name extends Component { render() { return (<div><h3>Martin George</h3></div>); } }
