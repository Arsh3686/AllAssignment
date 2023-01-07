function press(e) {
	console.log(e.code, e.charCode);
	// console.log(String.fromCharCode(e.keyCode));
	// window.onkeyup(e);
}
window.addEventListener("keydown", (e) => {
	document.getElementById("data").innerHTML = `
    You pressed <span id="green">${e.key}</span>
    `;
	document.getElementById("btn").style.display = "block";
	document.getElementById("btn").innerHTML = `<span id="green">${e.keyCode}`;
	console.log(e);
});
