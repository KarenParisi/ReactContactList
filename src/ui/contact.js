import React from "react";
import Contacts from "api/contactcontainer.js";
//data from contactcontainer

export default reactCreateClass ({
//add back button function and onClick button to div below//
	render: function() {
		return (
			<div class="singleview"> 
				<p> {this.props.contact.fname} {this.props.contact.lname} </p>
				<p> {this.props.contact.eamil}</p>
				<p> {this.props.contact.phone}</p>
				<p> {this.props.contact.city},{this.props.contact.state}</p>
			</div>
		)
	}
)}
//large photo, fname, lname, email, phone, location-city, state
	
//
 // export
	// render
	// return

	//dsds