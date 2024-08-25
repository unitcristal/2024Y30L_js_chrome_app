let selected_project = null;

const form = document.querySelector("#project_form");
const input = document.querySelector("#project_input");
const project_list = document.querySelector("#project_list");
const error_message = document.createElement("div");
error_message.style.color = "red";
form.appendChild(error_message);

function render_project_list() {
  project_list.innerHTML = "";
  const projects = Object.keys(localStorage).filter(function (key) {
    return key !== "todos";
  });
  projects.forEach((project) => {
    const li = document.createElement("li");
    li.classList.add("project_item");

    const span = document.createElement("span");
    span.innerText = project;
    span.dataset.project_name = project;
    span.style.cursor = "pointer";
    span.addEventListener("click", () => {
      select_project(project);
      render_project_list();
    });

    const delete_button = document.createElement("button");
    delete_button.innerText = "X";
    delete_button.style.marginLeft = "10px";
    delete_button.addEventListener("click", (event) => {
      event.stopPropagation(); // 부모 요소의 클릭 이벤트가 실행되지 않도록 막음
      delete_project(project);
    });

    if (selected_project === project) {
      span.classList.add("selected");
    } else {
      span.classList.remove("selected");
    }

    li.appendChild(span);
    li.appendChild(delete_button);
    project_list.appendChild(li);
  });
}

function select_project(project) {
  selected_project = project;
  document.querySelector("#greeting").innerText = "Project: " + project;
  document.querySelector("#greeting").classList.remove("hidden");
  document.querySelector("#todo_form").classList.remove("hidden");
  render_todo_list();
}

function delete_project(project) {
  localStorage.removeItem(project); // 로컬 스토리지에서 프로젝트 삭제
  if (selected_project === project) {
    selected_project = null;
    document.querySelector("#greeting").classList.add("hidden");
    document.querySelector("#todo_form").classList.add("hidden");
    document.querySelector("#todo_list").innerHTML = ""; // To-Do 리스트 초기화
  }
  render_project_list();
}

function on_login_submit(e) {
  e.preventDefault();
  const project_name = input.value.trim();
  error_message.innerText = "";

  if (project_name === "") {
    error_message.innerText = "프로젝트 이름을 입력하세요.";
    return;
  }

  if (localStorage.getItem(project_name)) {
    error_message.innerText = "이미 존재하는 프로젝트입니다.";
    return;
  }

  localStorage.setItem(project_name, JSON.stringify([]));
  render_project_list();
  select_project(project_name);
  input.value = "";
}

form.addEventListener("submit", on_login_submit);
render_project_list();
