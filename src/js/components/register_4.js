import React from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import StateLight from './light';
import './register_4.css';
import './page.css';


export default class Register4 extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			values: {
				certificate: './freepik.jpg',
				frontPage: './freepik.jpg'
			},
			files: [null, null],
		};
		this.saveAndContinue = this.saveAndContinue.bind(this);
		this.backStep = this.backStep.bind(this);
		this.backToFirst = this.backToFirst.bind(this);
		this.onDrop1 = this.onDrop1.bind(this);
		this.onDrop2 = this.onDrop2.bind(this);
	}

	onDrop1(file) {
		let newFile = this.state.files;
		newFile[0] = file[0];
		this.setState({
			files: newFile
		});

		// -----------------------------------------
		let newValues = this.state.values;
		newValues['certificate'] = file[0].preview;
		this.setState({values: newValues});

	}

	onDrop2(file) {
		let newFile = this.state.files;
		newFile[1] = file[0];
		this.setState({
			files: newFile
		});


		// -----------------------------------------
		let newValues = this.state.values;
		newValues['frontPage'] = file[0].preview;
		this.setState({values: newValues});
		
	}

	onOpenClick() {
		this.refs.dropzone.open();
	}

	backToFirst(e) {
		e.preventDefault();
		this.props.collectValues();
		this.props.goFirst();
	}

	saveAndContinue(e) {
		e.preventDefault();
		this.props.saveValues(this.state.values);
		this.props.goNextStep();
		this.props.collectValues();
	}

	backStep(e) {
		e.preventDefault();
		this.props.goPreviousStep();
	}

	render() {
		return (
			<div className="page">
				<div className="comment-list">
					<StateLight nowStep={4}></StateLight><br/>
					
					<div className="patentCertif">
						<Dropzone id="certificate" ref="dropzone" onDrop={this.onDrop1} className="dropZone" activeClassName="active dropZone">
							{this.state.files[0]
								? <img src={this.state.files[0].preview} className="preview"/>
								: <img src='./download.png' className="downloadIcon"/>
							}
						</Dropzone>

						<div id="dropSep">&</div>

						<Dropzone id="frontPage" ref="dropzone" onDrop={this.onDrop2} className="dropZone" activeClassName="active dropZone">
							{this.state.files[1]
								? <img src={this.state.files[1].preview} className="preview"/>
								: <img src='./download.png' className="downloadIcon"/>
							}
						</Dropzone>
					</div>
					
					<div className="patentInfo">
						<label>Patent Information</label>
						
						<FormGroup className="choice">
							<ControlLabel>Applicant:</ControlLabel>
							<FormGroup className="form-inline">
								<FormControl type="text" placeholder="First Name"/>
								<FormControl type="text" placeholder="Last Name"/>
							</FormGroup>
							<FieldGroup
								type="text"
								label="Application Number:"
							/>
							<FieldGroup
								type="text"
								label="Certification Number:"
							/>

						</FormGroup>
					</div>
					<div className="pageCtrl">
						<button className="float-left" onClick={ this.backStep }>Back Step</button>
						<div className="float-right">
							<button onClick={ this.saveAndContinue }>Pay</button><br/>
							<button onClick={ this.backToFirst }>Add to my Cart</button>
						</div>
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

export {FieldGroup};