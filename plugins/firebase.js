
// import * as firebase from "firebase/app";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB1Rcnn5aDHNvKsdfhChNPxlAsrNFx7nIo",
  authDomain: "nuxttodo-b8d04.firebaseapp.com",
  projectId: "nuxttodo-b8d04",
  storageBucket: "nuxttodo-b8d04.appspot.com",
  messagingSenderId: "791473225763",
  appId: "1:791473225763:web:92bb9ec858b4fd64473196",
  measurementId: "G-JP2240WQFD"
};


var app = null;

if(!firebase.apps.length){
  app = firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});

export default db;
