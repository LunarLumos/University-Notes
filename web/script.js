// JavaScript for Slider Effect
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-images img');
const totalSlides = slides.length;

function changeSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    document.querySelector('.slider-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(changeSlide, 5000);

// JavaScript for Scroll to Top Button
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
