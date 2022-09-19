const counterValue = {
  value: 0,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

const incremBtn = document.querySelector("[data-action=increment]");
const decremBtn = document.querySelector("[data-action=decrement]");
const valueEl = document.querySelector("#value");

incremBtn.addEventListener("click", function () {
  console.log("клик на инкремент");
  counterValue.increment();
  console.log(counter);
  valueEl.textContent = counterValue.value;
});

decremBtn.addEventListener("click", function () {
  console.log("клик на декремент");
  counterValue.decrement();
  console.log(counter);
  valueEl.textContent = counterValue.value;
});
