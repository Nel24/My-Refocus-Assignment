const form = document.querySelector("#regForm");
const FnameField = document.querySelector(".FnameField");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("The Form is Submitted!");
  if (FnameField.value) {
    alert("Firt Name is True");
  } else {
    alert("No inputs!");
  }
});
