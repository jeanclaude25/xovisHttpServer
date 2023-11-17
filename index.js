const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const basicAuth = require('basic-auth');

const PORT = 8080;




app.use(bodyParser.json());

// Définir les informations d'authentification (nom d'utilisateur et mot de passe)
const validUsername = process.env.XOVIS_DATAPUSH_USERNAME;
const validPassword = process.env.XOVIS_DATAPUSH_PASSWORD;

// Fonction middleware d'authentification basique
function authenticate(req, res, next) {
    const user = basicAuth(req);
  
    if (!user || user.name !== validUsername || user.pass !== validPassword) {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      return res.sendStatus(401);
    }
    next();
  }


app.post('/xovisPush', authenticate, (req, res) => {
  // Traitement des données Xovis
  
  console.log("Données Xovis reçues :", req.body);
  res.status(200).send('Données Xovis reçues avec succès');
});



app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Serveur en cours");
  });
