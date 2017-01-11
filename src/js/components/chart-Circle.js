import React from 'react';
// import chartData from 'json!../json/modelBase'; 
import { Chart } from 'react-google-charts';
import dataDealer from './dataDealer-Circle';

class ChartCircle extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { 
			data: null
		};
		// this.handleChangeDateCont = this.handleChangeDateCont.bind(this);
	}

	componentWillMount() {
		this.setState({data: dataDealer(this.props.data)});
	}

	render() {
		// let obj = [
		// 	['Task', 'Hours per Day'],
		// 	['Work', 11],
		// 	['Eat', 2],
		// 	['Commute', 2],
		// 	['Watch TV', 2],
		// 	['Sleep', 7]
		// ];
		const data = this.state.data;
		return (
			<div className="chart-circle">
				<Chart
					chartType="PieChart" 
					data={data}
					options={{}}
					graph_id="PieChart"
					width="80%"
					height="250px"
					legend_toggle
				/>
			</div>
		);
	}
}

export default ChartCircle;
