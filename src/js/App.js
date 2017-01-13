import React from 'react';
import Register1 from './components/register_1';
import Register2 from './components/register_2';
import Register3 from './components/register_3';
import Register4 from './components/register_4';
import Register5 from './components/register_5';



class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			step: 1            
		};
		this.handleSelect = this.handleSelect.bind(this);
		this.goNextStep = this.goNextStep.bind(this);
		this.goPreviousStep = this.goPreviousStep.bind(this);
		this.goJumpStep = this.goJumpStep.bind(this);
	}

	handleSelect(index, last) {
		// console.log('Selected tab: ' + index + ', Last tab: ' + last);
	}

	goNextStep() {
	  	this.setState({
    		step : ++this.state.step
  		});
	}
		
	goPreviousStep() {
	  	this.setState({
    		step : --this.state.step
  		});
	}

	goJumpStep(now) {
		this.setState({step: now});
	}

	render() {

		switch (this.state.step) {
			case 1:
				return <Register1 
                            goNextStep={this.goNextStep}
                        />
			case 2:
				return <Register2 
                            goNextStep={this.goNextStep}
                            goPreviousStep={this.goPreviousStep}
                            goJumpStep={this.goJumpStep}
                        />
			case 3:
				return <Register3 
                            goNextStep={this.goNextStep}
                            goPreviousStep={this.goPreviousStep}
                            goJumpStep={this.goJumpStep}
                            goJumpStep={this.goJumpStep}
                        />
			case 4:
				return <Register4 
                            goNextStep={this.goNextStep}
                            goPreviousStep={this.goPreviousStep}
                            goJumpStep={this.goJumpStep}
                            goJumpStep={this.goJumpStep}
                        />
            case 5:
				return <Register5 
                            goPreviousStep={this.goPreviousStep}
                        />            
		};
	}
}

export default App;
