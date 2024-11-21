(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  const button = document.getElementById('submitButton');
  const usernameField = document.getElementById('usernameField');
  const emailField = document.getElementById('emailField');
  const passwordField = document.getElementById('passwordField');
  const phoneNumberField = document.getElementById('phoneNumberField');
  const dobField = document.getElementById('dobField');
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      let correctFields = 0;
      const currentDate = new Date();
      const dobFieldValue = new Date(dobField.value);
      const minAge = new Date().setFullYear(currentDate.getFullYear() - 18);
      const maxAge = new Date().setFullYear(currentDate.getFullYear() - 90);

      // no user name validation other than checking if it even has anything
      if (usernameField.value) {
        usernameField.classList.remove('is-invalid');
        usernameField.classList.add('is-valid');
        ++correctFields;
      }
      else {
        usernameField.classList.add('is-invalid');
        usernameField.classList.remove('is-valid');
      }

      // validate email regex, allow for possible non existing emails because there's no way to validate email from client side
      // but still discard the obvious invalid emails
      if (emailRegex.test(emailField.value)) {
        emailField.classList.remove('is-invalid');
        emailField.classList.add('is-valid');
        ++correctFields;
      }
      else {
        emailField.classList.add('is-invalid');
        emailField.classList.remove('is-valid');
      }

      // russian phone number regex calidation
      if (phoneRegex.test(phoneNumberField.value)) {
        phoneNumberField.classList.remove('is-invalid');
        phoneNumberField.classList.add('is-valid');
        ++correctFields;
      }
      else {
        phoneNumberField.classList.add('is-invalid');
        phoneNumberField.classList.remove('is-valid');
      }

      // no password validation other than checking if it even has anything
      if (passwordField.value) {
        passwordField.classList.remove('is-invalid');
        passwordField.classList.add('is-valid');
        ++correctFields;
      }
      else {
        passwordField.classList.add('is-invalid');
        passwordField.classList.remove('is-valid');
      }

      // date of birth validation using unix time and some basic math
      if (!isNaN(dobFieldValue) && currentDate > dobFieldValue && minAge > dobFieldValue && dobFieldValue > maxAge) {
        dobField.classList.remove('is-invalid');
        dobField.classList.add('is-valid');
        ++correctFields;
      }
      else {
        dobField.classList.add('is-invalid');
        dobField.classList.remove('is-valid');
      }

      // if all fields are validated, display an alert to let user know
      if (correctFields === 5) {
        alert("All fields are validated!");
      }

    }, false)
  });
})();