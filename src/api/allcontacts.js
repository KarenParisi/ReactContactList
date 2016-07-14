import Users from "ui/users.json";

export function getContactList() { //for contacttbrief file
	return users.map(function(contact) {
		return {
			id: user.registered,
			fname: user.name.first,
			lname: user.name.last,
			image: user.picture.large
		}
	});	
}
export function getContactById (id) {} //for contact file}
//need to filter
//data from json file to map and filter// use registeredas ID
//for both contacst & contactsbrief
// to be imported from container files
