// Theme toggle with saved preference.
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
const savedTheme = localStorage.getItem('bushra-portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light-theme');

function updateThemeControl() {
  const isLight = document.body.classList.contains('light-theme');
  if (themeIcon) themeIcon.textContent = isLight ? '☾' : '☀';
  if (themeLabel) themeLabel.textContent = isLight ? 'Dark' : 'Light';
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.title = isLight ? 'Switch to dark theme' : 'Switch to light theme';
  }
}
updateThemeControl();
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('bushra-portfolio-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  updateThemeControl();
});

// Mobile navigation.
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav?.classList.toggle('open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
