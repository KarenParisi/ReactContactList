import React from "react"; //for list view//
import ContactList from "ui/ContactList";
import { getContactList } from "api/people";
 
export default React.createClass ({
	getInitialState:function(){
		return {
			people: []
		}
	},
	componentWillMount: function() {
		this.setState({
			people: getContactList()
		});
	},
	render: function() {
		return (
			<ContactList people={this.state.people} />
		)
	}	
})