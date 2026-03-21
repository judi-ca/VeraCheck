// Apparition de la nav bar pour mobile
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



// ================================================

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("user-text");
  const button = document.getElementById("analyse-btn");

  let messagesContainer = document.getElementById("verification-messages");
  if (!messagesContainer) {
    messagesContainer = document.createElement("div");
    messagesContainer.id = "verification-messages";
    messagesContainer.className = "verification-messages";
    button.parentNode.insertBefore(messagesContainer, button.nextSibling);
  }

  async function verifyText(text) {
    const loadingBubble = document.createElement("div");
    loadingBubble.className = "bubble ia";
    loadingBubble.textContent = "Analyse en cours... ⏳";
    messagesContainer.appendChild(loadingBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    try {
      const response = await fetch("http://localhost:3000/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      loadingBubble.remove();

      const resultText = data.result.replace(/\r/g, "").trim();

      // --- EXTRACTION ---
      const verdictMatch = resultText.match(/\b(Vrai|Faux|Incertain)\b/i);
      const scoreMatch = resultText.match(/\bScore\s*[:\-]?\s*(\d{1,3})\b/i);

      let verdict = verdictMatch ? verdictMatch[1] : "Incertain";
      let score = scoreMatch ? scoreMatch[1] : "N/A";

      // Explication = tout le texte sauf verdict et score
      let explanation = resultText;

      if (verdictMatch) explanation = explanation.replace(verdictMatch[0], "");
      if (scoreMatch) explanation = explanation.replace(scoreMatch[0], "");
      explanation = explanation.replace(/[:\-]/g, "").trim(); // nettoyer les ":" ou "-"
      if (!explanation) explanation = "Non fournie";

      // Déterminer classe pour le style
      let verdictClass = "verdict-incertain";
      if (/Vrai/i.test(verdict)) verdictClass = "verdict-vrai";
      else if (/Faux/i.test(verdict)) verdictClass = "verdict-faux";

      // --- AFFICHAGE ---
      const bubble = document.createElement("div");
      bubble.className = "bubble ia";
      bubble.innerHTML = `
        <p><strong class="${verdictClass}">Verdict: ${verdict}</strong></p>
        <p><em>Explication: ${explanation}</em></p>
        <p class="score">Score: ${score}</p>
      `;
      messagesContainer.appendChild(bubble);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

    } catch (err) {
      loadingBubble.textContent = "Erreur serveur : impossible de vérifier";
      console.error(err);
    }
  }

  button.addEventListener("click", () => {
    const text = textarea.value.trim();
    if (!text) return alert("Veuillez entrer une information à vérifier.");
    verifyText(text);
  });
});