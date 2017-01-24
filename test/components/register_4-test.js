// tools
import React from 'react';
import { renderComponent, expect, shallowComponent, shallowExpect } from '../test-helper';
import { shallow } from 'enzyme';

// components
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Register4, {FieldGroup} from '../../src/js/components/register_4';
import Dropzone from 'react-dropzone';
import StateLight from '../../src/js/components/light';


describe('Register4', ()=> {
	let component; //jq element
	let element;   
	let shallowComp;

	beforeEach(()=> {
		shallowComp = shallowComponent(Register4);
		component = renderComponent(Register4);
		element = shallow(<Register4/>);
	});
	
	it('has state-light and its props is right', ()=> {
		expect(element.find('StateLight')).to.have.length(1);
		expect(element.find('StateLight').prop('nowStep')).to.equal(4);
	});

	it('has 2 Dropzone',()=> {
		expect(element.find('Dropzone')).to.have.length(2);
	});

	// 如何做 Dropzone 的拖曳 spec ?
		
	it('final check shallow html code', ()=> {
		const props = {
			goNextSte: ()=> {},
			goPreviousStep: ()=> {},
			goFirst: ()=> {},
			saveValues: ()=> {},
			collectValues: ()=> {}
		};

		const state = {
			files: [null, null]
		};
		shallowComp = shallowComponent(Register4, props);
		// this.state = state;
		const expectedElement = 
			<div className="page">
				<div className="comment-list">
					<StateLight nowStep={4}></StateLight><br/>
					
					<div className="patentCertif">
						<Dropzone id="certificate" ref="dropzone" onDrop={()=> {}} className="dropZone" activeClassName="active dropZone">
							{state.files[0]
								? <img src={state.files[0].preview} className="preview"/>
								: <img src='./download.png' className="downloadIcon"/>
							}
						</Dropzone>

						<div id="dropSep">&</div>

						<Dropzone id="frontPage" ref="dropzone" onDrop={()=> {}} className="dropZone" activeClassName="active dropZone">
							{state.files[1]
								? <img src={state.files[1].preview} className="preview"/>
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
						<button className="float-left" onClick={ ()=> {} }>Back Step</button>
						<div className="float-right">
							<button onClick={ ()=> {} }>Pay</button><br/>
							<button onClick={ ()=> {} }>Add to my Cart</button>
						</div>
						<div className="float-clear"></div>
					</div>
				</div>
			</div>;

		shallowExpect(shallowComp).toEqualJSX(expectedElement);
	});
});