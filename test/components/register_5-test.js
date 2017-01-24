// tools
import React from 'react';
import { renderComponent, expect, shallowComponent, shallowExpect } from '../test-helper';
import { shallow } from 'enzyme';

// components
import {Table, FormGroup, Radio} from 'react-bootstrap';
import Register2 from '../../src/js/components/register_2';
import StateLight from '../../src/js/components/light';


describe('Register2', ()=> {
	let component; //jq element
	let element;   
	let shallowComp;

	beforeEach(()=> {
		shallowComp = shallowComponent(Register2);
		component = renderComponent(Register2);
		element = shallow(<Register2/>);
	});
	
	it('has state-light and its props is right', ()=> {
		expect(element.find('StateLight')).to.have.length(1);
		expect(element.find('StateLight').prop('nowStep')).to.equal(2);
	});

	it('has 1 radio button and 3 choices',()=> {
		expect(element.find('.comment-list FormGroup').children().find('Radio')).to.have.length(3);
	});

	it('has 1 select button', ()=> {
		expect(element.find('.comment-list').children().find('select')).to.have.length(1);
	});

	it('has 3 tables and named feeTable', ()=> {
		expect(element.find('.comment-list .feeTables').children().find('Table.feeTable')).to.have.length(3);
	});
	
	it('final check shallow html code', ()=> {
		const props = {
			goNextSte: ()=> {},
			goPreviousStep: ()=> {},
			saveValues: ()=> {}
		};
		shallowComp = shallowComponent(Register2, props);
		const expectedElement = 
			<div className="page">
				<div className="comment-list">
					<StateLight nowStep={2}></StateLight><br/>

					<div className="patentType">
						<label>Order Condition</label><br/>

						<FormGroup className="choice" id="patentType" onChange={()=> {}}>
							<Radio name="patentType" value="normal"> Normal</Radio>
							<Radio name="patentType" value="urgent"> Urgent ( deadline within 7 days)</Radio>
							<Radio name="patentType" value="expired"> Expired</Radio>
						</FormGroup>
					</div>

					<div className="patentYear">
						<label>Patent Year</label>
						<select id="patentYear" onChange={()=> {}}>
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
						<button className="float-left" onClick={ ()=> {} }>Back Step</button>
						<button className="float-right" onClick={ ()=> {} }>Save and Continue</button>
						<div className="float-clear"></div>
					</div>	  
				</div>
			</div>;

		shallowExpect(shallowComp).toEqualJSX(expectedElement);
	});
});