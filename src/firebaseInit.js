import firebase from "firebase/app";
import "firebase/messaging";

var config = {
  apiKey: "AIzaSyCZIPlMt7sdudNX0iIqkWFBnhfrtwq-Acg",
  authDomain: "testfcm-a9fe8.firebaseapp.com",
  databaseURL: "https://testfcm-a9fe8.firebaseio.com",
  projectId: "testfcm-a9fe8",
  storageBucket: "testfcm-a9fe8.appspot.com",
  messagingSenderId: "382508556698",
  appId: "1:382508556698:web:d360250db1e91efb641a23",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./src/firebaseInit.js")
    .then(function (registration) {
      console.log("Service Worker Registered");
      messaging.useServiceWorker(registration);
    });
}

// next block of code goes here
export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        console.log(firebaseToken);
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
