// *** CAROUSEL ***
// TODO
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const container = document.querySelector(".carousel__container");

prevButton.addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" }); // Faites défiler vers la gauche
});

nextButton.addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" }); // Faites défiler vers la droite
});