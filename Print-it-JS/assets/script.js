// Déclaration des slides
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
];


// Sélection des éléments du DOM
const bannerImg = document.querySelector('.banner-img'); // L'image principale
const tagline = document.querySelector('#banner p'); // Le texte de la bannière
const arrowLeft = document.querySelector('.arrow_left'); // Flèche gauche
const arrowRight = document.querySelector('.arrow_right'); // Flèche droite
const dotsContainer = document.querySelector('.dots'); // Conteneur des dots


let currentIndex = 0; // Index de la slide courante

// Initialisation du carrousel
function initCarousel() {
    // Crée les dots dynamiquement
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === currentIndex) {
            dot.classList.add('dot_selected'); // Sélectionne le premier dot
        }
        dot.addEventListener('click', () => showSlide(index)); // Ajout du clic sur le dot
        dotsContainer.appendChild(dot);
    });

    updateBanner(); // Mise à jour de l'image et du texte
}

// Mise à jour de l'image et du texte de la bannière
function updateBanner() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    tagline.innerHTML = slides[currentIndex].tagLine;

    // Mise à jour des dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Affichage de la slide à un index spécifique
function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1; // Retour à la dernière slide si on dépasse la première
    } else if (index >= slides.length) {
        currentIndex = 0; // Retour à la première slide si on dépasse la dernière
    } else {
        currentIndex = index;
    }

    updateBanner();
}

// Gestion des flèches de navigation
arrowLeft.addEventListener('click', () => {
    showSlide(currentIndex - 1); // Afficher la slide précédente
});

arrowRight.addEventListener('click', () => {
    showSlide(currentIndex + 1); // Afficher la slide suivante
});

// Initialisation du carrousel au chargement de la page
initCarousel();
