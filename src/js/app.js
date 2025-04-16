document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carrossel-slide');
    const prevButton = document.querySelector('.carrossel-prev');
    const nextButton = document.querySelector('.carrossel-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide); // Mostra o primeiro slide

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    let autoSlide = setInterval(nextSlide, 5000);

    const carrosselContainer = document.querySelector('.carrossel-container');
    carrosselContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carrosselContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
});
