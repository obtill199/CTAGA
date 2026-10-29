document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
function closeMenu(returnFocus = false) {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = 'Menu';
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  closeMenu();
  if (link.hash && link.origin === location.origin && link.pathname === location.pathname) {
    const target = document.querySelector(link.hash);
    if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
  }
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('header.site') && nav.classList.contains('open')) closeMenu();
});
const desktop = matchMedia('(min-width: 1081px)');
desktop.addEventListener('change', () => closeMenu());
const filterBar = document.querySelector('.filter-bar');
const status = document.querySelector('.filter-status');
const events = [...document.querySelectorAll('.event')];
filterBar.hidden = false;
status.hidden = false;
filterBar.addEventListener('click', event => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  filterBar.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let visible = 0;
  events.forEach(item => {
    item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
    if (!item.hidden) visible++;
  });
  status.textContent = button.dataset.filter === 'all' ? `Showing all ${visible} events` : `Showing ${visible} events · ${button.textContent}`;
});
