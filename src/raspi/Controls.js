import React, { Component } from 'react';
import reactPng from '../images/react.png';
import './controls.css';

class Controls extends Component {

	render() {
		return (
			<body><h3 onClick = { ( ( ) => { window.location.href='/Controls.html';} ) } >controls</h3><br />
				<table>
					<tr>
						<th>modular:
							cam vox read trans light fire</th>

						<th>articulate: (grasp release)
							push pull rotate extend bend twist</th>
					</tr>

					<tr><td>
						<img style = {{ width: "100px" }} src = {reactPng} alt = "reactPng" />
						<input type="text" value="" />
						<input type="submit" value="0" />
						<input type="submit" value="1" />
					</td>

						<td><table>
							<tr><td><button class="grn" >1</button><button class="grn" >2</button><button class="grn" >3</button></td></tr>
							<tr><td><button class="grn" >4</button><button class="grn" >5</button><button class="grn" >6</button></td></tr>
							<tr><td><button class="grn" >7</button><button class="grn" >8</button><button class="grn" >9</button></td></tr>
						</table></td>
					</tr>

					<tr>
						<th>rotational: (up down)
							twistl twistr bendd bendu archl archr</th>

						<th>traversals: (go stop)
							front back left right fast slow</th>
					</tr>

					<tr><td><table>
						<tr><td><button class="gry" >1</button><button class="gry" >2</button><button class="gry" >3</button></td></tr>
						<tr><td><button class="gry" >4</button><button class="gry" >5</button><button class="gry" >6</button></td></tr>
						<tr><td><button class="gry" >7</button><button class="gry" >8</button><button class="gry" >9</button></td></tr>
					</table></td>

						<td><table>
							<tr><td><button>1</button><button>2</button><button>3</button></td></tr>
							<tr><td><button>4</button><button>5</button><button>6</button></td></tr>
							<tr><td><button>7</button><button>8</button><button>9</button></td></tr>
						</table></td>
					</tr>
				</table>
			</body>
		);
	}
}
export default Controls;
