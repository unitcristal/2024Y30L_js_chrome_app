// get project name
const form = document.querySelector("#project_form");
const input = document.querySelector("#project_form input");
// which project is focused
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
// local storage contains {key, value} set
const PROJECTS_KEY = "projects";

function onLoginSubmit(e) {
  e.preventDefault();
  const typed = input.value;
  localStorage.setItem(PROJECTS_KEY, typed);
  paintGreetings(typed);
  input.value = "";
}

function paintGreetings(name) {
  greeting.innerText = `Project: ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saved_project = localStorage.getItem(PROJECTS_KEY);

if (saved_project === null) {
  form.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saved_project);
}

form.addEventListener("submit", onLoginSubmit);
