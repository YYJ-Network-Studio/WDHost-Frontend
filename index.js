const themeToggle = document.querySelector('#theme');
const body = document.querySelector('body');
const footer = document.querySelector('footer');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  footer.classList.toggle('light-mode');
});
