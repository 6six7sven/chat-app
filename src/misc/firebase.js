import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyCa-v2R2Pg98gRYKRU8FidJPzvTaYAI3X8",
    authDomain: "chat-web-app-477ad.firebaseapp.com",
    databaseURL: 'https://chat-web-app-477ad.firebaseio.com',
    projectId: "chat-web-app-477ad",
    storageBucket: "chat-web-app-477ad.appspot.com",
    messagingSenderId: "354955417264", 
    appId: "1:354955417264:web:8c64072323ee296635cd75"
  
}

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

