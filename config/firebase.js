const firebase = require('firebase');
const firebaseConfigVar = require('../config/vars')

const firebaseConfig = {
  apiKey: firebaseConfigVar.apiKey,
  authDomain: firebaseConfigVar.authDomain,
  databaseURL: firebaseConfigVar.databaseURL,
  projectId: firebaseConfigVar.projectId,
  storageBucket: firebaseConfigVar.storageBucket,
  messagingSenderId: firebaseConfigVar.messagingSenderId,
  appId: firebaseConfigVar.appId,
  measurementId: firebaseConfigVar.measurementId,
}

firebase.initializeApp(firebaseConfig);

