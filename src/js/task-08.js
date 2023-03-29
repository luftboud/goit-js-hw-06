const submitionAlert = "All fields must be filled!";
const form = document.querySelector("form");
const theEmail = document.querySelector('input[name="email"]');
const thePassword = document.querySelector('input[name="password"]');
const showAlert = (issueLocation) => {
  console.log(submitionAlert);
  const alertForCustomer = document.createElement("p");
  alertForCustomer.textContent = submitionAlert;
  alertForCustomer.style.margin = "0";
  alertForCustomer.style.fontSize = "12px";
  alertForCustomer.style.color = "red";
  issueLocation.after(alertForCustomer);
};
function submitionFunction(event) {
  event.preventDefault();
  const userEmail = form.elements.email.value;
  const userPassword = form.elements.password.value;

  if (userEmail === "") {
    showAlert(theEmail);
    return;
  } else if (userPassword === "") {
    showAlert(thePassword);
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
