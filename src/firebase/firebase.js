import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAKXU1ms9S--JMcK38G6TneIY2F1EZvB0I",
    authDomain: "nailaio-d9769.firebaseapp.com",
    databaseURL: "https://nailaio-d9769.firebaseio.com",
    projectId: "nailaio-d9769",
    storageBucket: "nailaio-d9769.appspot.com",
    messagingSenderId: "333811187065"
};
firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: "Yami Yamsters"
})


