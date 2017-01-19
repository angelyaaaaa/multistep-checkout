import React from 'react';
// import Formsy from 'formsy-react';
import {Table, FormGroup, Radio} from 'react-bootstrap';
import StateLight from './light';
import './register_2.css';
import './page.css';



export default class Register2 extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			values: {}
		};
		this.handleRadioChange = this.handleRadioChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
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

	handleSelectChange(e) {
		let newValues = this.state.values;
		const key = e.target.id;
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
					<StateLight nowStep={2}></StateLight><br/>

					<div className="patentType">
						<label>Order Condition</label><br/>

						<FormGroup className="choice" id="patentType" onChange={this.handleRadioChange}>
							<Radio name="patentType" value="normal"> Normal</Radio>
							<Radio name="patentType" value="urgent"> Urgent ( deadline within 7 days)</Radio>
							<Radio name="patentType" value="expired"> Expired</Radio>
						</FormGroup>
					</div>

					<div className="patentYear">
						<label>Patent Year</label>
						<select id="patentYear" onChange={this.handleSelectChange}>
							<option value="">-- Patent Year --</option>
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</select>
					</div>
					
					<div className="feeTables">
						<Table striped bordered condensed hover className="feeTable">
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan="2">Larry the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</Table>
						<Table striped bordered condensed hover className="feeTable">
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan="2">Larry the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</Table>
						<Table striped bordered condensed hover className="feeTable">
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan="2">Larry the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</Table>
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
