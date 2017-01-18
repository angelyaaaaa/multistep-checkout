import React from 'react';
import {FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import StateLight from './light';
import './register_5.css';
import './page.css';


export default class Register5 extends React.Component {
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
					<StateLight nowStep={5}></StateLight><br/>
					<div className="ownerInfo">
						<FormGroup className="choice">
							<ControlLabel>Name:</ControlLabel>
							<FormGroup className="form-inline">
								<FormControl type="text" placeholder="First Name"/>
								<FormControl type="text" placeholder="Last Name"/>
							</FormGroup>

							<ControlLabel>Applicant contact:</ControlLabel>
							<FormGroup className="form-inline">
								<FormControl type="text" placeholder="First Name"/>
								<FormControl type="text" placeholder="Last Name"/>
							</FormGroup>
							<FieldGroup
								type="text"
								label="Alterndate email:"
							/>							
						</FormGroup>
					</div>

					<div className="paymentInfo">
						<FormGroup className="choice">


							<ControlLabel>Name:</ControlLabel>


							<FormGroup>
						      	<Checkbox> Visa</Checkbox>
						      	<Checkbox> Master Card</Checkbox>
						      	<Checkbox> AE</Checkbox>
						      	<Checkbox> China UnionPay</Checkbox>						      
    						</FormGroup>

						</FormGroup>
					</div>

					<div className="pageCtrl">
						<button className="float-left" onClick={ this.backStep }>Back Step</button>
						<button className="float-right" onClick={ this.saveAndContinue }>Confirm</button><br/>
						<div className="float-clear"></div>
					</div>
				</div>  
			</div>
		);
	}
}

function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}