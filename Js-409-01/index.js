function fname() {
	let fname = document.getElementById("fname");
	console.log(fname.value);
	if (fname.value.length >= 3 && fname.value.length <= 16) {
		fname.style.border = "2px solid green";
	} else {
		fname.style.border = "2px solid red";
	}
}
function lname() {
	let lname = document.getElementById("lname");
	if (lname.value.length >= 3 && lname.value.length <= 16) {
		lname.style.border = "2px solid green";
	} else {
		lname.style.border = "2px solid red";
	}
}
function email() {
	let email = document.getElementById("email");
	if (email.value.includes("@")) {
		if (email.value.includes(".com") || email.value.includes(".in")) {
			email.style.border = "2px solid green";
		}
	} else {
		email.style.border = "2px solid red";
	}
	console.log(email);
}
function tel() {
	let tel = document.getElementById("tel");
	console.log(tel);
}
function password() {
	let password = document.getElementById("password");
	console.log(password);
}
function bio() {
	let bio = document.getElementById("bio");
	console.log(bio);
}
function check() {}
