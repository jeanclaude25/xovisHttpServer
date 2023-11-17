const { getFirestore, addDoc, collection } = require("@firebase/firestore");
//const { firestore } = require("./FirebaseSetup.js");

const { initializeApp } = require('firebase/app');

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
//module.exports = firestore;


const handleSubmit = async (db_collection, datas_to_send) => {
    console.log("Tente un envoi")
    const ref = collection(firestore, db_collection) // Firebase creates this automatically


    try {
        await addDoc(ref, datas_to_send)
    } catch(err) {
        console.log(err)
    }
    
};


module.exports = handleSubmit