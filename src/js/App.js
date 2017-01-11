import React from 'react';
// import CommentBox from './components/comment_box';
// import CommentList from './components/comment_list';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Form from './components/form';
import StateLight from './components/light';




class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			layout: 'horizontal',
            validatePristine: false,
            disabled: false
		};
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(index, last) {
		console.log('Selected tab: ' + index + ', Last tab: ' + last);
	}

	

	render() {



		return (



			<Tabs
				onSelect={this.handleSelect}
				selectedIndex={5}
			>

		
				<TabList>
					<Tab>Home</Tab>
					<Tab>Patent</Tab>
					<Tab>Trademark</Tab>
					<Tab>Copyright</Tab>
					<Tab>Support</Tab>
					<Tab>My Account</Tab>
				</TabList>

				<TabPanel>
					<h2>Hello from Home</h2>
				</TabPanel>
				<TabPanel>
					<h2>Hello from Patent</h2>
				</TabPanel>
				<TabPanel>
					<h2>Hello from Trademark</h2>
				</TabPanel>
				<TabPanel>
					<h2>Hello from Copyright</h2>
				</TabPanel>
				<TabPanel>
					<h2>Hello from Support</h2>
				</TabPanel>
				<TabPanel>
					<StateLight/>
					<Form></Form>
				</TabPanel>
			</Tabs>
		);
	}
}

export default App;
