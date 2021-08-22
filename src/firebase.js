import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC8S_0HIgxBizaqTCZgSMHSRKPFMNmpQSk",
    authDomain: "virdsapp.firebaseapp.com",
    projectId: "virdsapp",
    storageBucket: "virdsapp.appspot.com",
    messagingSenderId: "130967440697",
    appId: "1:130967440697:web:e403139fea683bea7a6ce8",
    measurementId: "G-Z6EJQWNE12"
  };

  export default firebase.initializeApp(firebaseConfig);