let container = document.getElementById("container");
let arr = [];
const fetchs = () => {
	let place = document.getElementById("data").value;
	if (place !== "") {
		fetch(`https://api.github.com/search/users?q=${place}&per_page=20`)
			.then((a) => a.json())
			.then((res) => {
				console.log(res);
				if (arr.length > 1) {
					arr.map(() => {
						document.getElementById("box").remove();
					});
					arr = [];
				}
				arr.push(...res.items);
				arr.map((e) => {
					let box = document.createElement("div");
					box.setAttribute("class", "box");
					box.setAttribute("id", "box");
					box.innerHTML = `
			<div class="details_upper">
					<img src=${e.avatar_url} alt="" />
				</div>
				<div class="details_lower">
					<h3>${e.login}</h3>
					<a target="_blank" href=${e.html_url}><small>Visit profile</small></a>
				</div>
			`;
					container.appendChild(box);
				});
				let place = document.getElementById("data");
				place.value = "";
				place.placeholder = "";
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
function defaults() {
	document.getElementById("data").value = "Geekster";
	fetch(`https://api.github.com/search/users?q=geekster&per_page=20`)
		.then((a) => a.json())
		.then((res) => {
			console.log(res);
			if (arr.length > 1) {
				arr.map(() => {
					document.getElementById("box").remove();
				});
				arr = [];
			}
			arr.push(...res.items);
			arr.map((e) => {
				let box = document.createElement("div");
				box.setAttribute("class", "box");
				box.setAttribute("id", "box");
				box.innerHTML = `
			<div class="details_upper">
					<img src=${e.avatar_url} alt="" />
				</div>
				<div class="details_lower">
					<h3>${e.login}</h3>
					<a target="_blank" href=${e.html_url}><small>Visit profile</small></a>
				</div>
			`;
				container.appendChild(box);
			});
		})
		.catch((err) => {
			console.log(err);
		});
}
defaults();
