const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = Array.from(track.children);

let currentIndex = 0; 


const imageWidth = images[0].offsetWidth; 


function updateCarousel() {
    track.style.transition = 'transform 0.5s ease-in-out'; 
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}


nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 4) { 
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateCarousel();
});


prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 4; 
    }
    updateCarousel();
});