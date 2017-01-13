import React from 'react';
// import Formsy from 'formsy-react';
import StateLight from './light';



export default class Register4 extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			// dateCont: dateContJson[0]
		};
		this.saveAndContinue = this.saveAndContinue.bind(this);
		this.backStep = this.backStep.bind(this);
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

  	backStep(e) {
  		e.preventDefault();
  		this.props.goPreviousStep();
  	}

	render() {
		return (
			<div className="comment-list">
				<StateLight nowStep={4} goJumpStep={this.props.goJumpStep}></StateLight><br/>
		       	<label>Patent Information</label><br/>
		       	
		       	<label>Application</label> 
      			<input type="text" placeholder="Last Name"/>
      			<input type="text" placeholder="First Name"/><br/>

      			<label>Application Number</label> 
      			<input type="text" placeholder="3345678"/><br/>

      			<label>Certification Number</label> 
      			<input type="text" placeholder="5678"/><br/>

				      
				<button onClick={ this.backStep }>Back Step</button>
		      	<button onClick={ this.saveAndContinue }>Save and Continue</button>
			</div>
		);
	}
}
