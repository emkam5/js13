document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    function updateSlider() {
        const totalSlides = slides.length;
        const offset = -currentIndex * 100; // Вычисление смещения
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

        // Установка класса активного слайда
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length; // Переход к следующему слайду
        updateSlider();
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Переход к предыдущему слайду
        updateSlider();
    });

    // Автопрокрутка слайдов
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 5000); // Менять слайд каждые 5 секунд
});
