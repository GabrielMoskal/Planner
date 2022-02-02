class Plan {
	constructor(name, description, date, time) {
		this.name = name;
		this.description = description;
		this.date = date;
		this.time = time;
	}
	
}

let plans = [];

function retrieveInput() {
	const name = document.getElementById("name").value;
	const description = document.getElementById("description").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value;

	plans.push(new Plan(name, description, date, time));
	console.log(plans);	
}

function store() {
	const storage = window.localStorage;
	storage.setItem("test", JSON.stringify(plans));
	
	let retrieved = storage.getItem("test");
	console.log(JSON.parse(retrieved));

	storage.clear();
}
