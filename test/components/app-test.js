// tools
import React from 'react';
import { renderComponent , expect } from '../test-helper';
import { shallow } from 'enzyme';

// components
import App from '../../src/js/App';
import Register1 from '../../src/js/components/register_1';
import Register2 from '../../src/js/components/register_2';


describe('App' , () => {
	let component; //jq element
	let element;   //shallow element 
	global.window = {
		location: {
			hash: '#step1'
		}
	};

	beforeEach(()=> {
		component = renderComponent(App);
		element = shallow(<App/>);
	});

	// 這個測試個人覺得不符合分離的原則
	it('has register1', ()=> {
		// console.log('test has:', window.location.hash);
		// expect(element.find(Register1)).to.have.length(1); //另一種寫法
		expect(element.containsMatchingElement(<Register1/>)).to.equal(true);
	});

	it('shows register2 when url is .../#step2', ()=> {
		global.window.location.hash = '#step2';
		element = shallow(<App/>); //rerun render
		expect(element.containsMatchingElement(<Register2/>)).to.equal(true);
	});
	
});
