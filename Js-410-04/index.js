let container = document.getElementById("container");
const fetchs = () => {
	let place = document.getElementById("data").value;
	fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=af2a18278da49fb79e179e964c835a64`
	)
		.then((a) => a.json())
		.then((res) => {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=af2a18278da49fb79e179e964c835a64`
			)
				.then((res) => res.json())
				.then((res) => {
					container.style.visibility = "visible";
					container.innerHTML = `
									<div class="title">
					<h3>Weather of ${place}</h3>
				</div>
				<div class="box">
					<p>Sky Conditions:${res.weather[0].description}</p>
					<p>Temperature:${(res.main.temp - 273.15).toFixed(2)}</p>
					<p>Wind Speed: ${res.wind.speed}km/h</p>
				</div>
					`;

					let xx = document.getElementById("data");
					xx.value = "";
				})
				.catch((err) => console.error(err));
		})
		.catch((err) => {
			console.log(err);
		});
};
