// ============================================================
//  FIREBASE CONFIGURATION
//
//  1. Go to https://console.firebase.google.com
//  2. Create a project → Add a web app → copy the config below
//  3. In the Firebase console open Realtime Database → Rules and set:
//     {
//       "rules": {
//         "cocom_leaderboard": {
//           ".read": true,
//           ".write": true
//         }
//       }
//     }
// ============================================================
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAr5MMHUOtStXD6xkcZorwAkqQ9AfYmg4g",
  authDomain:        "geo412-games.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "geo412-games",
  storageBucket:     "geo412-games.firebasestorage.app",
  messagingSenderId: "414961619458",
  appId:             "1:414961619458:web:fe7bbd2764a0e49821cd1b"
};

firebase.initializeApp(FIREBASE_CONFIG);

// Shared reference used by index.html and cocom-game.html
const lbRef = firebase.database().ref('cocom_leaderboard');
