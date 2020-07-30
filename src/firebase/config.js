import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDDnays3Ux-_0uiQzD1sLCB1chzmuVjBEs",
    authDomain: "firegallery-1dac4.firebaseapp.com",
    databaseURL: "https://firegallery-1dac4.firebaseio.com",
    projectId: "firegallery-1dac4",
    storageBucket: "firegallery-1dac4.appspot.com",
    messagingSenderId: "835478512168",
    appId: "1:835478512168:web:b7fb74c47de867b1d7cb1d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
