import React from "react"; //for list view//
import ContactBrief from "ui/ContactBrief";

export default React.createClass ({
	render: function () {
		return (
			<div className="singlediv">
				<div className="view"> List View </div>
				<div className="mypeeps">My Peeps </div>
				{this.props.people.map(function(person) {
				return <ContactBrief key={person.id} id={person.id} image={person.image} fname={person.fname} lname={person.lname} />
				})}
			</div>		
		)
	}
})