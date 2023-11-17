const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const basicAuth = require('basic-auth'); // Module d'authentification basique

const PORT = 443; // Port HTTPS par défaut

const app = express();

// Utiliser bodyParser pour analyser le corps des requêtes POST
app.use(bodyParser.json());

// Définir les informations d'authentification (nom d'utilisateur et mot de passe)
const validUsername = 'votre_nom_utilisateur';
const validPassword = 'votre_mot_de_passe';

// Fonction middleware d'authentification basique
function authenticate(req, res, next) {
  const user = basicAuth(req);

  if (!user || user.name !== validUsername || user.pass !== validPassword) {
    // Si les informations d'identification sont incorrectes, renvoyer une réponse 401 Unauthorized
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }

  // Si les informations d'identification sont correctes, passez à la prochaine étape du middleware
  next();
}

// Utiliser la fonction middleware d'authentification basique pour la route "/xovisPush"
app.post('/xovisPush', authenticate, (req, res) => {
  // Traitement des données Xovis
  // ...
  
  console.log("Données Xovis reçues :", req.body);
  
  // Réponse à la requête Xovis
  res.status(200).send('Données Xovis reçues avec succès');
});

// Configuration SSL
const privateKey = fs.readFileSync('chemin/vers/votre/ssl-key.key', 'utf8');
const certificate = fs.readFileSync('chemin/vers/votre/ssl-cert.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Créer un serveur HTTPS avec les certificats SSL
const httpsServer = https.createServer(credentials, app);

// Démarrer le serveur HTTPS
httpsServer.listen(PORT, () => {
  console.log(`Serveur HTTPS en cours d'exécution sur le port ${PORT}`);
});
