const btnDecrement = document.querySelectorAll("button")[0];

const btnIncrement = document.querySelectorAll("button")[1];

let counterValue = 0;

btnDecrement.addEventListener(`click`, (event) => {
  counterValue = counterValue - 1;
  const valueElem = document.querySelector(`span`);
  valueElem.textContent = counterValue;
});
btnIncrement.addEventListener(`click`, (event) => {
  counterValue += 1;
  const valueElem = document.querySelector(`span`);
  valueElem.textContent = counterValue;
});