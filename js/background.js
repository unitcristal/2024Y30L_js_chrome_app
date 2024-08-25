// const images = ["1.jpeg"];
// const chosen_image = images[Math.floor(Math.random() * images.length)];
// const img = document.createElement("img");
// img.src = `img/${chosen_image}`;
// document.body.appendChild(img);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const color1 = getRandomColor();
const color2 = getRandomColor();
const gradientBackground = document.createElement("div");
gradientBackground.className = "gradient-background";
gradientBackground.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

document.body.appendChild(gradientBackground);
