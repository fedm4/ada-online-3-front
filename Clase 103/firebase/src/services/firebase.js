import fbapp from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDfGNhgRO2gWwSr-ooApArhIe9zC-gr8Zo",
  authDomain: "ada-3-online.firebaseapp.com",
  databaseURL: "https://ada-3-online.firebaseio.com",
  projectId: "ada-3-online",
  storageBucket: "ada-3-online.appspot.com",
  messagingSenderId: "213973258904",
  appId: "1:213973258904:web:4c291f7cd835ca44beb6ed"
};

fbapp.initializeApp(firebaseConfig);
const database = fbapp.firestore();
const auth = fbapp.auth();
const googleProvider = new fbapp.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider)
    .then(res => res.user)
    .catch(error => console.log(error.message));
}

export const getMessages = () => {
    const collection = 'messages';
    const messagesRef = database.collection(collection);
    const query = messagesRef.orderBy('fecha');
    return query
}

export const createMessage = async (message, uid, photoUrl) => {
    const fecha = fbapp.firestore.Timestamp.fromDate(new Date());
    try {
        await database.collection('messages').add({
            message,
            uid,
            photoUrl,
            fecha
        });
    } catch(err) {
        throw new Error(err.message);
    }
}


        /*const querySnapshot = await database.collection(collection).get();
        console.log(querySnapshot);
        return querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data
            };
        });*/
    //}catch(err) {
    //    throw new Error(err.message);
    //}
