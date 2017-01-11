import React from 'react';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';
const { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea } = FRC;

const MyForm = React.createClass({

	mixins: [FRC.ParentContextMixin],

	propTypes: {
		children: React.PropTypes.node
	},

	render() {
		return (
			<Formsy.Form
				className={this.getLayoutClassName()}
				{...this.props}
				ref="formsy"
			>
				{this.props.children}
			</Formsy.Form>
		);
	}

});

export default class Form extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			layout: 'horizontal',
			validatePristine: false,
			disabled: false
		};
		this.resetForm = this.resetForm.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.changeOption = this.changeOption.bind(this);
	}



	resetForm() {
		// This is nasty
		const formsy = this.refs.myform.refs.formsy;
		formsy.reset();
	}

	submitForm(data) {
		console.log(data);
	}

	changeOption(name, value) {
		var newState = {};
		newState[name] = value;
		this.setState(newState);
	}

	render() {
		let optionY = {
			value: 'y',
			label: 'Option Y (yellow css class)',
			className: 'yellow'
		};
		optionY['data-note'] = 'This is a data attribute.';
		
		let selectOptions = [
			{value: 'a', label: 'Option A'},
			{value: 'a', label: 'Option A (again)'},
			{value: 'b', label: 'Option B'},
			{value: 'c', label: 'Option C', title: 'This is a title attribute for Option C'},
			{value: 'd', label: 'Option D', disabled: true},
			optionY
		];

		let singleSelectOptions = selectOptions.slice(0);
		singleSelectOptions.unshift({value: '', label: 'Please select…'});


		return (
			<div className="row">
								
				<div className="page-header">
					<h2>Sign In</h2>
				</div>
				<MyForm
					onSubmit={this.submitForm}
					layout={this.state.layout}
					validatePristine={this.state.validatePristine}
					disabled={this.state.disabled}
					ref="myform"
				>
					<fieldset>
						<legend>Input types</legend>
						<Input
							name="text1"
							id="artisanCraftedBespokeId"
							value=""
							label="Text"
							type="text"
							placeholder="Here is a text input."
							help="This is a required text input."
							required
						/>
						
						<Input
							name="password1"
							value=""
							label="Password"
							type="password"
							validations="minLength:8"
							validationError="Your password must be at least 8 characters long."
							placeholder="Choose a password"
						/>
						<Input
							name="password2"
							value=""
							label="Confirm password"
							type="password"
							validations="equalsField:password1"
							validationErrors={{
								equalsField: 'Passwords must match.'
							}}
							placeholder="Retype password"
						/>
						<Input
							name="email"
							value=""
							label="Email"
							type="email"
							autoComplete="off"
							placeholder="This is an email input."
							help="This email field should not autocomplete."
							validations="isEmail"
							validationErrors={{
								isEmail: 'This doesn’t look like a valid email address.'
							}}
							required
						/>

						<Input
							name="email"
							value=""
							label="Email"
							type="email"
							autoComplete="off"
							placeholder="This is an email input."
							help="This email field should not autocomplete."
							validations="isEmail"
							validationErrors={{
								isEmail: 'This doesn’t look like a valid email address.'
							}}
							required
						/>
							
					</fieldset>

					<fieldset>
						<legend>Input groups</legend>
						<Input
							name="addon-before"
							value=""
							label="Add-on before"
							type="text"
							addonBefore={<span className="glyphicon glyphicon-search"></span>}
						/>
						<Input
							name="addon-after"
							value=""
							label="Add-on after"
							type="text"
							addonAfter={<span className="glyphicon glyphicon-search"></span>}
						/>
						<Input
							name="button-before"
							value=""
							label="Button before"
							type="text"
							buttonBefore={<button className="btn btn-default" type="button">Go!</button>}
						/>
						<Input
							name="button-after"
							value=""
							label="Button after"
							type="text"
							buttonAfter={<button className="btn btn-default" type="button">Go!</button>}
						/>
					</fieldset>
					<fieldset>
						<Row layout={this.state.layout}>
							<input className="btn btn-default" onClick={this.resetForm} type="reset" defaultValue="Reset" />
							{' '}
							<input className="btn btn-primary" formNoValidate={true} type="submit" defaultValue="Submit" />
						</Row>
					</fieldset>
				</MyForm>
			</div>
		);
	}
}
