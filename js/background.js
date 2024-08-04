const images = ["1.jpeg"];
const chosen_image = images[Math.floor(Math.random() * images.length)];
const img = document.createElement("img");

img.src = `img/${chosen_image}`;
document.body.appendChild(img);
