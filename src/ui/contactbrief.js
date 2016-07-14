import React from "react"
// import Contacts from "api/contactlistcontainer.js";
import { Link } from "react-router";
//list data from contactclistontainer//
//imported from contactlist file
export default reactCreateClass ({
	render:function() {
		return (
			<link to={"/contact/" + this.props.id}>   
				<div class="briefs">
					<img src={this.props.image} />
					<span> {this.props.fname} {this.props.lname} </span>
				</div>
			</link>
		)
	}	
})



