const slidesContainer = document.querySelector('.slideshow-container');
let currentSlide = 0;
let images = [];

function loadImages() {
    images = [
        'images/photo1.jpg',
        'images/photo2.jpg',
        'images/photo3.jpg',
    ];

    images.forEach((image, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');
        slideDiv.style.backgroundImage = `url(${image})`;
        if (index === 0) {
            gsap.set(slideDiv, { opacity: 1 });
        }
        slidesContainer.appendChild(slideDiv);
    });
}

function showSlide(nextSlide) {
    const slides = document.querySelectorAll('.slide');

    gsap.to(slides[currentSlide], {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
            currentSlide = nextSlide;
            gsap.to(slides[currentSlide], {
                opacity: 1,
                duration: 1.5,
                ease: "power2.inOut"
            });
        }
    });
}

function nextSlide() {
    const nextSlideIndex = (currentSlide + 1) % images.length;
    showSlide(nextSlideIndex);
}

function prevSlide() {
    const prevSlideIndex = (currentSlide - 1 + images.length) % images.length;
    showSlide(prevSlideIndex);
}

setInterval(nextSlide, 5000); 

loadImages();

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);
