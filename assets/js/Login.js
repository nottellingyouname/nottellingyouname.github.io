const firebaseConfig = {
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

const signupForm = document.querySelector("#Signup-form");
signupForm.addEventListener("submit", (e)=>  {
  e.preventDefault();

  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
  })

})