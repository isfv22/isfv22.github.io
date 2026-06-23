
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('.has-dropdown .dropdown-toggle').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const parent = button.closest('.has-dropdown');
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    parent.classList.toggle('open');
  });
});
