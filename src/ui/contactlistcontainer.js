import React from "react";
import Contacts from "ui/ContactList.js";
import {getContactList} from "api/allcontacts";
//import contactbrief and render out
//import allcontacts
//photo, fname, lname, 
export default React.createClass ({
	getInitialState:function(){
		return {
			users: []
		}
	},
	componentWillMount :function() {
		this.setState({
			users: getContactList()
		});
	},
	render: function() {
		return (
			ContactList users={this.state.users} />
		)
	}	
})