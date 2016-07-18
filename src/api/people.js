import people from "people.json";

var idCounter = 1;

people.forEach(function(person){
	person.id = idCounter;
	idCounter += 1;
});

export function getContactList() { //for contacttbrief listveiew
	return people.map(function(person){
		return {
			id: person.id,
			image: person.picture.thumbnail,
			fname: person.name.first,
			lname: person.name.last	
		}
	});	
}

export function getContactById(id) { //for contacts singleview
	var contact = people.filter(function(person){
		return Number(person.id) === Number(id);
		})	
		return {
			id: contact[0].id,
			image: contact[0].picture.large,
			fname: contact[0].name.first,
			lname: contact[0].name.last,
			email: contact[0].email,
			phone: contact[0].phone,
			city: contact[0].location.city,
			state: contact[0].location.state
		}
	}

