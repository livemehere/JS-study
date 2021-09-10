// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCoIyT6frwe1wnO5dYchVe9SktIcaaOR1s",
  authDomain: "cling-5838e.firebaseapp.com",
  projectId: "cling-5838e",
  storageBucket: "cling-5838e.appspot.com",
  messagingSenderId: "837754827382",
  appId: "1:837754827382:web:3300998289aa29ad17a557",
  measurementId: "G-ZTEECVBS2R",
};

firebase.initializeApp(firebaseConfig);
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
