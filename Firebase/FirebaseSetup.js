const firebase = require('firebase');

const firebaseConfig = {
    apiKey: process.env.APP_apiKey,
    authDomain: process.env.APP_authDomain,
    projectId: process.env.APP_projectId,
    storageBucket: process.env.APP_storageBucket,
    messagingSenderId: process.env.APP_messagingSenderId,
    appId: process.env.APP_appId
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const DBAccess = db.collection('Bantiger');

module.exports = DBAccess;