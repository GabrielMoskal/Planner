class Plan {
	constructor(name, description, date, time) {
		this.name = name;
		this.description = description;
		this.date = date;
		this.time = time;
	}	
}

function retrieveInput() {
	const name = document.getElementById("name").value;
	const description = document.getElementById("description").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value;

	plans.push(new Plan(name, description, date, time));
}

function store() {
	retrieveInput();
	window.localStorage.setItem("plans", JSON.stringify(plans));
}

function loadPlans() {
	let retrieved = window.localStorage.getItem("plans");
	
	if (retrieved === null) {
		return [];
	} else {
		return JSON.parse(retrieved);
	}
}

function showPlans() {
	
	let text = "<ul>";

	plans.forEach((plan) => {
			text +=
			"<li>" +
			"<p>name: " + plan.name + "</p>" +
			"<p>description: " + plan.description + "</p>" +
			"<p>date: " + plan.date + "</p>" +
			"<p>time: " + plan.time + "</p>" +
			"</li>";
	});

	text += "</ul>";

	document.getElementById("showPlans").innerHTML = text;
}

const plans = loadPlans();
showPlans();

