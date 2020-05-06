function submitOnclick() {
    var firstname = document.getElementById('firstnameInput').value;
    var lastname = document.getElementById('lastnameInput').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var user_id = document.getElementById('useridInput').value;

    var firebaseRef = firebase.database().ref("User");
    firebaseRef.push({
        firstname:firstname,
        lastname:lastname,
        user:user_id,
        password:password,
        email:email
    });

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
    } else {
        alert(errorMessage);
    }
    console.log(error);
});


    alert("Register complete");
}

