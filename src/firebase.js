import firebase from 'firebase/app';

const firebaseConfig = {
    // apiKey: "AIzaSyC8S_0HIgxBizaqTCZgSMHSRKPFMNmpQSk",
    // authDomain: "virdsapp.firebaseapp.com",
    // projectId: "virdsapp",
    // storageBucket: "virdsapp.appspot.com",
    // messagingSenderId: "130967440697",
    // appId: "1:130967440697:web:e403139fea683bea7a6ce8",
    // measurementId: "G-Z6EJQWNE12"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  

  export default firebase.initializeApp(firebaseConfig);