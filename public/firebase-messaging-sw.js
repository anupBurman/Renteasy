// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyD_PAyWNtDj8IiQBdB7McAXgzB2TF_BS-g",
    authDomain: "my-renteasy-app.firebaseapp.com",
    projectId: "my-renteasy-app",
    storageBucket: "my-renteasy-app.firebasestorage.app",
    messagingSenderId: "1007119772414",
    appId: "1:1007119772414:web:ae30b2792809ce786793af",
    measurementId: "G-4VJ9XQ401F"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title ;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/imoji_smile.jpg'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });