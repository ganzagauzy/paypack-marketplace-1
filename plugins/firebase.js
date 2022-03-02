<<<<<<< HEAD
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import nuxtConfig from "../nuxt.config";

const {
  NUXT_ENV_API_KEY,
  NUXT_ENV_AUTH_DOMAIN,
  NUXT_ENV_PROJECT_ID,
  NUXT_ENV_STORAGE_BUCKET,
  NUXT_ENV_MESSAGING_SENDER_ID,
  NUXT_ENV_APP_ID,
  NUXT_ENV_MEASUREMENT_ID,
} = nuxtConfig.env;
=======

// import * as firebase from "firebase/app";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const { NUXT_ENV_API_KEY, NUXT_ENV_AUTH_DOMAIN, NUXT_ENV_PROJECT_ID, NUXT_ENV_STORAGE_BUCKET, NUXT_ENV_MESSAGING_SENDER_ID, NUXT_ENV_APP_ID, NUXT_ENV_MEASUREMENT_ID } = process.env;

>>>>>>> ddbb3de (changes env)

const firebaseConfig = {
  apiKey: NUXT_ENV_API_KEY,
  authDomain: NUXT_ENV_AUTH_DOMAIN,
  projectId: NUXT_ENV_PROJECT_ID,
  storageBucket: NUXT_ENV_STORAGE_BUCKET,
  messagingSenderId: NUXT_ENV_MESSAGING_SENDER_ID,
  appId: NUXT_ENV_APP_ID,
<<<<<<< HEAD
  measurementId: NUXT_ENV_MEASUREMENT_ID,
=======
  measurementId: NUXT_ENV_MEASUREMENT_ID
>>>>>>> ddbb3de (changes env)
};

var app = null;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
