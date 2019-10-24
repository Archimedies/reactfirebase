import * as firebase from 'firebase';
import "firebase/firestore";


// Firebase Init. Essentially my API key & auth data
var firebaseConfig = {
    apiKey: "AIzaSyBw8y90VtJPQ9l2mQEP4_OtH9ixUx23ql4",
    authDomain: "reactdatabase-b93cf.firebaseapp.com",
    databaseURL: "https://reactdatabase-b93cf.firebaseio.com",
    projectId: "reactdatabase-b93cf",
    storageBucket: "reactdatabase-b93cf.appspot.com",
    messagingSenderId: "212124688590",
    appId: "1:212124688590:web:74240b4f8bc9914278709f"
};

firebase.initializeApp(firebaseConfig);

//Export and make available for use on other pages that import Firebase. 
export default firebase;