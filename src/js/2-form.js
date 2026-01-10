let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
if (localStorage.getItem('feedback-form-state') != undefined) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = savedData.email ?? '';
  formData.message = savedData.message ?? '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', formInputHandler);

function formInputHandler(e) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData).trim());
}

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(e) {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }
}
