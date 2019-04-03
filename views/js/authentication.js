var actualLocation = window.location.toString();

function checkIfLoggedIn(){
    firebase.auth().onAuthStateChanged(function(user){
        if (user){
            console.log(user)
            console.log(actualLocation)
                if (actualLocation == "http://localhost:8080/"){
                    window.location = "/home"
                } else {
                    console.log("already home")
                }
        } else {
            if (actualLocation == "http://localhost:8080/"){
                console.log("Already at login page")
            } else {
                window.location = "/"
            }
        }
    })
}

function getWeather() {
    window.location = "/weather";
}

function signOut(){
    firebase.auth().signOut()
    window.location = "/"
    // checkIfLoggedIn()
}

function GoogleSignIn(){
    var googleAuthProvider = new  firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider)
            .then( function(data){
                var photoUrl = data.additionalUserInfo.profile.picture;
                var idToken = data.credential.idToken;
                checkIfLoggedIn();
            })
            .catch( function(error){
                console.log(error);
            })
}

function FacebookSignIn() {
    var Provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(Provider)
        .then(function(result) {
            checkIfLoggedIn();
        }).catch(function(error) {
            console.log(error);
        });
}

function TwitterSignIn() {
    var Provider = new firebase.auth.TwitterAuthProvider();// window.fbAsyncInit = function() {
    firebase.auth().signInWithPopup(Provider)
        .then(function(result) {
            checkIfLoggedIn();
        }).catch(function(error) {
            console.log(error);
        });
}

function GithubSignIn() {
    var Provider = new firebase.auth.GithubAuthProvider();// window.fbAsyncInit = function() {
    firebase.auth().signInWithPopup(Provider)
        .then(function(result) {
            checkIfLoggedIn();
        }).catch(function(error) {
            console.log(error);
        });
}

function phoneSignIn() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': function(response) {
            var phoneNumber = getPhoneNumberFromUserInput();
            var appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then(function (confirmationResult) {
                  window.confirmationResult = confirmationResult;
                  var code = getCodeFromUserInput();
                  confirmationResult.confirm(code).then(function (result) {
                    var user = result.user;
                  }).catch(function (error) {
                  });
                }).catch(function (error) {
                });
        },
        'expired-callback': function() {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      });
          firebase.auth().signInWithPopup(Provider)
        .then(function(result) {
            checkIfLoggedIn();
        }).catch(function(error) {
            console.log(error);
        });
}

//     FB.init({
//     appId      : '283214545647884',
//     cookie     : true,
//     xfbml      : true,
//     version    : 'v2.8'
//     });
    
//     FB.getLoginStatus(function(response) {
//         statusChangeCallback(response);
//     });
    
// };

// function statusChangeCallback(response) {
//     if (response.status === 'connected')
//     console.log('connected');
//     else
//     FB.login();
// }

// (function(d, s, id){
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {return;}
//     js = d.createElement(s); js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));

// function checkLoginState() {
//     // FB.getLoginStatus(function(response) {
//         FB.logout();
//         // statusChangeCallback(response);
//     // );
// }
