import React from "react"; 
import { Link } from "react-router";
export default React.createClass ({
	render:function() {
		return (
			<Link to={"/contact/" + this.props.id}>  
				<img className="briefimg" src={this.props.image} />
				 <span> {this.props.fname} {this.props.lname} <hr/> </span>
			</Link>
		)
	}	
})



