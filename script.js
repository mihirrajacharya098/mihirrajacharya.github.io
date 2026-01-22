// Cursor glow movement
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX - 60 + 'px';
  glow.style.top = e.clientY - 60 + 'px';
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
