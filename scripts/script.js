document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.top-section');

    const images = [
        './images/hero.jpg',
        './images/hero2.jpg',
        './images/hero3.jpg'
    ];

    let currentImage = 0;

    setInterval(() => {
        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        hero.style.backgroundImage = `url('${images[currentImage]}')`;
    }, 3000);
});