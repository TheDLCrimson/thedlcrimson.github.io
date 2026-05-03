// ─── Scroll Fade-In ───────────────────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));

// ─── Bread Easter Egg 🍞 ──────────────────────────────────────────
const breadBtn = document.getElementById('bread-egg');
const toast    = document.getElementById('bread-toast');
let toastTimer = null;

breadBtn.addEventListener('click', () => {
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4500);
});

// ─── Cursor Trail ─────────────────────────────────────────────────
document.addEventListener('mousemove', (e) => {
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  dot.style.left = e.clientX + 'px';
  dot.style.top  = e.clientY + 'px';
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 600);
});
