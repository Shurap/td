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

  setDataToBase = (pathInBase, data) => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}/${pathInBase}`);
    ref.update(data);
  }

  getDataToStoreExercise = async (nameExercise) => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}/exercises/${nameExercise}`);
    const snapshot = await ref.once('value');
    const result = snapshot.val();
    const data = {
      [nameExercise]: result
    }
    return data;
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

  deleteExerciseFromBase = (nameExercise) => {
    const ref = this.db.ref(`user/${this.auth.currentUser.uid}/exercises/${nameExercise}`);
    ref.remove();
  }

}

export default Firebase;

/*
const base = {
  'user': {
    'userID': {
      'email': 'sss@s.com',
      'username': 'sss',

      'shedule': {

        '15.05.19': {
          'nameEx1': {
            '1': {
              'width': '10',
              'numbers': '20'
            },
            '2': {
              'width': '15',
              'numbers': '15'
            },
            '3': {
              'width': '20',
              'numbers': '10'
            }
          },
          'nameEx2': {
            '1': {
              'width': '10',
              'numbers': '20'
            },
            '2': {
              'width': '15',
              'numbers': '15'
            },
            '3': {
              'width': '20',
              'numbers': '10'
            }
          }
        },

        '17.05.19': {
          'nameEx1': {
            '1': {
              'width': '10',
              'numbers': '20'
            },
            '2': {
              'width': '15',
              'numbers': '15'
            },
            '3': {
              'width': '20',
              'numbers': '10'
            }
          }
        },
      },

      'exercises': {
        'name1': {
          'date': '15.07.19',
          'data': {
            '1': { 'width': '15', 'numbers': '10' },
            '2': { 'width': '20', 'numbers': '10' },
            '3': { 'width': '25', 'numbers': '8' }
          }
        },
        'name2': {
          'date': '15.07.19',
          'data': {
            '1': { 'width': '15', 'numbers': '10' },
            '2': { 'width': '20', 'numbers': '10' },
            '3': { 'width': '25', 'numbers': '8' }
          }
        }
      }
    }
  }
}
*/



//-------------------------------------
  // getUserData = (fieldToSearch, stringToSearch) => {
  //   const ref = this.db.ref('user');

  //   const promise = new Promise((resolve, reject) => {
  //     ref.orderByChild(fieldToSearch).equalTo(stringToSearch).on('value', function (snapshot) {
  //       snapshot.forEach(function (childSnapshot) {
  //         const result = childSnapshot.val();
  //         resolve(result);
  //       })
  //     })
  //   })
  //   return promise;
  // }

  // setUserData = (uid, data) => {
  //   const ref = this.db.ref(`user/${uid}`);
  //   ref.set(data);
  // }
  //---------------------------------------------