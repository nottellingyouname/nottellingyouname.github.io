const auth = firebase.auth();

function SignUp(){
   var email = document.getElementById("email");
   var password = document.getElementById("password");

   const promise = auth.CreateUserWithEmailAndPassword(email.value, password.value);
   promise.catch(e => alert(e.message));

   alert("Signed Up");

}