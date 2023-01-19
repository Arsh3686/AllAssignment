let container = document.getElementById("container");
let id = 1;
let arr = [];
let t = 0;
const month = [
	{
		utc: 0,
		month: " Jan",
	},
	{
		utc: 1,
		month: " Feb",
	},
	{
		utc: 2,
		month: " March",
	},
	{
		utc: 3,
		month: " April",
	},
	{
		utc: 4,
		month: " May",
	},
	{
		utc: 5,
		month: " June",
	},
	{
		utc: 6,
		month: " July",
	},
	{
		utc: 7,
		month: " Aug",
	},
	{
		utc: 8,
		month: " Sep",
	},
	{
		utc: 9,
		month: " Oct",
	},
	{
		utc: 10,
		month: " Nov",
	},
	{
		utc: 11,
		month: " Dec",
	},
];

function submit() {
	const date = new Date();

	let datee = `
	${month[date.getUTCMonth()].month}
	${date.getDate()}
	${date.getFullYear()}
	${date.toLocaleTimeString()}
	`;
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
			dates: datee,
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
				<small class="date">${datee}</small>
				
                <p>${country}</p>
                <p id="upd${id}">${score}</p>
                
				
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
	let find = arr.findIndex((ele) => {
		return ele.id === b;
	});
	console.log("find", find);
	let temp = +arr[find].score - 5;

	if (temp >= 0) {
		arr[find].score = +arr[find].score - 5;
	} else {
		arr[find].score = 0;
	}
	arr.map((e) => {
		let div = document.createElement("div");
		document.getElementById("err").innerText = "";
		div.setAttribute("class", "box");
		div.setAttribute("id", `box${e.id}`);

		div.innerHTML = `
	            <p>${e.fname} ${e.lname}</p>
				<small class="date">${e.dates}</small>
	            <p>${e.country}</p>
	            <p id="upd${e.id}">${e.score}</p>
	            
				
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
	let find = arr.findIndex((ele) => {
		return ele.id === b;
	});
	console.log("find", find);
	arr[find].score = +arr[find].score + 5;
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
				<small class="date">${e.dates}</small>
	            <p>${e.country}</p>
	            <p id="upd${e.id}">${e.score}</p>
	            
				<button onclick=del(${e.id})>✂️</button>
				<button onclick=decr(${e.id})>-5</button>
				<button onclick=incr(${e.id})>+5</button>
	`;
		container.appendChild(div);
		// id++;
	});
}
function del(e) {
	document.getElementById(`box${e}`).remove();
	arr = arr.filter((b) => {
		return b.id !== e;
	});
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
function get(e) {
	const date = new Date();
	// console.log(date);
	console.log(
		date.toLocaleDateString(),
		date.getDate(),
		date.getFullYear(),
		date.getTime()
	);
	let find = arr.findIndex((ele) => {
		return ele.id === e;
	});
	console.log("find", find);
	console.log("data", document.getElementById(`box${e}`));
	console.log(arr);
}
