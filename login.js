document.addEventListener('DOMContentLoaded', function() {
    const ente = document.getElementById('ente');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const button = document.getElementById('button');


console.dir(ente.value.trim)


    function validateInputs() {
      if (ente.value.trim() !== '' && email.value.trim() !== '' && password.value.trim() !== '') {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }

    ente.addEventListener('input', validateInputs);
    email.addEventListener('input', validateInputs);
    password.addEventListener('input', validateInputs);
  });


  let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
let username = document.getElementById("ente").value;
let mail = document.getElementById("email").value;
let password = document.getElementById("password").value;
if {( email === "gaglio1015@gmail.com" && password === "1015")
||  ( email === "ias" && password === "1014")
|| ( email === "gian" && password === "1013")
||( email === "ros" && password === "1012")
alert ("Login successfully");
window.location = "Anagrafica.html"; // Redirecting to other page.
return false;
}
else{
attempt --; // Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("mail").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("button").disabled = true;
return false;
}
}
}