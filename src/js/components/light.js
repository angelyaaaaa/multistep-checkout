import React from 'react';
import ChartCircle from './chart-Circle';


import jsonNormalizer from './json-normalizer';
import Data from 'json!../../json/Data_aggregate2-1';


export default class CommentList extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			// dateCont: dateContJson[0]
		};
		// this.handleChangeDateCont = this.handleChangeDateCont.bind(this);
	}



	render() {
		return (
			<div className="comment-list">
				<ChartCircle data={Data}/>				
			</div>
		);
	}
}
