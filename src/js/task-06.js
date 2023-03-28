const textInput = document.querySelector("#validation-input");
const requestedLength = textInput.getAttribute("data-length");
textInput.addEventListener("blur", (event) => {
  textInput.classList.add("invalid");
  if (event.currentTarget.value.length === Number(requestedLength)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
    return;
  }
  textInput.classList.remove("valid");
});
