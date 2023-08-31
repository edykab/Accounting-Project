document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration-form");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();


  });
});


// Gets the registration form element
const registrationForm = document.getElementById("registration-form");

// Adds a submit event listener to the form
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Creates an object to store user data
  const userData = {
    firstName,
    lastName,
    email,
    password
  };

  // Stores user data in local storage
  localStorage.setItem("userData", JSON.stringify(userData));

  // Clears the form
  registrationForm.reset();

  // Displays a success message (you can customize this)
  alert("Registration successful!");
});
