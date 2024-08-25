const colors = ["#2E8CD5", "#904FAE", "#EEBC12"];
// const body = document.createElement("body");
// const h2 = document.createElement("h2");

// h2.innerText = "Hello!";
// body.appendChild(h2);
// h2.style.color = "white";

// const win_size = window.innerWidth;
const constant = 400;

function change_background() {
  const win_size = window.innerWidth;

  if (win_size < constant) {
    document.body.style.backgroundColor = colors[0];
  } else if (win_size >= constant && win_size < constant * 2) {
    document.body.style.backgroundColor = colors[1];
  } else if (win_size >= constant * 2) {
    document.body.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", change_background);
