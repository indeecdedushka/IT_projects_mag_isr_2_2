let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= document.querySelectorAll('.slide').length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slide').length - 1;
    }
    showSlide(slideIndex);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}
