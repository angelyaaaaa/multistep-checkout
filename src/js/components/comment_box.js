import React from 'react';

export default class CommentBox extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {comment: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({comment: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({comment: ''});
	}

	render() {
		return (
			<form className="comment-box" onSubmit={this.handleSubmit}>
				<textarea 
					onChange={this.handleChange} 
					value={this.state.comment}>
				</textarea>
				<button action="submit">Submit Comment</button>
			</form>
		);
	}
}
