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
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

firebase.initializeApp(FIREBASE_CONFIG);

// Shared reference used by index.html and cocom-game.html
const lbRef = firebase.database().ref('cocom_leaderboard');
