let i = 0;
setInterval(() => {
	const images = [
		"https://images.pexels.com/photos/4115029/pexels-photo-4115029.jpeg?auto=compress&cs=tinysrgb&w=400",
		"https://images.pexels.com/photos/6556790/pexels-photo-6556790.jpeg?auto=compress&cs=tinysrgb&w=400",
		"https://images.pexels.com/photos/10716999/pexels-photo-10716999.jpeg?auto=compress&cs=tinysrgb&w=400",
		"https://images.pexels.com/photos/5935662/pexels-photo-5935662.jpeg?auto=compress&cs=tinysrgb&w=400",
	];
	if (i != images.length - 1) {
		i++;
		document.getElementById("box").src = images[i];
	} else {
		i = 0;
		document.getElementById("box").src = images[i];
	}
	// return () => {
	// 	i++;
	// };
}, 1000);
const images = [
	"https://images.pexels.com/photos/4115029/pexels-photo-4115029.jpeg?auto=compress&cs=tinysrgb&w=400",
	"https://images.pexels.com/photos/6556790/pexels-photo-6556790.jpeg?auto=compress&cs=tinysrgb&w=400",
	"https://images.pexels.com/photos/10716999/pexels-photo-10716999.jpeg?auto=compress&cs=tinysrgb&w=400",
	"https://images.pexels.com/photos/5935662/pexels-photo-5935662.jpeg?auto=compress&cs=tinysrgb&w=400",
];
function next() {
	if (i != images.length - 1) {
		i++;
		document.getElementById("box").src = images[i];
	} else {
		i = 0;
		document.getElementById("box").src = images[i];
	}
	console.log(i);
}
function prev() {
	if (i != 0) {
		i--;
		document.getElementById("box").src = images[i];
	} else {
		i = images.length - 1;
		document.getElementById("box").src = images[i];
	}
	console.log(i);
}
