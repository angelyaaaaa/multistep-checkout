import React from 'react';
// import Formsy from 'formsy-react';
import StateLight from './light';



export default class Register1 extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			// dateCont: dateContJson[0]
		};
		this.saveAndContinue = this.saveAndContinue.bind(this);
	}


	saveAndContinue(e) {
	    e.preventDefault()

	    // Get values via this.refs
	    // var data = {
	    //   name     : this.refs.name.getDOMNode().value,
	    //   password : this.refs.password.getDOMNode().value,
	    //   email    : this.refs.email.getDOMNode().value,
	    // }

	    // this.props.saveValues(data)
	    this.props.goNextStep()
  	}

	render() {
		return (
			<div className="comment-list">
				<StateLight nowStep={1}></StateLight><br/>
		       	<label>Goverment</label>
		    	<select>
				  	<option value="volvo">Volvo</option>
				  	<option value="saab">Saab</option>
				  	<option value="mercedes">Mercedes</option>
				  	<option value="audi">Audi</option>
				</select>
				<br/>

				<label>MyCurrency</label>
		    	<select>
				  	<option value="volvo">Volvo</option>
				  	<option value="saab">Saab</option>
				  	<option value="mercedes">Mercedes</option>
				  	<option value="audi">Audi</option>
				</select>
				<br/>

				<label>Patent Type</label>
		    	<select>
				  	<option value="volvo">Volvo</option>
				  	<option value="saab">Saab</option>
				  	<option value="mercedes">Mercedes</option>
				  	<option value="audi">Audi</option>
				</select> 
				<br/>        
				      
		      	<button onClick={ this.saveAndContinue }>Save and Continue</button>
				
			</div>
		);
	}
}
