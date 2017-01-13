import React from 'react';
// import Formsy from 'formsy-react';
import StateLight from './light';



export default class Register5 extends React.Component {
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
			<div className="comment-list">
				<StateLight nowStep={5}></StateLight><br/>
				<h1>DONE</h1>
				<button onClick={ this.backStep }>Back Step</button>
			</div>	
		);
	}
}
