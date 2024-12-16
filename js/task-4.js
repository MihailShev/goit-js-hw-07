const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (
    formEl.elements.email.value.trim() === '' ||
    formEl.elements.password.value.trim() === '' ||
    formEl.elements.comment.value.trim() === ''
  ) {
    return alert(`All form fields must be filled in`);
  }

  const formData = {
    [formEl.elements.email.name]: formEl.elements.email.value,
    [formEl.elements.password.name]: formEl.elements.password.value,
    [formEl.elements.comment.name]: formEl.elements.comment.value,
  };

  formEl.reset();
});
