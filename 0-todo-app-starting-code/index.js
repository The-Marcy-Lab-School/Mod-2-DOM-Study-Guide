// handle form submissions
const handleSubmit = (e) => {
  // stop the reload/redirect
  e.preventDefault();

  // the FormData API makes it SUPER easy to get an object with all form data with 2 steps:
  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData);

  // Checkbox data in the formObj will either be "on" or undefined
  // We can convert those values to true/false
  formObj.isComplete = !!formObj.isComplete

  console.log('here is your data:', formObj);

  // do something with the form
  const list = document.querySelector("#todo-list")
  const li = document.createElement('li');
  li.textContent = `${formObj.todo} - ${formObj.isComplete ? "Complete" : "Incomplete"}`
  list.append(li);

  li.dataset.isComplete = formObj.isComplete;
  // li.setAttribute('data-is-complete', formObj.isComplete)

  e.target.reset(); // reset the form
}

const main = () => {
  // initialize everything / general setup
  const form = document.querySelector('#todo-form');
  form.addEventListener('submit', handleSubmit);
}

main();