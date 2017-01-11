import concatObj from 'concat-obj';

export default (input)=> {
	let output = [];

	input.forEach((obj)=> {
		// 現在於 input.obj，一個 obj
		let tmpObj = (JSON.parse(JSON.stringify(obj)));
		tmpObj.historicalOrders.forEach((historicalOrdersItem)=> {
			let tmpItem = (JSON.parse(JSON.stringify(obj))); 
			tmpItem.ts = historicalOrdersItem.ts;
			delete tmpItem.historicalOrders;
			output.push(concatObj(tmpItem, historicalOrdersItem.itemDetail));
		});
	});
	return output;
};


