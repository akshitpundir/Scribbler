var signin=document.getElementById('signInModal');
var signinbtn = document.getElementById("signIn");
var signinSpan = document.getElementById("signInClose");
signinbtn.onclick = function() {
    signin.style.display = "block";
  }
  signinSpan.onclick = function() {
    signin.style.display = "none";
  }
var signup = document.getElementById('signUpModal');
var signupbtn = document.getElementById("signUp");
var signupSpan = document.getElementById("signUpClose");
signupbtn.onclick = function() {
    signup.style.display = "block";
  }
signupSpan.onclick = function() {
    signup.style.display = "none";
  }
//akshit
window.onclick = function(event) {
    if (event.target == signup) {
      signup.style.display = "none";
    }
    if (event.target == signin){
      signin.style.display = "none";
    }
  }
function signUp() {
    signin.style.display = "none";
    signup.style.display = "block";
  }