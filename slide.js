const images = [
    "assets/1.jfif",
    "assets/2.jfif",
    "assets/3.jfif",
    "assets/4.jfif"
]

let current = 0;

const slideImage = document.getElementById("slide");

setInterval(() => {
    slideImage.style.opacity = 0;

    setTimeout(() => {
        current = (current + 1) % images.length;
        slideImage.src = images[current];
        slideImage.style.opacity = 1;
    }, 200);
}, 10000);