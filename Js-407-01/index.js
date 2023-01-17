console.log(emojiList);
let copys = document.getElementById("copy");
let container = document.getElementById("container");
function delet() {
	emojiList.map(() => {
		let a = document.getElementById("tb").remove();
		console.log(a);
		// a.
	});
}
function getInput() {
	let ax = [];
	let inp = document.getElementById("input").value;
	if (inp === "") {
		console.log("empty");
		ax = [...emojiList];
	} else {
		emojiList.map(() => {
			if (document.getElementById("tb") !== null) {
				document.getElementById("tb").remove();
			}
			// document.getElementById("tb").remove();
		});
		ax = emojiList.filter((e) => {
			return e.aliases[0]
				.toLowerCase()
				.includes(inp[0].toLowerCase() + inp.slice(1));
		});
	}
	console.log(ax);
	// ax.map(() => {
	// 	if (document.getElementById("tb") !== null) {
	// 		document.getElementById("tb").remove();
	// 	}
	// });
	ax.map((e) => {
		let div = document.createElement("tbody");
		div.setAttribute("class", "tb");
		div.setAttribute("id", "tb");
		div.innerHTML = `
	<tr class="box">
					<td class="emoji">${e.emoji}</td>
					<td class="detail1">${e.aliases[0]}</td>
					<td class="detail2">${e.description}</td>
				</tr>
	`;
		// let hr = document.createElement("hr");
		return container.appendChild(div);
		// container.appendChild(hr);
	});
}
function create() {
	let container = document.getElementById("container");
	emojiList.map((e) => {
		console.log("a");
		let div = document.createElement("tbody");
		div.setAttribute("class", "tb");
		div.setAttribute("id", "tb");
		div.innerHTML = `
	<tr class="box">
					<td class="emoji">${e.emoji}</td>
					<td class="detail1">${e.aliases[0]}</td>
					<td class="detail2">${e.description}</td>
				</tr>
    `;
		// let hr = document.createElement("hr");
		container.appendChild(div);
		// container.appendChild(hr);
	});
}
// let container = document.getElementById("container");
emojiList.map((e) => {
	console.log("a");
	let div = document.createElement("tbody");
	div.setAttribute("class", "tb");
	div.setAttribute("id", "tb");
	div.innerHTML = `
	<tr class="box">
					<td class="emoji">${e.emoji}</td>
					<td class="detail1">${e.aliases[0]}</td>
					<td class="detail2">${e.description}</td>
				</tr>
    `;
	// let hr = document.createElement("hr");
	container.appendChild(div);
	// container.appendChild(hr);
});
