import React from 'react';
import {Table, FormGroup, Radio, Button} from 'react-bootstrap';
import StateLight from './light';
import './page.css';
import './checkout.css';


export default class Checkout extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			// dateCont: dateContJson[0]
		};
		this.backStep = this.backStep.bind(this);	
	}

	backStep(e) {
		e.preventDefault();
		this.props.goPreviousStep();
	}

	render() {
		return (
			<div className="page">
				<StateLight nowStep={0} nowPage={6}></StateLight>
				<h1>Checkout Detail</h1>
				<Table responsive className="checkoutDetail">
			    	<thead>
			    	  	<tr>
			    	    	<th>Patent Certificate</th>
			    	    	<th>Government</th>
			    	    	<th>Patent Type</th>
			    	    	<th>Years</th>
			    	    	<th>Order Type</th>
			    	    	<th>Total</th>
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
			    	  	</tr>
		      			<tr>
			    	    	<td><img src="./joker.png" className="pretentPic"/></td>
			    	    	<td>United States</td>
			    	    	<td>Forever</td>
			    	    	<td>201101~201506</td>
			    	    	<td>Normal</td>
			    	    	<td>$2000</td>
			    	  	</tr>	
			    	  	<tr>
			    	    	<td colSpan="6">
			    	    		共有 1 件商品，消費總金額 NT $ 2000 元
							</td>
			    	  	</tr>						    	  	
			    	</tbody>
			  	</Table>

			  	<h1>Payment Type</h1>
			  	<Table responsive className="paymentType">
			    	<thead>
			    	  	<tr>
			    	    	<th>Patent Type</th>
			    	    	<th>Notification</th>
			    	  	</tr>
			    	</thead>
			    	<tbody>
			    	  	<tr>
			    	    	<td><Radio name="paymentType"> 信用卡（智付通）</Radio></td>
			    	    	<td>
			    	    		支援 : VISA / MasterCard / JCB<br/><br/>
								輸入信用卡卡號、有效年月、及背面末三碼即可完成付款。
			    	    	</td>
			    	  	</tr>
			    	  	<tr>
			    	    	<td><Radio name="paymentType"> Paypal（限非台灣註冊之帳戶）</Radio></td>
			    	    	<td>
			    	    		登入PayPal帳戶支付此筆款項。<br/>
								使用台灣註冊的 PayPal 帳戶，將無法進行支付交易款項。（Paypal的說明）<br/><br/>
								提醒您：瑞卓不會儲存您的PayPal帳戶或是信用卡資訊，請安心使用。
			    	    	</td>
			    	  	</tr>
			    	  	<tr>
			    	    	<td><Radio name="paymentType"> WebATM</Radio></td>
			    	    	<td>
			    	    		需使用晶片金融卡+晶片讀卡機，配合網路ATM進行轉帳。<br/><br/>
								若您持有土地銀行、玉山銀行、台灣銀行、兆豐銀行、華南銀行、台新銀行與彰化銀行之金融卡則可享免轉帳手續費。
			    	    	</td>
			    	  	</tr>
			    	  	<tr>
			    	    	<td><Radio name="paymentType"> ATM轉帳</Radio></td>
			    	    	<td>
			    	    		透過實體或線上ATM轉帳款項，繳費期限為 48 小時，請務必於期限內進行轉帳。<br/><br/>
								若您持有土地銀行、玉山銀行、台灣銀行、兆豐銀行、華南銀行、台新銀行與彰化銀行之金融卡則可享免轉帳手續費。
			    	    	</td>
			    	  	</tr>					    	  	
			    	</tbody>
			  	</Table>

			  	<h1>Invoice Type</h1>
			  	<FormGroup className="invoiceType">
					<Radio name="invoiceType" inline> 二聯式</Radio>
					<Radio name="invoiceType" inline> 三聯式</Radio>
				</FormGroup>

				<Button bsStyle="primary" bsSize="large" block>Confirm</Button>				
			</div>
		);
	}
}
