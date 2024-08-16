// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const title = document.querySelector("h2");
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  title_enter() {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  title_leave() {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  window_resize() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  window_right_click(event) {
    event.preventDefault();
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.title_enter);
title.addEventListener("mouseleave", superEventHandler.title_leave);
window.addEventListener("resize", superEventHandler.window_resize);
window.addEventListener("contextmenu", superEventHandler.window_right_click);
