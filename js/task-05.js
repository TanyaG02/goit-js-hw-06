const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInput = (event) => {
  output.textContent = event.currentTarget.value;
  event.currentTarget.value.trim() === ""
    ? (output.textContent = "Anonymous")
    : null;
};

input.addEventListener("input", onInput);
