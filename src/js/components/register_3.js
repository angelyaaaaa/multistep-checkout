import React from 'react';
import {FormGroup, Radio} from 'react-bootstrap';
import StateLight from './light';
import './register_3.css';
import './page.css';


export default class Register3 extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			values: {}
		};
		this.handleRadioChange = this.handleRadioChange.bind(this);
		this.saveAndContinue = this.saveAndContinue.bind(this);
		this.backStep = this.backStep.bind(this);
	}

	handleRadioChange(e) {
		let newValues = this.state.values;
		const key = e.target.name;
		const value = e.target.value;

		newValues[key] = value;
		this.setState({values: newValues});
		// console.log(e.target);
	}


	saveAndContinue(e) {
		e.preventDefault();
		this.props.saveValues(this.state.values);
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
						
						<FormGroup className="choice" id="patentType" onChange={this.handleRadioChange}>
							<Radio name="purpose" value="myself"> For myself</Radio>
							<Radio name="purpose" value="enterprise"> For enterprise</Radio>
							<Radio name="purpose" value="others"> For others</Radio>
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
