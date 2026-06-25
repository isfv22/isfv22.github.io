
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


function initSlideshows() {
  document.querySelectorAll('.slideshow').forEach(function (sw) {
    var slides = sw.querySelectorAll('.slide');
    if (slides.length < 2) { if (slides[0]) slides[0].classList.add('is-active'); return; }
    var interval = parseInt(sw.getAttribute('data-interval') || '4500', 10);
    var dotsWrap = sw.querySelector('.slide-dots');
    var idx = 0, timer = null, dots = [];
    slides[0].classList.add('is-active');
    if (dotsWrap) {
      slides.forEach(function (s, n) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Show slide ' + (n + 1));
        if (n === 0) b.classList.add('is-active');
        b.addEventListener('click', function () { show(n); restart(); });
        dotsWrap.appendChild(b); dots.push(b);
      });
    }
    function show(n) {
      slides[idx].classList.remove('is-active'); if (dots[idx]) dots[idx].classList.remove('is-active');
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add('is-active'); if (dots[idx]) dots[idx].classList.add('is-active');
    }
    function start() { timer = setInterval(function () { show(idx + 1); }, interval); }
    function restart() { if (timer) clearInterval(timer); start(); }
    sw.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
    sw.addEventListener('mouseleave', start);
    start();
  });
}
initSlideshows();

/* Chair / co-chair bio modals */
document.querySelectorAll('[data-bio-target]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var dlg = document.getElementById(btn.getAttribute('data-bio-target'));
    if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
  });
});
document.querySelectorAll('.bio-modal').forEach(function (dlg) {
  var closeBtn = dlg.querySelector('.bio-close');
  if (closeBtn) closeBtn.addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) {
    var r = dlg.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dlg.close();
  });
});
