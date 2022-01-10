import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
        apiKey: "AIzaSyCRh0lOuS32LHLM8f7gKEN-nFBOAynGYKM",
        authDomain: "pet-project-q-a.firebaseapp.com",
        projectId: "pet-project-q-a",
        storageBucket: "pet-project-q-a.appspot.com",
        messagingSenderId: "651965269947",
        appId: "1:651965269947:web:e6e0b70eac223d58a8a69e"
})

export const google = new firebase.auth.GoogleAuthProvider();