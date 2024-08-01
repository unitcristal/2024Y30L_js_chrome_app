const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log("hello");
// }

// // setInterval(sayHello(), 2000);

// setTimeout(sayHello, 2000);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  //   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
