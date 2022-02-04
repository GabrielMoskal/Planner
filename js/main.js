"use strict"

class Plan {
	constructor(name, description, date, time) {
		this.name = name;
		this.description = description;
		this.date = date;
		this.time = time;
		this.fullDate = new Date(date + "T" + time);
	}
}

function test() {
	sortPlans();
}	

function retrieveInput() {
	const name = document.getElementById("name").value;
	const description = document.getElementById("description").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value;

	plans.push(new Plan(name, description, date, time));
}

function sortPlans() {
	plans.sort(function(a, b) {
			return a.fullDate - b.fullDate;
		}
	);
}

function store() {
	retrieveInput();
	sortPlans();
	window.localStorage.setItem("plans", JSON.stringify(plans));
}

function loadPlans() {
	let retrieved = window.localStorage.getItem("plans");
	
	if (retrieved === null) {
		return [];
	} else {	
		const parsedPlans = JSON.parse(retrieved);
		parsedPlans.forEach((plan) => plan.fullDate = new Date(plan.fullDate));
		return parsedPlans;
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
			"<p>full date: " + plan.fullDate.toString() + "</p>" +
			"</li>";
	});

	text += "</ul>";

	document.getElementById("showPlans").innerHTML = text;
}

const plans = loadPlans();
sortPlans();
showPlans();

