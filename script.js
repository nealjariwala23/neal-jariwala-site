/* EDIT THESE VALUES BEFORE PUBLISHING. Do not invent public links. */
const CONFIG = {
  email: '', // e.g. 'hello@yourdomain.com'
  github: '', // e.g. 'https://github.com/your-username'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-profile/'
  projects: {
    'monte-carlo': '',
    'covid': '',
    'quiz': '',
    'prism': ''
  }
};

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

const isHttpUrl = (value) => {
  try { const u = new URL(value); return ['https:', 'http:'].includes(u.protocol); }
  catch { return false; }
};
const setExternalLink = (selector, url) => {
  const link = document.querySelector(selector);
  if (!link) return;
  if (isHttpUrl(url)) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.removeAttribute('href');
    link.setAttribute('aria-disabled', 'true');
    link.classList.add('disabled');
    link.title = 'Link coming soon';
  }
};
setExternalLink('#github-link', CONFIG.github);
setExternalLink('#linkedin-link', CONFIG.linkedin);
setExternalLink('[data-profile-link="github"]', CONFIG.github);
document.querySelectorAll('[data-project]').forEach(link => {
  const url = CONFIG.projects[link.dataset.project];
  if (isHttpUrl(url)) {
    link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
  } else {
    link.removeAttribute('href'); link.classList.add('disabled');
    link.setAttribute('aria-disabled', 'true'); link.title = 'Public project link coming soon';
    link.textContent = 'Public link coming soon';
  }
});
const emailLink = document.querySelector('#email-link');
if (CONFIG.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email)) {
  emailLink.href = `mailto:${CONFIG.email}`;
} else {
  emailLink.removeAttribute('href');
  emailLink.classList.add('disabled');
  emailLink.setAttribute('aria-disabled', 'true');
  emailLink.title = 'Add your email in script.js';
  emailLink.textContent = 'Email coming soon';
}

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: .09 }) : null;
document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(section => activeObserver.observe(section));
}
document.querySelector('#year').textContent = new Date().getFullYear();

/* Resume file: add your actual PDF to assets/resume.pdf. */
