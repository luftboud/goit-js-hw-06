const submitionAlert = "All fields must be filled!";
const form = document.querySelector("form");
function submitionFunction(event) {
  event.preventDefault();
  const userEmail = form.elements.email.value;
  const userPassword = form.elements.password.value;

  if (userEmail === "" || userPassword === "") {
    console.log(submitionAlert);
    return;
  }

  let formData = {
    email: userEmail,
    password: userPassword,
  };

  console.log(formData);
  form.reset();
}
form.addEventListener("submit", submitionFunction);
