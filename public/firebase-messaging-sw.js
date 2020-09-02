importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js"
);

const config = {
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

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: "/firebase-logo.png",
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("notificationclick", (event) => {
  console.log(event);
  return event;
});
