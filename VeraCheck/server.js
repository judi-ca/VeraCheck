// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch'); // Assure que node-fetch est installé

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route POST /verify
app.post('/verify', async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Le texte à vérifier est requis.' });
  }

  try {
    const prompt = `Analyse cette information et donne :
- Verdict (Vrai, Faux ou Incertain)
- Explication courte
- Score de fiabilité (0-100)

Information à analyser : "${text}"`;

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
              parts: [
                { text: prompt }
              ]
            }
          ]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Erreur API Gemini: ${response.status}`);
    }

    const data = await response.json();

    const generatedText = 
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Erreur : pas de réponse de Gemini";

    res.json({ result: generatedText });

  } catch (error) {
    console.error('Erreur lors de la vérification:', error);
    res.status(500).json({ error: 'Erreur lors de la vérification. Veuillez réessayer.' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur VeraCheck démarré sur le port ${PORT}`);
});