import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyClYmxRu7bDCT99WZ1QzxP4WLqUsGMZ1nE",
  authDomain: "projectplanner-df073.firebaseapp.com",
  databaseURL: "https://projectplanner-df073.firebaseio.com",
  projectId: "projectplanner-df073",
  storageBucket: "",
  messagingSenderId: "155343726571"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase