//firebase cli->firbaseinit(rules,hosting & storage)

import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClIRlExBDU7GG0EQz4NFYS8fEs6kr5avc",
    authDomain: "project-manage-2fc1c.firebaseapp.com",
    projectId: "project-manage-2fc1c",
    storageBucket: "project-manage-2fc1c.appspot.com",
    messagingSenderId: "818542765072",
    appId: "1:818542765072:web:7fb3d303d04485d2d55695",
    measurementId: "G-QQLZX2XRQR"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth , projectStorage ,timestamp}