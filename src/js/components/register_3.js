import React from 'react';
import {FormGroup, Radio} from 'react-bootstrap';
import StateLight from './light';
import './register_3.css';
import './page.css';


export default class Register3 extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			// dateCont: dateContJson[0]
		};
		this.saveAndContinue = this.saveAndContinue.bind(this);
		this.backStep = this.backStep.bind(this);
	}


	saveAndContinue(e) {
		e.preventDefault();

		// Get values via this.refs
		// var data = {
		//   name     : this.refs.name.getDOMNode().value,
		//   password : this.refs.password.getDOMNode().value,
		//   email    : this.refs.email.getDOMNode().value,
		// }

		// this.props.saveValues(data)
		this.props.goNextStep();
	}

	backStep(e) {
		e.preventDefault();
		this.props.goPreviousStep();
	}

	render() {
		return (
			<div className="page">
				<div className="comment-list">
					<StateLight nowStep={3} goJumpStep={this.props.goJumpStep}></StateLight><br/>

					<div className="purpose">
						<label>Purpose</label>
						
						<FormGroup className="choice">
							<Radio name="purpose"> For myself</Radio>
							<Radio name="purpose"> For enterprise</Radio>
							<Radio name="purpose"> For others</Radio>
						</FormGroup>
					</div>
					
					<div className="pageCtrl">
						<button className="float-left" onClick={ this.backStep }>Back Step</button>
						<button className="float-right" onClick={ this.saveAndContinue }>Save and Continue</button>
						<div className="float-clear"></div>
					</div>					
				</div>
			</div>
		);
	}
}
