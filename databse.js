import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCikxZoxTDi9OAyieYywm7VDMOMAbm5Rc",
    authDomain: "rn-uber-eat-b08d6.firebaseapp.com",
    projectId: "rn-uber-eat-b08d6",
    storageBucket: "rn-uber-eat-b08d6.appspot.com",
    messagingSenderId: "706371092544",
    appId: "1:706371092544:web:6e8db91de0d81e78bf9fa5"
  };

firebase.initializeApp(firebaseConfig);
 export default firebase;