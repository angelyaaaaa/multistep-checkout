import { renderComponent , expect } from '../test-helper';
import CommentBox from '../../src/js/components/comment_box';

describe('CommentBox', ()=> {
	let component;
	
	beforeEach(()=> {
		component = renderComponent(CommentBox);
	});

	describe('structure', ()=> {
		it('has class named "comment-box"', ()=> {
			expect(component).to.have.class('comment-box');
		});

		it('has a text area', ()=> {
			expect(component.find('textarea')).to.exist;
		});

		it('has a button', ()=> {
			expect(component.find('button')).to.exist;
		});
	});


	describe('action: entering some text', ()=> {
		beforeEach(()=> {
			component.find('textarea').simulate('change', 'new comment');
		});

		it('shows text that is enterd', ()=> {
			expect(component.find('textarea')).to.have.value('new comment');
		});

		it('clears the input when submitted', ()=> {
			component.simulate('submit'); 
			expect(component.find('textarea')).to.have.value('');
		});
		
	});

});
