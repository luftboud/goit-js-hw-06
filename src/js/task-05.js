const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  output.textContent = "Anonymus";
  if (event.currentTarget.value !== "") {
    output.textContent = event.currentTarget.value;
  }
});
