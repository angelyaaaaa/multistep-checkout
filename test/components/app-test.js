// import { renderComponent , expect } from '../test-helper';
import { renderComponent , expect } from '../test-helper';
import App from '../../src/js/App';

describe('App' , () => {
	let component;

	beforeEach(()=> {
		component = renderComponent(App);
	});

	// 這個測試個人覺得不符合分離的原則
	// it('shows a comment box', ()=> {
	// 	expect(component.find('.comment-box')).to.exist;
	// });
	
	// it('shows a comment list', ()=> {
	// 	expect(component.find('.comment-list')).to.exist;	
	// });
});
