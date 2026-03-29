// ============================================================
//  FIREBASE CONFIGURATION
//
//  1. Go to https://console.firebase.google.com
//  2. Create a project → Add a web app → copy the config below
//  3. In the Firebase console, enable Anonymous Authentication:
//     Authentication → Sign-in method → Anonymous → Enable
//  4. In the Firebase console open Realtime Database → Rules and set:
//     {
//       "rules": {
//         "cocom_leaderboard": {
//           ".read": true,
//           "$entry": {
//             ".write": "auth != null",
//             ".validate": "!newData.exists() || (
//               newData.hasChildren(['name','time','message','date']) &&
//               newData.child('name').isString() &&
//               newData.child('name').val().length == 3 &&
//               newData.child('time').isNumber() &&
//               newData.child('time').val() >= 1 &&
//               newData.child('time').val() <= 900 &&
//               newData.child('message').isString() &&
//               newData.child('message').val().length <= 120 &&
//               newData.child('date').isString() &&
//               newData.child('date').val().length <= 30
//             )"
//           }
//         }
//       }
//     }
//
//  NOTE: The rules above require anonymous sign-in (handled automatically
//  by firebase-config.js), validate all field types and lengths, and cap
//  the time at 900 s (the game's maximum).  The !newData.exists() clause
//  allows the client-side pruning code to delete entries beyond the top 5.
// ============================================================
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAWLUxVtdGVl47CRT-27uYJWRFsxC1D4hE",
  authDomain:        "geo412-games.firebaseapp.com",
  databaseURL:       "https://geo412-games-default-rtdb.firebaseio.com",
  projectId:         "geo412-games",
  storageBucket:     "geo412-games.firebasestorage.app",
  messagingSenderId: "414961619458",
  appId:             "1:414961619458:web:fe7bbd2764a0e49821cd1b"
};

firebase.initializeApp(FIREBASE_CONFIG);

// Sign in anonymously so Firebase rules can require auth != null.
// This does not expose any student identity — Firebase assigns a random UID
// per session that is never shown to users.
firebase.auth().signInAnonymously().catch(function(err) {
  console.warn('Firebase anonymous auth failed:', err.code, err.message);
});

// Shared reference used by index.html and cocom-game.html
const lbRef = firebase.database().ref('cocom_leaderboard');
