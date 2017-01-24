// tools
import React from 'react';
import { renderComponent, expect, shallowComponent, shallowExpect } from '../test-helper';
import { shallow } from 'enzyme';

// components
import {Nav, NavItem } from 'react-bootstrap';
import StateLight from '../../src/js/components/light';



describe('StateLight' , () => {
	let component; //jq element
	let element;   
	let shallowComp;

	beforeEach(()=> {
		const props = {nowStep: 1};
		shallowComp = shallowComponent(StateLight, props);
		component = renderComponent(StateLight);
		element = shallow(<StateLight/>);
	});

	it('has Nav', ()=> {
		expect(element.find(Nav)).to.have.length(1);
	});

	it('Nav has 6 NavItem', ()=> {
		expect(element.find('Nav').children().find('NavItem')).to.have.length(6);
	});

	
	it('has state-light', ()=> {
		expect(element.find('.state-light')).to.have.length(1);
	});

	it('state-light has 6 light', ()=> {
		expect(element.find('.state-light').children().find('.light')).to.have.length(6);
	});
	
	it('state-light hide in myCart', ()=> {
		element = shallow(<StateLight nowStep={0}/>);
		expect(element.find('.state-light').hasClass('hide')).to.equal(true);
	});

	it('final check shallow html code', ()=> {
		const light = [true, false, false, false, false];
		const divStyle = (order) => {
			return {
				background: light[order] ? 'yellow' : 'lightgrey'
			};
		};
		const expectedElement = 
			<div>				
				<Nav bsStyle="pills" justified activeKey={2}>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">Patent</NavItem>
                    <NavItem eventKey={3} href="#">Trademark</NavItem>
                    <NavItem eventKey={4} href="#">Copyright</NavItem>
                    <NavItem eventKey={5} href="#">Support</NavItem>
                    <NavItem eventKey={6} href="#">My Account</NavItem>
                </Nav>


				<div className={'state-light '}>
					{[1, 2, 3, 4, 5, 6].map((data, idx)=> {										
						return(
							<div className="light" style={divStyle(idx)}>
								<div className="content">step {data}</div>
							</div>
						);
					})}		
					
				</div>
			</div>;

		shallowExpect(shallowComp).toEqualJSX(expectedElement);
	});
});
