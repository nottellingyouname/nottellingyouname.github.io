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

//Sign Up
const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();

//get data
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection("Posts").get().then(snapshot => {
      SetupPosts(snapshot.docs);
      setupUI(user);
    });
    console.log("user logged in: ", user);
  } else {
    setupUI();
    console.log("user logged out");
  }
});


//Signup
const signupForm = document.querySelector("#Signup-form");
signupForm.addEventListener("submit", (e)=>  {
  e.preventDefault();

  const email = signupForm["email"].value;
  const password = signupForm["password"].value;

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector("#myForm");
    closeForm()
    signupForm.reset();
  });

});


//logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});


//Login
const loginForm = document.querySelector("#Login-form");
loginForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  //get user info
  const email = loginForm["email2"].value;
  const password = loginForm["password2"].value;
  
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector("#LoginmyForm");
    closeForm2()
    loginForm.reset();
  });
});
