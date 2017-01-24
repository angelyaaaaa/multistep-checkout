// tools
import React from 'react';
import { renderComponent, expect, shallowComponent, shallowExpect } from '../test-helper';
import { shallow } from 'enzyme';

// components
import App from '../../src/js/App';
import Register1 from '../../src/js/components/register_1';
import Register2 from '../../src/js/components/register_2';


describe('App' , () => {
	let component; //jq element
	let element;   //shallow element 
	let shallowComp;
	// global.window = {
	// 	location: {
	// 		hash: '#step1'
	// 	}
	// };

	beforeEach(()=> {
		global.window.location.hash = '#step1';
		component = renderComponent(App);
		shallowComp = shallowComponent(App);
		element = shallow(<App/>);
	});

	it('has register1', ()=> {
		// console.log('test has:', window.location.hash);
		// expect(element.find(Register1)).to.have.length(1); //另一種寫法
		expect(element.containsMatchingElement(<Register1/>)).to.equal(true);
	});

	it('shows register2 when url is ~/#step2', ()=> {
		global.window.location.hash = '#step2';
		element = shallow(<App/>); //rerun render
		expect(element.containsMatchingElement(<Register2/>)).to.equal(true);
	});

	it('final check shallow html code', ()=> {		
		const expectedElement = 
			<Register1 
				goNextStep={()=> {}}
				saveValues={()=> {}}
			/>;

		shallowExpect(shallowComp).toEqualJSX(expectedElement);
	});
	

});
