const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// étape 2 les flèches de navigation

// défintion des variables
const baliseArrowLeft = document.querySelector("#banner .arrow_left");
const baliseArrowRight = document.querySelector(".arrow_right");

// étape 3 les dots
const listeDots = document.querySelector(".dots");

// création des dots par images
for (let i=0; i < slides.length; i++) {
	let dot = document.createElement("div");
	dot.innerHTML = i;
	listeDots.appendChild(dot);
}

// étpae 4 Fonctoin pour faire défiler les images
let currentIndex = 0
let img = document.querySelector("banner-img")

// ajout de la tagline
let tagLine = document.getElementById("#banner p")


function defilerSlide (direction) {
	if(direction == "next") {
		currentIndex++
	}else if (direction == "prev") {
		currentIndex--
	}
	const image = document.createElement('image');
	img.src = `./assets/images/slideshow/$(slide[currentIndex].image)`;
	tagLine.innerHTML = slides[currentIndex].tagLine;

}



// Event // Intéraction des flèches avec les images // console.log("j'ai cliqué")

baliseArrowLeft.addEventListener("click", () => {
	console.log("j'ai cliqué g")
	defilerSlide("prev")
});


baliseArrowRight.addEventListener("click", () => {
	console.log("j'ai cliqué D")
	defilerSlide("next")
});







// étape 5 défilement infini


let listeImg = document.querySelector(".banner-img");
let listP = document.querySelector("#banner p");

for (let i=0; i < slides.lengh; i++) {
	let listeImg = slides [i] //image ?
}
if (listeImg === undefined) {
	afficherslider(listeImg [0])
}


for (let i=0; i < slides.lengh; i++) {
	let listeP = slides [i] //tagline ?
}
if (listeP === undefined) {
	afficherslider(listeImg [0])
}




// appelle de la fonction pour lancer le carroussel