// Quiz Data
const quizData = {
  easy: [
    { q: "Quel est le premier signe d'une fausse info?", options: ["Titres sensationnalistes", "Grammatical error", "Image floue", "Lien court"], correct: 0, explanation: "Les titres sensationnalistes ou émotionnels sont souvent le premier signe d'une fausse information." },
    { q: "Comment vérifier une image?", options: ["Recherche inversée", "Zoom", "Imprimer", "Partager"], correct: 0, explanation: "La recherche inversée (Google Images, TinEye) permet de trouver l'origine d'une image." },
    { q: "Qu'est-ce que le fact-checking?", options: ["Vérifier les faits", "Écrire les news", "Prendre des photos", "Publier"], correct: 0, explanation: "Le fact-checking est le processus de vérification des faits avant publication." },
    { q: "Les réseaux sociaux amplifient les fausses infos via:", options: ["Les bots", "La vitesse", "Les émotions", "Tous les précédents"], correct: 3, explanation: "Les trois facteurs combinés amplifient la propagation des fausses informations." },
    { q: "Avant de partager, tu dois:", options: ["Lire l'article", "Vérifier la source", "Demander à d'autres", "Tous les précédents"], correct: 3, explanation: "Une bonne pratique consiste à faire tous ces contrôles avant de partager." },
    { q: "Quel est un site fiable de fact-checking?", options: ["Snopes", "Random Blog", "Meme Site", "Forums"], correct: 0, explanation: "Snopes est un site reconnu de fact-checking basé aux États-Unis." },
    { q: "Les deepfakes peuvent imiter:", options: ["Les vidéos", "Les voix", "Les images", "Tous les précédents"], correct: 3, explanation: "L'IA peut créer des deepfakes en vidéo, voix et images." },
    { q: "Qu'est-ce qu'une source primaire?", options: ["Information directe", "Résumé d'un livre", "Article Wikipedia", "Comment"], correct: 0, explanation: "Une source primaire est une information directe et originale." },
    { q: "Comment détecter un contenu payant mensonger?", options: ["Vérifier les sponsors", "Chercher les liens", "Lire les petits caractères", "Tous les précédents"], correct: 3, explanation: "Il faut vérifier tous ces éléments pour identifier les contenus payants mensongers." },
    { q: "Quel est le meilleur conseil contre la désinformation?", options: ["Penser critiquement", "Vérifier les sources", "Ne pas partager rapidement", "Tous les précédents"], correct: 3, explanation: "Une combinaison d'esprit critique et de vérification est la meilleure défense." }
  ],
  medium: [
    { q: "Les bulles de filtre créent:", options: ["Échos de confirmation", "Isolation informationnelle", "Polarisation", "Tous les précédents"], correct: 3, explanation: "Les bulles de filtre créent une isolation informationnelle qui renforce les croyances existantes." },
    { q: "Un algorithme de désinformation cible généralement:", options: ["Les émotions", "L'engagement", "La viralité", "Tous les précédents"], correct: 3, explanation: "Les algorithmes ciblent l'engagement émotionnel pour maximiser la viralité." },
    { q: "Comment identifier une image manipulée?", options: ["Ombres incohérentes", "Bords bizarres", "Compression anormale", "Tous les précédents"], correct: 3, explanation: "Il faut chercher plusieurs signes de manipulation dans une image." },
    { q: "Le contexte est important pour:", options: ["Vérifier les images", "Comprendre les citations", "Évaluer les dates", "Tous les précédents"], correct: 3, explanation: "Le contexte est crucial pour tous ces aspects de la vérification." },
    { q: "Qu'est-ce que le 'context collapse'?", options: ["Perte de contexte sur réseaux", "Crashing d'app", "Fin d'internet", "Blocage"], correct: 0, explanation: "Le context collapse survient quand du contenu perd son contexte original sur réseaux." },
    { q: "Les bots sociaux sont utilisés pour:", options: ["Amplifier les mensonges", "Créer du consensus faux", "Influencer les tendances", "Tous les précédents"], correct: 3, explanation: "Les bots automatisés sont utilisés à plusieurs fins de désinformation." },
    { q: "Comment vérifier la fiabilité d'une source?", options: ["Transparence financière", "Historique de corrections", "Expertise reconnue", "Tous les précédents"], correct: 3, explanation: "Évaluer une source sur plusieurs critères est essentiel." },
    { q: "Les deepfakes sont détectables par:", options: ["Artefacts visuels", "Analyse audio", "Logiciels spécialisés", "Tous les précédents"], correct: 3, explanation: "Plusieurs méthodes peuvent détecter les deepfakes." },
    { q: "La vérification croisée implique:", options: ["Plusieurs sources", "Contexte différent", "Experts", "Tous les précédents"], correct: 3, explanation: "La vérification croisée crédible requiert plusieurs sources indépendantes." },
    { q: "Un indice de fausse info est quand:", options: ["Pas de source citée", "Imprécision des dates", "Appel à partager vite", "Tous les précédents"], correct: 3, explanation: "Ces trois éléments sont des signaux d'alerte courants." },
    { q: "L'audio peut être manipulé via:", options: ["Synthèse vocale", "Doublage", "Remix", "Tous les précédents"], correct: 3, explanation: "L'IA peut modifier, synthétiser ou créer du contenu audio faux." },
    { q: "Les médias traditionnels sont plus fiables quand:", options: ["Éditorial rigoureux", "Vérification d'experts", "Code déontologique", "Tous les précédents"], correct: 3, explanation: "La fiabilité repose sur ces trois piliers institutionnels." },
    { q: "La désinformation se propage plus vite que:", options: ["Les vraies infos", "La vitesse de la lumière", "Les rumeurs vraies", "Tous les précédents"], correct: 2, explanation: "Les études montrent que la désinformation se propage plus rapidement." },
    { q: "Les fact-checkers utilisent généralement:", options: ["Vérification des sources", "Timeline reconstruction", "Expert interviews", "Tous les précédents"], correct: 3, explanation: "Les fact-checkers emploient une approche multidimensionnelle." },
    { q: "La pensée critique implique:", options: ["Questionner", "Vérifier", "Analyser", "Tous les précédents"], correct: 3, explanation: "La pensée critique combine questionnement, vérification et analyse." }
  ],
  hard: [
    { q: "La epistemologie de la désinformation étudie:", options: ["Comment on sait", "Qui sait quoi", "Limites de la connaissance", "Tous les précédents"], correct: 3, explanation: "La désinformation remet en question la nature même de la connaissance." },
    { q: "Les coordinated campaigns impliquent:", options: ["Planification organisée", "Réseau de bots", "Distribution multi-plateformes", "Tous les précédents"], correct: 3, explanation: "Les campagnes coordonnées utilisent plusieurs tactiques simultanément." },
    { q: "Le fact-checking peut échouer si:", options: ["Confirmation bias", "Radicalization", "Back-fire effect", "Tous les précédents"], correct: 3, explanation: "Plusieurs facteurs psychologiques peuvent réduire l'efficacité du fact-checking." },
    { q: "Les manipulation images avancées utilisent:", options: ["GAN", "Machine learning", "Morphing", "Tous les précédents"], correct: 3, explanation: "La technologie IA rend la détection de manipulation extrêmement difficile." },
    { q: "La désinformation géopolitique cible:", options: ["Élections", "Opinion publique", "Stabilité", "Tous les précédents"], correct: 3, explanation: "La désinformation d'État cible plusieurs niveaux de la société." },
    { q: "Les micro-ciblages exploitent:", options: ["Données personnelles", "Psychographiques", "Comportements", "Tous les précédents"], correct: 3, explanation: "Les acteurs malveillants utilisent toutes les données disponibles." },
    { q: "La résilience informationnelle nécessite:", options: ["Littératie médias", "Pensée critique", "Infrastructure fiable", "Tous les précédents"], correct: 3, explanation: "La résilience repose sur plusieurs piliers." },
    { q: "Les autorités combattent la désinformation via:", options: ["Régulation", "Transparence", "Éducation", "Tous les précédents"], correct: 3, explanation: "Une approche multidimensionnelle est nécessaire pour lutter efficacement." },
    { q: "Les études sur la polarisation montrent:", options: ["Fragmentations idéologiques", "Radicalisation online", "Echo chambers", "Tous les précédents"], correct: 3, explanation: "La polarisation est multidimensionnelle et complexe." },
    { q: "La métacognition aide à:", options: ["Comprendre notre biais", "Évaluer nos croyances", "Améliorer la critique", "Tous les précédents"], correct: 3, explanation: "La conscience de nos propres processus de pensée est cruciale." },
    { q: "Les réseaux de désinformation utilisent:", options: ["Influenceurs", "Faux comptes", "Contenus recyclés", "Tous les précédents"], correct: 3, explanation: "Les réseaux utilisent une combinaison sophistiquée de tactiques." },
    { q: "La vérification de source avancée implique:", options: ["Archivage web", "Metadata analysis", "Chain of custody", "Tous les précédents"], correct: 3, explanation: "La vérification professionnelle utilise des techniques avancées." },
    { q: "Le contexte sociopolitique affecte:", options: ["Acceptation de fausses infos", "Viralité du contenu", "Efficacité du fact-check", "Tous les précédents"], correct: 3, explanation: "Le contexte social influence tous les aspects de la désinformation." },
    { q: "Les technologies d'IA peuvent:", options: ["Créer des deepfakes", "Détecter la désinformation", "Prédire la viralité", "Tous les précédents"], correct: 3, explanation: "L'IA est une arme à double tranchant dans la lutte contre la désinformation." },
    { q: "La future défense contre la désinformation nécessite:", options: ["Collaboration internationale", "Innovation technologique", "Engagement civique", "Tous les précédents"], correct: 3, explanation: "Un effort coordonné et multidimensionnel est essentiel pour le futur." },
    { q: "Le chaos informationnel arrive quand:", options: ["Perte de confiance", "Surcharge info", "Fragmentation vérité", "Tous les précédents"], correct: 3, explanation: "Le chaos informationnel résulte de plusieurs facteurs combinés." },
    { q: "Les standards de vérification incluent:", options: ["Reproducibilité", "Transparence", "Rigueur", "Tous les précédents"], correct: 3, explanation: "Les normes scientifiques s'appliquent aussi à la vérification." },
    { q: "La responsabilité des plateformes implique:", options: ["Modération", "Transparence algorithme", "Données chercheurs", "Tous les précédents"], correct: 3, explanation: "Les plateformes ont plusieurs responsabilités clés." },
    { q: "La désinformation attaque:", options: ["Faits", "Logique", "Émotions", "Tous les précédents"], correct: 3, explanation: "La désinformation sophistiquée cible tous les niveaux de compréhension." },
    { q: "La immunité informationnelle vient de:", options: ["Éducation", "Expérience", "Scepticisme", "Tous les précédents"], correct: 3, explanation: "L'immunité informationnelle se construit progressivement." }
  ]
};

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let startTime = 0;
let timerInterval = null;

function startQuiz(difficulty) {
  currentQuiz = [...quizData[difficulty]];
  currentQuestion = 0;
  score = 0;
  correctAnswers = 0;
  startTime = Date.now();

  document.querySelector('.mode-selection').style.display = 'none';
  document.getElementById('quizContainer').classList.remove('hide');

  displayQuestion();
  startTimer();
}

function displayQuestion() {
  if (currentQuestion >= currentQuiz.length) {
    endQuiz();
    return;
  }

  const q = currentQuiz[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuiz.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('questionCounter').textContent = `${currentQuestion + 1}/${currentQuiz.length}`;

  let optionsHTML = q.options.map((opt, i) =>
    `<div class="quiz-option" onclick="selectAnswer(${i})">${opt}</div>`
  ).join('');

  document.getElementById('questionCard').innerHTML = `
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">${optionsHTML}</div>
  `;
}

function selectAnswer(index) {
  const q = currentQuiz[currentQuestion];
  if (index === q.correct) {
    correctAnswers++;
    score += 10;
  }
  currentQuestion++;
  setTimeout(displayQuestion, 300);
}

function startTimer() {
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timerDisplay').textContent =
      `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, 100);
}

function endQuiz() {
  clearInterval(timerInterval);
  const totalTime = Math.floor((Date.now() - startTime) / 1000);
  const percentage = (correctAnswers / currentQuiz.length) * 100;
  let resultTitle = '';

  if (percentage >= 90) resultTitle = '🌟 Excellent! Expert confirmé';
  else if (percentage >= 75) resultTitle = '👍 Très bien! Bon travail';
  else if (percentage >= 60) resultTitle = '📚 Bien! Vous apprenez';
  else resultTitle = '💪 Continuez vos efforts';

  document.getElementById('quizContainer').classList.add('hide');
  document.getElementById('resultsContainer').classList.remove('hide');
  document.getElementById('finalScore').textContent = Math.round(percentage) + '%';
  document.getElementById('resultTitle').textContent = resultTitle;
  document.getElementById('correctCount').textContent = correctAnswers + '/' + currentQuiz.length;
  document.getElementById('wrongCount').textContent = (currentQuiz.length - correctAnswers) + '/' + currentQuiz.length;

  const min = Math.floor(totalTime / 60);
  const sec = totalTime % 60;
  document.getElementById('totalTime').textContent = `${min}:${String(sec).padStart(2, '0')}`;

  let feedbackHTML = '';
  currentQuiz.forEach((q, i) => {
    const userCorrect = i < correctAnswers ? 'Correct ✓' : 'Incorrect ✗';
    feedbackHTML += `<div class="feedback-item">
      <div class="feedback-question">Q${i+1}: ${q.q}</div>
      <div class="feedback-answer">Réponse: ${q.options[q.correct]}</div>
      <div class="feedback-explanation">${q.explanation}</div>
    </div>`;
  });
  document.getElementById('feedbackSection').innerHTML = feedbackHTML;

  saveToLeaderboard(Math.round(percentage), currentQuiz.length);
  updateLeaderboard();
}

function saveToLeaderboard(score, total) {
  let leaderboard = JSON.parse(localStorage.getItem('veracheck-leaderboard')) || [];
  const entry = {
    name: `Utilisateur ${leaderboard.length + 1}`,
    score,
    total,
    date: new Date().toLocaleDateString()
  };
  leaderboard.push(entry);
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 10);
  localStorage.setItem('veracheck-leaderboard', JSON.stringify(leaderboard));
}

function updateLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem('veracheck-leaderboard')) || [];
  let html = '';
  leaderboard.forEach((entry, i) => {
    html += `<div class="leaderboard-item">
      <div class="leaderboard-rank">${i + 1}</div>
      <div class="leaderboard-info">
        <div class="leaderboard-name">${entry.name}</div>
        <div class="leaderboard-detail">${entry.date}</div>
      </div>
      <div class="leaderboard-score">${entry.score}%</div>
    </div>`;
  });
  document.getElementById('leaderboard').innerHTML = html || '<p style="color: var(--text); text-align: center;">Aucun score pour le moment</p>';
}

function exitQuiz() {
  if (confirm('Êtes-vous sûr de vouloir quitter?')) {
    location.reload();
  }
}

function goHome() {
  location.href = '/index.html';
}

document.addEventListener('DOMContentLoaded', updateLeaderboard);
