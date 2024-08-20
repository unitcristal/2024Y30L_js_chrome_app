// const set = document.querySelector("#event_set");
const form = document.querySelector("#event_form");
// const event_input = document.querySelector("#event_form input");
const result = document.querySelector("#event_result");
const first_input = document.querySelector("#event_form div:first-child input");
const second_input = document.querySelector("#event_form div:last-child input");
const result_first_span = document.querySelector(
  "#event_result span:first-child"
);
const result_second_span = document.querySelector(
  "#event_result span:last-child"
);

function on_submit(event) {
  event.preventDefault();
  //   const number_game = event_input.value;

  //   console.log(first.value);
  //   console.log(second.value);
  const first_value = parseInt(first_input.value);
  const second_value = parseInt(second_input.value);
  const random_value = Math.floor(Math.random() * first_value) + 1;

  if (first_value < second_value) {
    alert("guessing number should equal or less than game number");
    return;
  }

  result.classList.remove("hidden");
  result_first_span.innerText = `You chose: ${second_value}, the machine chose: ${random_value}`;

  if (second_value === random_value) {
    result_second_span.innerText = "You won!";
  } else {
    result_second_span.innerText = "You lost!";
  }
}

form.addEventListener("submit", on_submit);
