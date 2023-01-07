window.addEventListener("keydown", (e) => {
	play(e.key);
});
function takeKey(x) {
	play(x.target.outerText);
}
function play(x) {
	if (x === "w") {
		let a = new Audio("Audio/sounds_crash.mp3");
		a.play();
	}
	if (x === "a") {
		var a = new Audio("Audio/sounds_tom-2.mp3");
		a.play();
	}
	if (x === "s") {
		let a = new Audio("Audio/sounds_tom-3.mp3");
		a.play();
	}
	if (x === "d") {
		let a = new Audio("Audio/sounds_tom-1.mp3");
		a.play();
	}
	if (x === "j") {
		let a = new Audio("Audio/sounds_snare.mp3");
		a.play();
	}
	if (x === "k") {
		let a = new Audio("Audio/sounds_tom-4.mp3");
		a.play();
	}
	if (x === "l") {
		let a = new Audio("Audio/sounds_kick-bass.mp3");
		a.play();
	}
}
