const { addDoc, collection } = require("@firebase/firestore");
const firestore = require("./FirebaseSetup");



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