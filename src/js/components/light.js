import React from 'react';

export default class StateLight extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			light: [false, false, false, false, false]
			// dateCont: dateContJson[0]
		};
		// this.jumpToAnother = this.jumpToAnother.bind(this);
	}

	componentWillMount() {
		console.log(this.props.nowStep);
		for(let i = 0; i < this.props.nowStep; ++i) {
			this.state.light[i] = true;
		}
	}

	render() {
		let light = this.state.light;
		
		const divStyle = (order)=> {
			return {
				height: '100px',
				width: '100px',
			  	color: 'blue',
			  	margin: '2px',
			  	float: 'left',
			  	cursor: 'pointer',
			  	background: light[order] ? 'yellow' : 'grey'
			}
		}

		const stateStyle = {
			height: '100px',
			width: '100%'
		}

		const clear = {
			clear: 'both'
		}

		const {goJumpStep} = this.props;
		console.log('--', goJumpStep);
		return (
			<div className="state-light" style={stateStyle}>
				<div style={divStyle(0)} onClick={()=> {goJumpStep && goJumpStep(1)}}></div>
				<div style={divStyle(1)} onClick={()=> {goJumpStep && goJumpStep(2)}}></div>
				<div style={divStyle(2)} onClick={()=> {goJumpStep && goJumpStep(3)}}></div>
				<div style={divStyle(3)} onClick={()=> {goJumpStep && goJumpStep(4)}}></div>
				<div style={divStyle(4)}></div>
				<div style={clear}/>
			</div>
		);
	}
}
