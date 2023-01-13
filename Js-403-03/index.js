function calc() {
	let people = document.getElementById("people").value;
	let service = document.getElementById("service").value;
	let price = document.getElementById("price").value;
	// console.log(price, people, service);
	let total = (price * service) / people;
	console.log(total);
	document.getElementById("amount").innerText = `₹${total}`;
	people.value = "";
	price.value = "";
	service.value = "";
}
