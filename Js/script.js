// Mobile navigation toggle on scroll
let lastScroll = 0;
const nav = document.querySelector(".mobile-nav");
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (Math.abs(currentScroll - lastScroll) < 10) return;
  if (currentScroll > lastScroll) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }
  lastScroll = currentScroll;
});

// Toggle course content expansion with animation
function toggleCard(btn) {
  const card = btn.closest('.cours_card');
  const content = card.querySelector('.card-content');
  const icon = btn.querySelector('i');

  if (!content) return;

  const isOpen = content.classList.contains('show');

  if (isOpen) {
    content.classList.remove('show');
    if (icon) icon.style.transform = 'rotate(0deg)';
  } else {
    content.classList.add('show');
    if (icon) icon.style.transform = 'rotate(90deg)';
  }
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card, .step, .cours_card').forEach(el => {
    observer.observe(el);
  });
});

