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
	console.log(typeof +tel.value, typeof tel.value);
	let a = Number(tel.value);
	console.log(a);
	if (a >= 0 && tel.value.length >= 11 && tel.value.length <= 11) {
		tel.style.border = "2px solid green";
	} else {
		tel.style.border = "2px solid red";
	}
}
function password() {
	let password = document.getElementById("password");
	if (password.value.length >= 6 && password.value.length <= 16) {
		password.style.border = "2px solid green";
	} else {
		password.style.border = "2px solid red";
	}
	console.log(email);
	console.log(password);
}
function bio() {
	let bio = document.getElementById("bio");
	console.log(bio);
}
function check() {}
