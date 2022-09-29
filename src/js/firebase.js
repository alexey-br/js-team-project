import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAuth, signOut } from 'firebase/auth';
export default class Firebase {
  constructor() {
    (this.firebaseConfig = {
      apiKey: 'AIzaSyDyyDBXrtypR4LKLi9eobNW0F2AbPIT-0w',
      authDomain: 'js-team-project-bb445.firebaseapp.com',
      projectId: 'js-team-project-bb445',
      storageBucket: 'js-team-project-bb445.appspot.com',
      messagingSenderId: '772335269944',
      appId: '1:772335269944:web:f4a41767a7c3556cf60ecd',
      measurementId: 'G-1YF4Z6D4WL',
    }),
      // Initialize Firebase
      (this.app = initializeApp(this.firebaseConfig)),
      (this.auth = getAuth(this.app));
  }
  // реєстрація користувачів

  createUser(email, password) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  // авторизація

  signIn(email, password) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  //перевірка аутентифікації
  authState() {
    onAuthStateChanged(this.auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  // вихід з системи
  out() {
    signOut(this.auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  }
}
