const to_do_form = document.querySelector("#todo_form");
const to_do_input = to_do_form.querySelector("#todo_input");
const to_do_list = document.querySelector("#todo_list");

function get_to_dos() {
  return JSON.parse(localStorage.getItem(selected_project)) || [];
}

function save_to_dos() {
  if (selected_project) {
    localStorage.setItem(selected_project, JSON.stringify(get_to_dos()));
  }
}

function delete_to_do(event) {
  const li = event.target.parentElement;
  const to_do_id = parseInt(li.id);
  const to_dos = get_to_dos().filter(function (to_do) {
    return to_do.id !== to_do_id;
  });
  localStorage.setItem(selected_project, JSON.stringify(to_dos));
  render_todo_list();
}

function paint_to_do(to_do) {
  const li = document.createElement("li");
  li.id = to_do.id;
  const span = document.createElement("span");
  span.innerText = to_do.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", delete_to_do);
  li.appendChild(span);
  li.appendChild(button);
  to_do_list.appendChild(li);
}

function render_todo_list() {
  to_do_list.innerHTML = "";
  const to_dos = get_to_dos();
  to_dos.forEach(paint_to_do);
}

function handle_todo_submit(event) {
  event.preventDefault();
  const new_to_do = to_do_input.value.trim();
  if (new_to_do !== "") {
    const to_dos = get_to_dos();
    const new_to_do_obj = {
      text: new_to_do,
      id: Date.now(),
    };
    to_dos.push(new_to_do_obj);
    localStorage.setItem(selected_project, JSON.stringify(to_dos));
    paint_to_do(new_to_do_obj);
    to_do_input.value = ""; // 입력 필드 초기화
  }
}

to_do_form.addEventListener("submit", handle_todo_submit);

if (selected_project) {
  render_todo_list();
}
