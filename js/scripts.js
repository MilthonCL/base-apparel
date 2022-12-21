const form = document.getElementById('form');
// const submitButton = document.getElementById('submitButton');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorIcon = document.getElementById('error-icon');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('clic');

  if (validateEmail(email.value)) {
    errorIcon.style.display = 'none';
    message.style.display = 'none';
    form.submit();
  } else {
    errorIcon.style.display = 'block';
    message.style.display = 'block';
  }
});

const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email)) return true;
  else return false;
};
