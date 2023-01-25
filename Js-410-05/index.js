let container = document.getElementById("container");
const fetching = () => {
	fetch(`https://api.quotable.io/random`)
		.then((res) => res.json())
		.then(
			(res) =>
				(container.innerHTML = `
    			<p class="pquotes">
				<span class="big">“</span>
				${res.content}
				<span class="big">”</span>
			</p>
			<p class="ppoet">~ ${res.author}</p>
			<hr />
			<div class="instructions">
				<p class="img"><img src="twitter.png" alt="" srcset="" /></p>
				<button onclick="fetching()">Next quote</button>
			</div>`)
		)
		.catch((err) => console.error(err));
};
