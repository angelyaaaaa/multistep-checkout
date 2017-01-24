// tools
import React from 'react';
import { renderComponent, expect, shallowComponent, shallowExpect } from '../test-helper';
import { shallow } from 'enzyme';

// components
import {FormGroup, Radio} from 'react-bootstrap';
import Register3 from '../../src/js/components/register_3';
import StateLight from '../../src/js/components/light';


describe('Register3', ()=> {
	let component; //jq element
	let element;   
	let shallowComp;

	beforeEach(()=> {
		shallowComp = shallowComponent(Register3);
		component = renderComponent(Register3);
		element = shallow(<Register3/>);
	});
	
	it('has state-light and its props is right', ()=> {
		expect(element.find('StateLight')).to.have.length(1);
		expect(element.find('StateLight').prop('nowStep')).to.equal(3);
	});

	it('has 1 radio button and 3 choices',()=> {
		expect(element.find('.comment-list FormGroup').children().find('Radio')).to.have.length(3);
	});
	
	it('final check shallow html code', ()=> {
		const props = {
			goNextSte: ()=> {},
			goPreviousStep: ()=> {},
			saveValues: ()=> {}
		};
		shallowComp = shallowComponent(Register3, props);
		const expectedElement = 
			<div className="page">
				<div className="comment-list">
					<StateLight nowStep={3}></StateLight><br/>

					<div className="purpose">
						<label>Purpose</label>
						
						<FormGroup className="choice" id="patentType" onChange={()=> {}}>
							<Radio name="purpose" value="myself"> For myself</Radio>
							<Radio name="purpose" value="enterprise"> For enterprise</Radio>
							<Radio name="purpose" value="others"> For others</Radio>
						</FormGroup>
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