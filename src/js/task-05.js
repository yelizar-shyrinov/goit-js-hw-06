 const inputRef = document.querySelector(`#name-input`);
 const outputRef = document.querySelector(`#name-output`); 
  inputRef.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    outputRef.textContent = inputValue.trim() === "" ? `Anonymous`: `${inputValue}`;   
});