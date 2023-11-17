const { initializeApp } = require('firebase/app');
const { getFirestore } = require('@firebase/firestore');

const firebaseConfig = {
    apiKey: process.env.APP_apiKey,
    authDomain: process.env.APP_authDomain,
    projectId: process.env.APP_projectId,
    storageBucket: process.env.APP_storageBucket,
    messagingSenderId: process.env.APP_messagingSenderId,
    appId: process.env.APP_appId
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

module.exports = firestore;