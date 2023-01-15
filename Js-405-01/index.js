let dummy = [...countries_data];
dummy = dummy.sort((a, b) => {
	return b.population - a.population;
});
let totalPop = dummy.reduce((p, e) => {
	p += e.population;
	return p;
}, 0);
console.log(totalPop);
let sss = [{ lang: "", told: 0 }];
let lang = [];
countries_data.map((e) => {
	lang.push(
		...e.languages.map((l) => {
			return l;
		})
	);
});
lang.map((e) => {
	let isPresent = sss.findIndex((i) => {
		return i.lang === e;
	});
	if (isPresent === -1) {
		sss.push({ lang: e, told: 1 });
	} else {
		sss[isPresent].told++;
	}
});
let dum = sss.sort((a, b) => {
	return b.told - a.told;
});

console.log(dum);
console.log(dummy);
// let max = dummy[0].population/
let container = document.getElementById("container");
let gl = false;
let gp = false;
let stat = document.getElementById("stat");
const getPopulation = () => {
	document.getElementById("rowss").style.display = "flex";

	if (gl) {
		for (let i = 0; i < 10; i++) {
			let row = document.getElementById("row");
			container.removeChild(row);
		}
	}

	stat.innerText = "10 Most populated countries in the world";
	for (let i = 0; i < 10; i++) {
		let div = document.createElement("div");
		div.setAttribute("class", "row");
		div.setAttribute("id", "row");
		div.innerHTML = `
                        
                        <p class="name" id="name">${dummy[i].name}</p>
                        <a href="https://en.wikipedia.org/wiki/${
							dummy[i].name
						}" id="width" class="width">
                            <div class="percent" style="width:${
								(dummy[i].population / totalPop) * 100
							}% "></div>
                        </a>
                        <div class="number">${dummy[i].population}</div>
                    
            `;
		container.appendChild(div);
		gl = true;
	}
};

const getLanguages = () => {
	document.getElementById("rowss").style.display = "none";
	for (let i = 0; i < 10; i++) {
		let row = document.getElementById("row");
		container.removeChild(row);
	}
	stat.innerText = "10 Most Spoken languages in the world";
	for (let i = 0; i < 10; i++) {
		let div = document.createElement("div");
		div.setAttribute("class", "row");
		div.setAttribute("id", "row");
		div.innerHTML = `
                    
                    <p class="name" id="name">${dum[i].lang}</p>
                    <a href="https://en.wikipedia.org/wiki/${dum[i].lang}" id="width" class="width">
                        <div class="percent" style="width:${dum[i].told}% "></div>
                    </a>
                    <div class="number">${dum[i].told}</div>
                
        `;
		container.appendChild(div);
	}
};

for (let i = 0; i < 10; i++) {
	let div = document.createElement("div");
	div.setAttribute("class", "row");
	div.setAttribute("id", "row");
	div.innerHTML = `
                    
                    <p class="name" id="name">${dummy[i].name}</p>
                    <a href="https://en.wikipedia.org/wiki/${
						dummy[i].name
					}" id="width" class="width">
                        <div title="${dummy[i].name} speaks ${
		dummy[i].languages[0]
	}" class="percent" style="width:${
		(dummy[i].population / totalPop) * 100
	}% "></div>
                    </a>
                    <div class="number">${dummy[i].population}</div>
                
        `;
	container.appendChild(div);
	gl = true;
}
