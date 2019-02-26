import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: "AIzaSyC_TKnHnhqqnelADY4l-yyMEip4emEKbpg",//process.env.REACT_APP_API_KEY,
  authDomain: "app-training-diary.firebaseapp.com",//process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://app-training-diary.firebaseio.com",//process.env.REACT_APP_DATABASE_URL,
  projectId: "app-training-diary",//process.env.REACT_APP_PROJECT_ID,
  storageBucket: "app-training-diary.appspot.com",//process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "937716177950"//process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  user = (uid) => this.db.ref(`user/${uid}`);
  exercises = (uid) => this.db.ref(`user/${uid}/exercises`);

  // getUserData = (fieldToSearch, stringToSearch) => {
  //   const ref = this.db.ref('user');
  //   ref.orderByChild(fieldToSearch).equalTo(stringToSearch).on('value', function (snapshot) {
  //     snapshot.forEach(function (childSnapshot) {
  //       const result = childSnapshot.val();
  //       console.log('function -', result);
  //       this.props.addAuthUserName(result);
  //     })
  //   })
  // }

  getUserData = (fieldToSearch, stringToSearch) => {
    const ref = this.db.ref('user');

    const promise = new Promise((resolve, reject) => {
      ref.orderByChild(fieldToSearch).equalTo(stringToSearch).on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          const result = childSnapshot.val();
          resolve(result);
        })
      })
    })

    return promise;
  }
}

export default Firebase;