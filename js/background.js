const images = [];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const img = document.createElement("img");

img.src = `img/${chosenImage}`;
document.body.appendChild(img);
