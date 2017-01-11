// import dataFormater from './dataFormater';

const dataDealerCircle = (input)=> {
	let output = [];

	let tmpTitle = [];
	input.forEach((obj, idx)=> {

		let tmpObj = [];
		for(let key in obj) {
			if(idx == 0) {
				tmpTitle.push(key);
			}

			// if(typeof obj[key] === 'string') {

			// }
			tmpObj.push(obj[key]);
		}		
		output.push(tmpObj);
	});
	output.unshift(tmpTitle);
	return output;
};

export default dataDealerCircle;
