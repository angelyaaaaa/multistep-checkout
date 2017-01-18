import React from 'react';
// import Formsy from 'formsy-react';
import StateLight from './light';
import {Table} from 'react-bootstrap';
import './register_1.css';
import './page.css';


export default class Register1 extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			// dateCont: dateContJson[0]
		};
		this.saveAndContinue = this.saveAndContinue.bind(this);
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

	render() {
		return (
			<div className="page">
				<div className="comment-list">
					<StateLight nowStep={1}></StateLight><br/>
					<div className="choices">
						<span className="choice">	
							<label>Goverment</label>
							<select>
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="mercedes">Mercedes</option>
								<option value="audi">Audi</option>
							</select>
						</span>


						<span className="choice">
							<label>MyCurrency</label>
							<select>
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="mercedes">Mercedes</option>
								<option value="audi">Audi</option>
							</select>						
						</span>

						<span className="choice">
							<label>Patent Type</label>
							<select>
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="mercedes">Mercedes</option>
								<option value="audi">Audi</option>
							</select> 						
						</span>
						
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
						<button className="float-right" onClick={ this.saveAndContinue }>Save and Continue</button>

						<div className="float-clear"></div>
					</div>
				</div>
			</div>
		);
	}
}
