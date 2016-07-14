
import React from "react,"
import Contacts from "ui/Contact.js";
//import contact file and render out
//import data list from allcontacts file 

export default React.createClass({
	getInitialState:function() {
		return {
			contact {}

		}
	},
	componentWillMount:function () {
		this.setState({
			contact :getContactById(this.props.params.contactId)
		})
	},
	render:function () {
		return (
			<Contact contact={this.state.contact} />
			)
		}

	})
// large photo, fname, lname, email, phone, location-city, state