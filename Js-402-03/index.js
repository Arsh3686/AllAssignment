let arr = [];
function add() {
	let obj = {};
	obj.id = new Date().getMilliseconds();
	let a = document.getElementById("input").value;
	if (a.length >= 1) {
		obj.val = a;
		arr.push(obj);
		let div = document.createElement("div");
		div.classList.add("body");
		let li = document.createElement("li");
		let button = document.createElement("button");
		arr.forEach((e) => {
			button.innerText = "delete";
			li.innerText = e.val;
			button.setAttribute("onclick", `deletee(s${e.id})`);
			div.setAttribute("id", `s${e.id}`);
		});

		div.append(li);
		div.append(button);
		document.getElementById("bodys").appendChild(div);
		document.getElementById("input").value = "";
	} else {
		alert("No items added");
	}
}
function deletee(res) {
	document.getElementById(res.id).remove();
	arr = arr.filter((e) => {
		return `s${e.id}` !== res.id;
	});
}
