const imagePaths = [
  "/picture/restaurant-1.jpg",
  "/picture/restaurant-2.jpg",
  "/picture/restaurant-3.jpg",
  "/picture/restaurant-4.jpg",
];

let currentSlideshowIndex = 0;
const imageElement = document.getElementById("slidingImage");
const carouselImages = document.querySelectorAll(".carousel-inner img");
let currentCarouselIndex = 0; // Переменную нужно определить здесь

// Функция смены изображения в слайдере
const changeSlideshowImage = () => {
  imageElement.src = imagePaths[currentSlideshowIndex];
  currentSlideshowIndex = (currentSlideshowIndex + 1) % imagePaths.length;
};

// Устанавливаем интервал смены изображений
setInterval(changeSlideshowImage, 2000);

// Инициализация карусели
document.addEventListener("DOMContentLoaded", () => {
  if (carouselImages.length > 0) {
    carouselImages[0].classList.add("active"); // Отобразим первое изображение

    document
      .querySelector(".prev")
      .addEventListener("click", () => changeCarouselImage(-1));
    document
      .querySelector(".next")
      .addEventListener("click", () => changeCarouselImage(1));

    // Показываем новое активное изображение при загрузке
    changeCarouselImage(0);
  }
});

// Функция смены изображения в карусели
const changeCarouselImage = (direction) => {
  // Скрываем текущее изображение
  carouselImages[currentCarouselIndex].classList.remove("active");

  // Обновляем текущий индекс изображения, проверяем на границы
  currentCarouselIndex =
    (currentCarouselIndex + direction + carouselImages.length) %
    carouselImages.length;

  // Показываем новое активное изображение
  carouselImages[currentCarouselIndex].classList.add("active");
};

// Обработчики событий для навигации
document
  .querySelector(".prev")
  .addEventListener("click", () => changeCarouselImage(-1));
document
  .querySelector(".next")
  .addEventListener("click", () => changeCarouselImage(1));
