let mealsArr = [];
const fetchs = () => {
	let container = document.getElementById("container");
	let food = document.getElementById("data").value;
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
		.then((a) => a.json())
		.then((res) => {
			if (mealsArr.length > 0) {
				mealsArr.map(() => {
					let box = document.getElementById("box");
					container.removeChild(box);
				});
				mealsArr = [];
			}

			mealsArr.push(...res.meals);
			console.log(mealsArr);
			mealsArr.map((e) => {
				// console.log(e.strMeal);
				let box = document.createElement("div");
				box.setAttribute("id", "box");
				box.setAttribute("class", "box");
				box.innerHTML = `<img src=${e.strMealThumb} alt="${e.strMeal}">`;
				container.append(box);
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
