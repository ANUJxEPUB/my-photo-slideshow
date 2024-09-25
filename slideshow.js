const slidesContainer = document.querySelector('.slideshow-container');
let currentSlide = 0;
let images = [];

// Load images dynamically
function loadImages() {
    images = [
        'images/photo1.jpg',
        'images/photo2.jpg',
        'images/photo3.jpg',
        // Add more photo file names here
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

// Smooth transition for changing slides
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

// Automatic slideshow interval
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Load the images and start the slideshow
loadImages();

// Manual control buttons
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);
