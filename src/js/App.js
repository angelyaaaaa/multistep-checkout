import React from 'react';
import Register1 from './components/register_1';
import Register2 from './components/register_2';
import Register3 from './components/register_3';
import Register4 from './components/register_4';
import Register5 from './components/register_5';
import Register6 from './components/register_6';



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
		this.goFirst = this.goFirst.bind(this);
	}

	handleSelect(index, last) {
		// console.log('Selected tab: ' + index + ', Last tab: ' + last);
	}

	componentWillMount() {
		const initStep = location.hash == '' ? 1 : (parseInt(location.hash.slice(5)))
		this.setState({step: initStep});
	}

	goNextStep() {
		const newStep = ++this.state.step,
				newHistory = '#step' + newStep;
		history.pushState('', '', newHistory);
		this.setState({
			step : newStep
		});
	}
		
	goPreviousStep() {
		const newStep = --this.state.step,
				newHistory = '#step' + newStep;
		history.pushState('', '', newHistory);
		this.setState({
			step : newStep
		});		
	}

	goJumpStep(now) {
		this.setState({step: now});
	}

	goFirst() {
		this.setState({step: 1});
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
						/>
			case 4:
				return <Register4 
							goNextStep={this.goNextStep}
							goPreviousStep={this.goPreviousStep}
							goJumpStep={this.goJumpStep}
							goFirst={this.goFirst}
						/>
			case 5:
				return <Register5 
							goNextStep={this.goNextStep}
							goPreviousStep={this.goPreviousStep}
						/>    
			case 6:
				return <Register6
							goPreviousStep={this.goPreviousStep}
						/>    			        
		};
	}
}

export default App;
