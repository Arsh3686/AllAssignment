const calc = () => {
	let inpData = document.getElementById("input");
	let select = document.getElementById("select");
	let temp = planets.find((e) => {
		return e.id === +select.value;
	});
	let img = document.getElementById("img");
	img.src = temp.src;
	let weight = document.getElementById("weight");
	weight.innerText = (+inpData.value * +select.value).toFixed(2);
	let name = document.getElementById("name");
	name.innerText = temp.name;
};
