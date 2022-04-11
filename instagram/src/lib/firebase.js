/* eslint-disable prettier/prettier */
import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config = {
    apiKey: "AIzaSyAF_dDXsOOoUqx-OJ4fCFEHYNkH4-sPKgY",
    authDomain: "instagram-yt-104bc.firebaseapp.com",
    projectId: "instagram-yt-104bc",
    storageBucket: "instagram-yt-104bc.appspot.com",
    messagingSenderId: "361232045511",
    appId: "1:361232045511:web:fc699ac45b2c8265c4f5e2"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// eslint-disable-next-line prettier/prettier


export { firebase, FieldValue };
