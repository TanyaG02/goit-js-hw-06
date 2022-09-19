const inputValid = document.querySelector("#validation-input");

const lengthEl = Number(inputValid.dataset.length);
inputValid.addEventListener("blur", onOutBlur);

function onOutBlur() {
  if (inputValid.value.length === lengthEl) {
    inputValid.classList.remove("invalid");
    return inputValid.classList.add("valid");
  } else {
    inputValid.classList.remove("valid");
    return inputValid.classList.add("invalid");
  }
}
