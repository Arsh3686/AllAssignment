let container = document.getElementById("container");
let id = 1;
let arr = [];
let t = 0;
function submit() {
	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	let country = document.getElementById("country").value;
	let score = document.getElementById("score").value;
	let div = document.createElement("div");
	if (fname === "" || lname === "" || country === "" || score === "") {
		document.getElementById("err").innerText = "All fields are required";
		document.getElementById("err").style.color = "red";
	} else {
		let obj = {
			id: id,
			score: +score,
			fname: fname,
			lname: lname,
			country: country,
		};
		arr.push(obj);
		document.getElementById("err").innerText = "";

		div.setAttribute("class", "box");
		div.setAttribute("id", `box${id}`);
		console.log(fname, lname, country, score);
		div.innerHTML = `
                <p>${fname} ${lname}</p>
                <p>${country}</p>
                <p id="upd${id}">${score}</p>
                <p >${id}</p>
				<button onclick=del(${id})>✂️</button>
				<button onclick=decr(${id})>-5</button>
				<button onclick=incr(${id})>+5</button>
    `;
		container.appendChild(div);
		id++;
	}
}
function decr(b) {
	console.log(arr);
	arr.map((e) => {
		document.getElementById(`box${e.id}`).remove();
		id = 1;
	});
	arr.sort((a, b) => {
		return +b.score - +a.score;
	});
	// arr[]
	let temp = +arr[b - 1].score - 5;
	if (temp >= 0) {
		arr[b - 1].score = +arr[b - 1].score - 5;
	} else {
		arr[b - 1].score = 0;
	}
	arr.map((e) => {
		let div = document.createElement("div");
		document.getElementById("err").innerText = "";
		div.setAttribute("class", "box");
		div.setAttribute("id", `box${e.id}`);

		div.innerHTML = `
	            <p>${e.fname} ${e.lname}</p>
	            <p>${e.country}</p>
	            <p id="upd${e.id}">${e.score}</p>
	            <p >${e.id}</p>
				<button onclick=del(${e.id})>✂️</button>
				<button onclick=decr(${e.id})>-5</button>
				<button onclick=incr(${e.id})>+5</button>
	`;
		// id++;
		container.appendChild(div);
	});
}
function incr(b) {
	arr.map((e) => {
		document.getElementById(`box${e.id}`).remove();
		id = 1;
	});
	console.log(arr);

	arr[b - 1].score = +arr[b - 1].score + 5;
	arr.sort((a, b) => {
		return +b.score - +a.score;
	});
	arr.map((e) => {
		let div = document.createElement("div");
		document.getElementById("err").innerText = "";
		div.setAttribute("class", "box");
		div.setAttribute("id", `box${e.id}`);
		div.innerHTML = `
	            <p>${e.fname} ${e.lname}</p>
	            <p>${e.country}</p>
	            <p id="upd${e.id}">${e.score}</p>
	            <p >${e.id}</p>
				<button onclick=del(${e.id})>✂️</button>
				<button onclick=decr(${e.id})>-5</button>
				<button onclick=incr(${e.id})>+5</button>
	`;
		container.appendChild(div);
		// id++;
	});
	// let val = document.getElementById(`upd${b}`);
	// let temp = val.innerText - 5;
	// if (temp > 0) {
	// 	val.innerText = val.innerText - 5;
	// } else {
	// 	val.innerText = 0;
	// }
}
function del(e) {
	document.getElementById(`box${e}`).remove();
}
function check() {
	let score = document.getElementById("score").value;
	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	let country = document.getElementById("country").value;

	let div = document.createElement("div");
	if (fname === "" || lname === "" || country === "" || score === "") {
		document.getElementById("err").innerText = "All fields are required";
		document.getElementById("err").style.color = "red";
	} else {
		document.getElementById("err").innerText = "";
	}

	t = 1;
	if (t !== 0) {
		if (+score === 0) {
			document.getElementById("score").style.borderColor = "red";
		} else {
			document.getElementById("score").style.borderColor = "#E5C9C5";
		}
	}
}
