// tools
import React from 'react';
import { renderComponent , expect } from '../test-helper';
import { shallow } from 'enzyme';

// components
import {Nav, NavItem } from 'react-bootstrap';
import StateLight from '../../src/js/components/light';



describe('light' , () => {
	let component;
	let element;

	beforeEach(()=> {
		component = renderComponent(StateLight);
		element = shallow(<StateLight/>);
	});

	it('has Nav', ()=> {
		expect(element.find(Nav)).to.have.length(1);
	});

	it('Nav has 6 NavItem', ()=> {
		expect(element.find(Nav).children().find(NavItem)).to.have.length(6);
	});

	
	it('has state-light', ()=> {
		expect(element.find('.state-light')).to.have.length(1);
	});

	it('state-light has 6 light', ()=> {
		expect(element.find('.state-light').children().find('.light')).to.have.length(6);
	});
	// it('shows a comment list', ()=> {
	// 	expect(component.find('.comment-list')).to.exist;	
	// });
});
