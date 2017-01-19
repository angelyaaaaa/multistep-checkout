import React from 'react';
// import Formsy from 'formsy-react';
import StateLight from './light';
import './page.css';


export default class Register5 extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			// dateCont: dateContJson[0]
		};
		this.backStep = this.backStep.bind(this);
	}

	backStep(e) {
		e.preventDefault();
		this.props.goPreviousStep();
	}

	render() {
		return (
			<div className="page">
				<StateLight nowStep={0} nowPage={6}></StateLight>
				<div className="myCart">
					
				</div>  
			</div>
		);
	}
}
