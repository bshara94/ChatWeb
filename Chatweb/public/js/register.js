
var db = firebase.database();

function handleSignUp() {
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var name = document.getElementById('dn').value;
if (email.length < 4) {
alert('Please enter an email address.(4 digits at least)');
return;
}
if (password.length < 4) {
alert('Please enter a password.(4 digits at least)');
return;
}
if (name.length < 4) {
    alert('Please enter a display name.(4 digits at least)');
    return;
    }

// Sign in with email and pass.
// [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data){
    //console.log(user); // see https://firebase.google.com/docs/reference/js/firebase.User
    db.ref('users/' + data.user.uid).set({
        email, 
      password,
      name
    })
    
    //console.log('uid is ' + data.user.displayname + "  " + data.user.email)
    alert("Congratulations,you have signed up! Now you can sign in and chat :)")
  window.location.href="/index.html"
    
  }).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// [START_EXCLUDE]
if (errorCode == 'auth/weak-password') {
alert('The password is too weak.');
} else {
alert(errorMessage);
}
console.log(error);

// [END_EXCLUDE]
})
// [END createwithemail]

 
}

