// Mobile navigation toggle on scroll
let lastScroll = 0;
const nav = document.querySelector(".mobile-nav");
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (Math.abs(currentScroll - lastScroll) < 10) return;
  if (currentScroll > lastScroll) {
    nav?.classList.add("hide");
  } else {
    nav?.classList.remove("hide");
  }
  lastScroll = currentScroll;
});

// Toggle course content expansion with animation
function toggleCard(btn) {
  const card = btn.closest('.cours_card');
  const content = card?.querySelector('.card-content');
  const icon = btn?.querySelector('i');

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

function toggleFAQ(item) {
  if (!item) return;
  item.classList.toggle('active');
}

function getVerdict(text) {
  const suspiciousKeywords = ['vaccin', '5g', 'puce', 'illuminati', 'fake', 'arnaque', 'mensonge', 'canular', 'secret', 'complot'];
  const likelyTrueKeywords = ['tour eiffel', 'paris', 'france', '1989', 'sénat', 'ministère', 'selon', 'euro'];
  const containsSuspicious = suspiciousKeywords.some(keyword => text.includes(keyword));
  const containsLikelyTrue = likelyTrueKeywords.some(keyword => text.includes(keyword));

  if (containsLikelyTrue && !containsSuspicious) {
    return {
      type: 'true',
      title: '✅ Information probable',
      message: 'Cette affirmation ressemble à une information vérifiable. Consultez toujours des sources fiables pour confirmer.',
      tip: 'Vérifiez la source et recherchez la même affirmation sur plusieurs sites officiels.'
    };
  }

  if (containsSuspicious) {
    return {
      type: 'false',
      title: '❌ Information suspecte',
      message: 'Cette affirmation contient des indices de désinformation. Soyez vigilant et vérifiez avant de partager.',
      tip: 'Cherchez des sources indépendantes et attention aux titres émotionnels.'
    };
  }

  return {
    type: 'uncertain',
    title: '⚠️ Information douteuse',
    message: 'Le contenu semble incertain. Il mérite une vérification plus approfondie.',
    tip: 'Comparez-le avec des sites de fact-checking et recherchez plusieurs sources indépendantes.'
  };
}

function analyseText() {
  const textarea = document.getElementById('user-text');
  const resultContainer = document.getElementById('verification-result');
  if (!textarea || !resultContainer) return;

  const text = textarea.value.trim();
  if (!text) {
    resultContainer.innerHTML = `<div class="verification-result error"><h2>⚠️ Entrez un texte à analyser</h2><p>Veuillez taper une affirmation ou une rumeur dans la zone de texte.</p></div>`;
    return;
  }

  const verdict = getVerdict(text.toLowerCase());
  resultContainer.innerHTML = `
    <div class="verification-result ${verdict.type}">
      <h2>${verdict.title}</h2>
      <p>${verdict.message}</p>
      <p><strong>Astuce :</strong> ${verdict.tip}</p>
    </div>
  `;
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
  document.querySelectorAll('.card, .step, .cours_card, .mode-card, .faq-item').forEach(el => {
    if (el instanceof Element) observer.observe(el);
  });

  const analyseBtn = document.getElementById('analyse-btn');
  if (analyseBtn) {
    analyseBtn.addEventListener('click', analyseText);
  }
});

