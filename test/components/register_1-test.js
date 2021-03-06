// tools
import React from 'react';
import { renderComponent, expect, shallowComponent, shallowExpect } from '../test-helper';
import { shallow } from 'enzyme';

// components
import {Table} from 'react-bootstrap';
import Register1 from '../../src/js/components/register_1';
import StateLight from '../../src/js/components/light';


describe('Register1', ()=> {
	let component; //jq element
	let element;   
	let shallowComp;

	beforeEach(()=> {
		shallowComp = shallowComponent(Register1);
		component = renderComponent(Register1);
		element = shallow(<Register1/>);
	});
	
	it('has state-light and its props is right', ()=> {
		expect(element.find('StateLight')).to.have.length(1);
		expect(element.find('StateLight').prop('nowStep')).to.equal(1);
	});
	
	it('has 3 select buttons',()=> {
		expect(element.find('.comment-list').children().find('select')).to.have.length(3);
	});

	it('has 3 tables and named feeTable', ()=> {
		expect(element.find('.comment-list .feeTables').children().find('Table.feeTable')).to.have.length(3);
	});
	
	it('final check shallow html code', ()=> {
		const props = {
			goNextSte: ()=> {},
			saveValues: ()=> {}
		};
		shallowComp = shallowComponent(Register1, props);
		const expectedElement = 
			<div className="page">
				<div className="comment-list">
					<StateLight nowStep={1} ></StateLight><br/>
					<div className="choices">
						<span className="choice">	
							<label>Government</label>
							<select id="government" onChange={()=> {}}>
								<option value="">-- Goverment --</option>
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="mercedes">Mercedes</option>
								<option value="audi">Audi</option>
							</select>
						</span>


						<span className="choice">
							<label>My Currency</label>
							<select id="myCurrency" onChange={()=> {}}>
								<option value="">-- My Currency--</option>
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="mercedes">Mercedes</option>
								<option value="audi">Audi</option>
							</select>						
						</span>

						<span className="choice">
							<label>Patent Type</label>
							<select id="patentType" onChange={()=> {}}>
								<option value="">-- Patent Type --</option>
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
						<button className="float-right" id="nextStep" onClick={ ()=> {} }>Continue</button>
						<div className="float-clear"></div>
					</div>
				</div>
			</div>;

		shallowExpect(shallowComp).toEqualJSX(expectedElement);
	});
});