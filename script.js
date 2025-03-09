// Путь к изображениям
const imagePaths = [
  "/picture/restaurant-1.jpg",
  "/picture/restaurant-2.jpg",
  "/picture/restaurant-3.jpg",
  "/picture/restaurant-4.jpg",
];

let currentSlideshowIndex = 0;
const imageElement = document.getElementById("slidingImage");

// Функция смены изображения в слайдере
function changeSlideshowImage() {
  currentSlideshowIndex = (currentSlideshowIndex + 1) % imagePaths.length;
  imageElement.src = imagePaths[currentSlideshowIndex];
}

// Изменяем изображение каждые 2 секунды (2000 миллисекунд)
setInterval(changeSlideshowImage, 2000);

// Индекс текущего изображения в карусели
let currentCarouselIndex = 0;

// Функция смены изображения в карусели
function changeCarouselImage(direction) {
  const images = document.querySelectorAll(".carousel-inner img");

  // Скрываем текущее изображение
  images[currentCarouselIndex].classList.remove("active");

  // Обновляем текущий индекс изображения, проверяем на границы
  currentCarouselIndex =
    (currentCarouselIndex + direction + images.length) % images.length;

  // Показываем новое активное изображение
  images[currentCarouselIndex].classList.add("active");
}

// Инициализация карусели
document.addEventListener("DOMContentLoaded", function () {
  const carouselImages = document.querySelectorAll(".carousel-inner img");

  // Убедимся, что есть хотя бы одно изображение
  if (carouselImages.length > 0) {
    carouselImages[currentCarouselIndex].classList.add("active"); // Отобразим первое изображение

    // Добавляем обработчики событий на кнопки
    document.querySelector(".prev").addEventListener("click", function () {
      changeCarouselImage(-1);
    });

    document.querySelector(".next").addEventListener("click", function () {
      changeCarouselImage(1);
    });
  }
});
