import React, { Component } from 'react';
import reactPng from '../images/react.png';
import './controls.css';

class Controls extends Component {

	changeWords(){}

	render() {
		return (
			<div>
				<h3 className = "basics" onClick = { ( ( ) => { window.location.href='/Controls.html';} ) } >Controls</h3>
				<div className = "basicsGroup">
				<br />modular: cam vox read trans light fire
				<br />articulate: (grasp release) push pull rotate extend bend twist

				<br />
				<br /><img style = {{ width: "100px" }} src = {reactPng} alt = "reactPng" />
				<br /><input type="text" onChange = { this.changeWords } value="" />
					<input type="submit" value="0" />
					<input type="submit" value="1" />

				<br /><table><tbody>
					<tr><td><button className="grn" >1</button><button className="grn" >2</button><button className="grn" >3</button></td></tr>
					<tr><td><button className="grn" >4</button><button className="grn" >5</button><button className="grn" >6</button></td></tr>
					<tr><td><button className="grn" >7</button><button className="grn" >8</button><button className="grn" >9</button></td></tr>
					</tbody></table>
			
				<br />
				<br />rotational: (up down) twistl twistr bendd bendu archl archr
				<br />traversals: (go stop) front back left right fast slow
				
				<br /><table><tbody>
					<tr><td><button className="gry" >1</button><button className="gry" >2</button><button className="gry" >3</button></td></tr>
					<tr><td><button className="gry" >4</button><button className="gry" >5</button><button className="gry" >6</button></td></tr>
					<tr><td><button className="gry" >7</button><button className="gry" >8</button><button className="gry" >9</button></td></tr>
					</tbody></table>

				<br /><table><tbody>
					<tr><td><button>1</button><button>2</button><button>3</button></td></tr>
					<tr><td><button>4</button><button>5</button><button>6</button></td></tr>
					<tr><td><button>7</button><button>8</button><button>9</button></td></tr>
					</tbody></table>
				</div>
			</div>
		);
	}
}
export default Controls;
