let dummy = [...countries];
let isClicked = 0;
function startclicked() {
	document.getElementById("input").value = "";
	isClicked = 0;
	dummy.map(() => {
		return document.getElementById("cbox").remove();
	});
	dummy = [];
	dummy.push(...countries);
	dummy.map((e) => {
		let div = document.createElement("div");
		div.setAttribute("class", "cbox");
		div.setAttribute("id", "cbox");
		div.setAttribute("title", `${e}`);

		div.innerHTML = `<img
					src="https://www.sciencekids.co.nz/images/pictures/flags96/${e}.jpg"
					alt="${e}"
				/>
				<h5>name:${e}</h5>
				<button>
					<a href="https://en.wikipedia.org/wiki/${e}"
						>wikipedia</a
					>
				</button>`;
		box.appendChild(div);
	});
}
function searchclicked() {
	document.getElementById("hide").style.display = "none";
	document.getElementById("input").value = "";
	isClicked = 1;
	dummy.map(() => {
		return document.getElementById("cbox").remove();
	});
	dummy = [...countries];
	// dummy.push(...ax);
	dummy.map((e) => {
		let div = document.createElement("div");
		div.setAttribute("class", "cbox");
		div.setAttribute("id", "cbox");
		div.setAttribute("title", `${e}`);

		div.innerHTML = `<img
					src="https://www.sciencekids.co.nz/images/pictures/flags96/${e}.jpg"
					alt="${e}"
				/>
				<h5>name:${e}</h5>
				<button>
					<a href="https://en.wikipedia.org/wiki/${e}"
						>wikipedia</a
					>
				</button>`;
		box.appendChild(div);
	});
}
console.log(dummy);
let box = document.getElementById("box");
function detect() {
	// dummy = [];
	let aa = document.getElementById("input").value;
	console.log(countries[1][0]);
	if (aa !== undefined && aa !== "") {
		let ax;
		if (isClicked === 1) {
			ax = countries.filter((e) => {
				return e.includes(aa[0].toUpperCase() + aa.substring(1));
			});
		} else if (isClicked === 0) {
			ax = countries.filter((e) => {
				return e[0] === aa[0].toUpperCase();
			});
			document.getElementById("hide").style.display = "block";
			document.getElementById("hide").innerHTML =
				`Countries with letter <span class="word">` +
				aa[0].toUpperCase() +
				`</span> are <span class="length">` +
				ax.length +
				`</span>`;
		}
		dummy.map(() => {
			return document.getElementById("cbox").remove();
		});
		dummy = [];
		dummy.push(...ax);
	} else if (aa !== undefined && aa === "") {
		console.log("7777");
		dummy.map(() => {
			return document.getElementById("cbox").remove();
		});
		dummy = [];
		dummy = [...countries];
	}
	console.log(dummy);
	dummy.map((e) => {
		let div = document.createElement("div");
		div.setAttribute("class", "cbox");
		div.setAttribute("id", "cbox");
		div.setAttribute("title", `${e}`);
		div.innerHTML = `<img
					src="https://www.sciencekids.co.nz/images/pictures/flags96/${e}.jpg"
					alt="${e}"
				/>
				<h5>name:${e}</h5>
				<button>
					<a href="https://en.wikipedia.org/wiki/${e}"
						>wikipedia</a
					>
				</button>`;
		box.appendChild(div);
	});
	// }
	aa.value = "";
}

function sort() {
	// let sort = countries.sort((a, b) => {
	// 	return b.valueOf() - a.valueOf();
	// });
	dummy.map(() => {
		return document.getElementById("cbox").remove();
	});
	dummy = dummy.reverse();
	dummy.map((e) => {
		let div = document.createElement("div");
		div.setAttribute("class", "cbox");
		div.setAttribute("id", "cbox");
		div.setAttribute("title", `${e}`);

		div.innerHTML = `<img
					src="https://www.sciencekids.co.nz/images/pictures/flags96/${e}.jpg"
					alt="${e}"
				/>
				<h5>name:${e}</h5>
				<button>
					<a href="https://en.wikipedia.org/wiki/${e}"
						>wikipedia</a
					>
				</button>`;
		box.appendChild(div);
	});
	// console.log(sort);
	// console.log("sort");
}

dummy.map((e) => {
	let div = document.createElement("div");

	div.setAttribute("class", "cbox");
	div.setAttribute("id", "cbox");
	div.setAttribute("title", `${e}`);

	div.innerHTML = `<img
					src="https://www.sciencekids.co.nz/images/pictures/flags96/${e}.jpg"
					alt="${e}"
				/>
				<h5>name:${e}</h5>
				<button>
					<a href="https://en.wikipedia.org/wiki/${e}"
						>wikipedia</a
					>
				</button>`;
	box.appendChild(div);
});
