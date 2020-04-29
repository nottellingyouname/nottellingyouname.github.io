var firebaseConfig = {
  apiKey: "AIzaSyA564kXeIeRb3yVP4EmTRFS70wqG95_UVY",
  authDomain: "lofi-ash.firebaseapp.com",
  databaseURL: "https://lofi-ash.firebaseio.com",
  projectId: "lofi-ash",
  storageBucket: "lofi-ash.appspot.com",
  messagingSenderId: "503791388627",
  appId: "1:503791388627:web:d64e83f754f9d60c5a5126",
  measurementId: "G-RB66R8DG56"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();

db.settings({timestampsInSnapshots: true });

const auth = firebase.auth();

function SignUp(){
   var email = document.getElementById("email");
   var password = document.getElementById("password");

   const promise = auth.CreateUserWithEmailAndPassword(email.value, password.value);
   promise.catch(e => alert(e.message));

   alert("Signed Up");

}