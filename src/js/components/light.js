import React from 'react';
import {Nav, NavItem } from 'react-bootstrap';
import '../commonUsed.css';
import './light.css';

class StateLight extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			light: [false, false, false, false, false],
			isLightHide: ''
				// dateCont: dateContJson[0]
		};
		// this.jumpToAnother = this.jumpToAnother.bind(this);
	}

	componentWillMount() {
		const nowStep = this.props.nowStep;
		if(nowStep != 0) {
			this.state.light[nowStep-1] = true;
		} else {
			this.setState({isLightHide: 'hide'});
		}
	}

	render() {
		let light = this.state.light;
		const divStyle = (order) => {
			// console.log(`light[${order}]: ${light[order]}`);
			return {
				background: light[order] ? 'yellow' : 'lightgrey'
			};
		};

				
		// const { goJumpStep } = this.props;
		// console.log('--', goJumpStep);
		return (
			<div>				
				<Nav bsStyle="pills" justified activeKey={this.props.nowPage}>
					<NavItem eventKey={1} href="#">Home</NavItem>
					<NavItem eventKey={2} href="#">Patent</NavItem>
					<NavItem eventKey={3} href="#">Trademark</NavItem>
					<NavItem eventKey={4} href="#">Copyright</NavItem>
					<NavItem eventKey={5} href="#">Support</NavItem>
					<NavItem eventKey={6} href="#">My Account</NavItem>
				</Nav>


				<div className={'state-light ' + this.state.isLightHide}>
					{[1, 2, 3, 4, 5, 6].map((data, idx)=> {										
						return(
							<div className="light" style={divStyle(idx)}>
								<div className="content">step {data}</div>
							</div>
						);
					})}					
				</div>
			</div>
		);
	}
}

StateLight.defaultProps = {
  nowPage: 2,
  nowStep: 1
};

export default StateLight;