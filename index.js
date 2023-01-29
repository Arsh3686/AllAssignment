let container = document.getElementById("container");
let isClicked = 1;
// let d = Date("2023-01-29 15:00:00");
// console.log(d);

function showOpt() {
	if (isClicked === 1) {
		document.getElementById("inpContainer").style.display = "none";
		document.getElementById("arrow").innerText = "v";
		isClicked = 0;
	} else {
		document.getElementById("inpContainer").style.display = "block";
		document.getElementById("arrow").innerText = "^";
		isClicked = 1;
	}
}
const getLocation = () => {
	navigator.geolocation.getCurrentPosition((position) => {
		const p = position.coords;
		console.log(p.latitude, p.longitude);
		fetchs(p.latitude, p.longitude);
	});
};
const getPlace = () => {
	let place = document.getElementById("data").value;
	submit(place);
};
const submit = (place) => {
	fetch(
		`https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=af2a18278da49fb79e179e964c835a64`
	)
		.then((a) => a.json())
		.then((res) => {
			fetchs(res[0].lat, res[0].lon);
		})
		.catch((err) => console.error(err));
};
const fetchs = (lat, lon) => {
	// fetch(
	// 	`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=af2a18278da49fb79e179e964c835a64`
	// )
	fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=af2a18278da49fb79e179e964c835a64`
	)
		.then((res) => res.json())
		.then((res) => {
			document.getElementById("demoContainer").style.display = "none";
			document.getElementById("boxContainer").style.display = "flex";
			document.getElementById("inpContainer").style.display = "none";
			document.getElementById("arrow").innerText = "v";
			isClicked = 0;
			console.log(res);
			let place = document.getElementById("data");
			place.value = "";

			let temp = res.list[0].main.temp - 273;
			document.getElementById("todaydeg").innerText = `${temp.toFixed(
				0
			)}℃`;
			let weather = res.list[0].weather[0].main;
			let windSpeed = (res.list[0].wind.speed * 18) / 5;
			document.getElementById("windSpeed").innerText =
				windSpeed.toFixed(1) + " km/h";
			console.log("img", weather);

			weather = String(weather).toLowerCase();

			let extract = [...Date(res.list[0].dt)];
			let week = extract[0] + extract[1] + extract[2];
			let month = extract[4] + extract[5] + extract[6];
			let date = extract[8] + extract[9];
			let time = extract[16] + extract[17];
			let ampm = time > +12 ? "PM" : "AM";
			document.getElementById(
				"todayDateTime"
			).innerText = `${week} ,${date}${month}`;

			let src;
			let bg;
			if (weather.includes("clear")) {
				src = ampm === "PM" ? "night.png" : "sunny.png";
				bg = ampm === "PM" ? "nightskyw.jpeg" : "sunnyw.jpeg";
			} else if (weather.includes("rain")) {
				src = "rainy.png";
				bg = "rainw.jpeg";
			} else if (weather.includes("cloud")) {
				src = "cloudy-day.png";
				bg = "cloudw.jpeg";
			} else {
				src = "haze.png";
			}
			document.getElementById(
				"body"
			).style.backgroundImage = `url(${bg})`;
			document.getElementById("todayImg").src = src;
			document.getElementById("locationplace").innerText = res.city.name;
			document.getElementById("humidity").innerText =
				res.list[0].main.humidity + "%";
			document.getElementById("rainpercentage").innerText =
				res.list[0].clouds.all + "%";
			for (let t = 1; t < 4; t++) {
				document.getElementById(
					`forecast_data${t}_deg`
				).innerText = `${(res.list[t].main.temp - 273).toFixed(0)}℃`;

				let forecast_extract = [...res.list[t].dt_txt];
				let forecast_time = forecast_extract[11] + forecast_extract[12];
				console.log("forecast_time", forecast_time);
				document.getElementById(
					`forecast_data${t}_time`
				).innerText = `${forecast_time}${
					forecast_time > +12 ? " PM" : " AM"
				}`;
				let img = res.list[t].weather[0].main;
				img = String(img).toLowerCase();
				console.log("img", img);
				let src;
				if (img.includes("clear")) {
					src = ampm === "PM" ? "night.png" : "sunny.png";
				} else if (img.includes("rain")) {
					src = "rainy.png";
				} else if (img.includes("cloud")) {
					src = "cloudy-day.png";
				} else {
					src = "haze.png";
				}
				console.log("img", img);
				document.getElementById(`forecast_data${t}_img`).src = src;
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
function demo() {
	let place = document.getElementById("demoInput");
	submit(place.value);
	place.value = "";
}
setTimeout(() => {}, 2000);
