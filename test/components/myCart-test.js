// tools
import React from 'react';
import { renderComponent, expect, shallowComponent, shallowExpect } from '../test-helper';
import { shallow } from 'enzyme';

// components
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import {Table} from 'react-bootstrap';
import MyCart from '../../src/js/components/myCart';
import StateLight from '../../src/js/components/light';


describe('MyCart', ()=> {
	let component; //jq element
	let element;   
	let shallowComp;

	beforeEach(()=> {
		shallowComp = shallowComponent(MyCart);
		component = renderComponent(MyCart);
		element = shallow(<MyCart/>);
	});
	
	it('has state-light and its props is right', ()=> {
		expect(element.find('StateLight')).to.have.length(1);
		expect(element.find('StateLight').prop('nowStep')).to.equal(0);
		expect(element.find('StateLight').prop('nowPage')).to.equal(6);
	});
		
	it('final check shallow html code', ()=> {
		const props = {
			goNextSte: ()=> {},
			values: []
		};
		const state = {price: 0};

		shallowComp = shallowComponent(MyCart, props, state);
		const expectedElement = 
			<div className="page">
				<StateLight nowStep={0} nowPage={6}></StateLight>
				<h1>My Cart</h1>
				<Tabs selectedIndex={0} className="myCart">
					<TabList>
						<Tab>Shoppiing Details</Tab>
						<Tab>Nexttime List</Tab>
					</TabList>
					<TabPanel>
						<div className="cart">
							<div className="ctrlBtn">
								<button className="float-right">Clean the Cart</button>
								<div className="float-clear"></div>
							</div>
							<Table responsive className="list">
								<thead>
									<tr>
										<th>Patent Certificate</th>
										<th>Government</th>
										<th>Patent Type</th>
										<th>Years</th>
										<th>Order Type</th>
										<th>Total</th>
										<th>pay</th>
									</tr>
								</thead>
								<tbody>
									{props.values.map((data, idx)=> {
										
										return(
											<tr id={'detail' + idx}>
												<td><img src={data.certificate} className="pretentPic"/></td>
												<td>{data.government}</td>
												<td>{data.patentType}</td>
												<td>{data.patentYear}</td>
												<td>{data.purpose}</td>
												<td>2000</td>
												<td>
													<button className="">Delete</button>
													<button className="">Move to Next Time</button>
												</td>
											</tr>
										);
									})}

									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>{state.price}</td>
										<td></td>
									</tr>						    	  	
								</tbody>
							</Table>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="nextList">
							<div className="ctrlBtn">
								<button className="float-right">Clean the Cart</button>
								<button className="float-right">ALl Move to Shopping List</button>
								<div className="float-clear"></div>
							</div>
							<Table responsive className="list">
								<thead>
									<tr>
										<th>Patent Certificate</th>
										<th>Government</th>
										<th>Patent Type</th>
										<th>Years</th>
										<th>Order Type</th>
										<th>Total</th>
										<th>pay</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><img src="./joker.png" className="pretentPic"/></td>
										<td>United States</td>
										<td>Forever</td>
										<td>201101~201506</td>
										<td>Normal</td>
										<td>$2000</td>
										<td>
											<button className="">Delete</button>
											<button className="">Next Time Pay</button>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</TabPanel>
				</Tabs>

				<div className="pageCtrl">
					<button className="float-right" onClick={ ()=> {} }>Checkout</button>
					<div className="float-clear"></div>
				</div>    
			</div>;

		shallowExpect(shallowComp).toEqualJSX(expectedElement);
	});
});