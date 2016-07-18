import React from "react";  //listview view//
import { hashHistory } from 'react-router';

export default React.createClass ({
	handleBack: function () {
    hashHistory.goBack();
  },
	render: function() {
		return (
			<div className="singlediv"> 
				
				<div className="view"> Single View </div>
				<button onClick={this.handleBack}>{"<"} List View</button>
				<div className="imgdiv"><img className="svimg" src={this.props.contact.image} /></div>
				<ul className="svparag">
					<li> <img className="icon" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-128.png" /> {this.props.contact.fname} {this.props.contact.lname} <hr/></li>
					<li> <img className="icon" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-128.png" /> {this.props.contact.email}<hr/></li>
					<li> <img className="icon" src ="http://images.clipartpanda.com/phone-icon-phone-squared.svg" /> {this.props.contact.phone} <hr/></li>
					<li> <img className="icon" src="https://cdn3.iconfinder.com/data/icons/faticons/32/globe-01-512.png" /> {this.props.contact.city}, {this.props.contact.state}<hr/></li>
				</ul>
			</div> 
		)
	}
})