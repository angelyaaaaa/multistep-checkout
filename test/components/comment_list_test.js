import { renderComponent , expect } from '../test-helper';
import CommentList from '../../src/js/components/comment_list';

describe('Charts', ()=> {
	let component;
	beforeEach(()=> {
		component = renderComponent(CommentList);
	});

	it('shows circle chart', ()=> {
		// console.log('-------', props);
		expect(component.find('.chart-cicle')).to.exist;
	});

	// it('show', ()=> {

	// });
	// it('shows each comments which is provided', ()=> {
	// 	expect(component).to.contain('playing vedio games');
	// 	expect(component).to.contain('sleeping');
	// });

});