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

  getWholeUser = async () => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}`);
    const snapshot = await ref.once('value');
    const result = snapshot.val();
    return result;
  }

  updateDataToBase = (pathInBase, data) => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}/${pathInBase}`);
    ref.update(data);
  }

  setDataToBase = (pathInBase, data) => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}/${pathInBase}`);
    ref.set(data);
  }

  getAllExercisesToStore = async () => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}/exercises`);
    const snapshot = await ref.once('value');
    const result = snapshot.val();
    const data = {
      exercises: result
    }
    return data;
  }

  getTrainingExerciseToStore = async (label, today) => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}/schedule/${today}/${label}`);
    const snapshot = await ref.once('value');
    const result = snapshot.val();
    const data = {
      [label]: result
    }
    return data;
  }

  getArrayEditFromBase = async (label, today) => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}/schedule/${today}/${label}`);
    const snapshot = await ref.once('value');
    const result = snapshot.val();
    return result;
  }

  deleteExerciseFromBase = (nameExercise) => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}/exercises/${nameExercise}`);
    ref.remove();
  }

}

export default Firebase;