import { renderComponent , expect } from '../test-helper';
import {Nav, NavItem } from 'react-bootstrap';
import App from '../../src/js/components/light';



describe('light' , () => {
	let component;

	beforeEach(()=> {
		component = renderComponent(App);
	});

	it('has state-light', ()=> {
		expect(component.find('.state-light')).to.exist;
	});
	
	it('has Nav', ()=> {
		expect(component.find('Nav')).to.exist;
	});
	// it('shows a comment list', ()=> {
	// 	expect(component.find('.comment-list')).to.exist;	
	// });
});
