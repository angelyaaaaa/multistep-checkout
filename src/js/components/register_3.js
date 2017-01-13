import React from 'react';
// import Formsy from 'formsy-react';
import StateLight from './light';



export default class Register3 extends React.Component {
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
				<StateLight nowStep={3} goJumpStep={this.props.goJumpStep}></StateLight><br/>
		       	
				<label>Purpose</label><br/>
				<input type="radio" name="location" value="myself"/> for myself<br/>
				<input type="radio" name="location" value="enterprise"/> for enterprise<br/>
				<input type="radio" name="location" value="others"/> for others<br/>
  
				      
				<button onClick={ this.backStep }>Back Step</button>
		      	<button onClick={ this.saveAndContinue }>Save and Continue</button>
			</div>
		);
	}
}
