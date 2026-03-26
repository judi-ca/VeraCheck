const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route POST /verify
app.post('/verify', async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Le texte à vérifier est requis.' });
  }

  try {
    // 🔥 PROMPT ULTRA IMPORTANT (corrige ton problème N/A)
    const prompt = `
Tu es VeraCheck, une IA spécialisée dans la vérification d'informations.

Ta mission :
- Vérifier une information
- Expliquer simplement
- Donner un conseil utile

RÈGLES STRICTES :
- Tu réponds uniquement dans ce format
- Pas de texte en dehors du format

FORMAT OBLIGATOIRE :

Verdict: (Vrai, Faux ou Incertain)
Explication: (2 phrases simples)
Conseil: (action concrète pour l'utilisateur)

Affirmation: "${text}"
`;

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    // 🚨 Gestion erreur 429 (trop de requêtes)
    if (response.status === 429) {
      return res.status(200).json({
        result:
`Verdict: Incertain
Explication: Trop de requêtes envoyées à l'IA.
Conseil: Attends quelques secondes avant de réessayer.`
      });
    }

    if (!response.ok) {
      throw new Error(`Erreur API Gemini: ${response.status}`);
    }

    const data = await response.json();

    // 🔒 Sécurisation (évite crash + N/A)
    const generatedText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return res.status(200).json({
        result:
`Verdict: Incertain
Explication: Impossible d'analyser cette information.
Conseil: Reformule la phrase ou réessaie.`
      });
    }

    res.json({ result: generatedText });

  } catch (error) {
    console.error('Erreur lors de la vérification:', error);

    res.status(200).json({
      result:
`Verdict: Incertain
Explication: Une erreur est survenue côté serveur.
Conseil: Réessaie plus tard.`
    });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur VeraCheck démarré sur le port ${PORT}`);
});