let allUsers;
if (localStorage.getItem("users") == null) {
  allUsers = [];
} else {
  allUsers = JSON.parse(localStorage.getItem("users"));
}
let userNameSUp = document.querySelector("#nameInput");
let userEmailSUp = document.querySelector("#emailInputSUp");
let userPassSup = document.querySelector("#PassInputSUp");
let userEmail = document.querySelector("#emailInput");
let userPass = document.querySelector("#PassInput");

function addUser() {
  let user = {
    userNameSUp: userNameSUp.value,
    userEmailSUp: userEmailSUp.value,
    userPassSup: userPassSup.value,
  };
  allUsers.push(user);
  localStorage.setItem("users", JSON.stringify(allUsers));
  window.alert("You Succesifully Registered");
  clearSignup();
}
let h1Text;
let i;
function login() {
  h1Text;

  for (i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].userEmailSUp.toLowerCase() ===
        userEmail.value.toLowerCase() &&
      allUsers[i].userPassSup === userPass.value
    ) {
      console.log("naga7");
      // clearSignin();
      location.assign(`./Welcome.html`);
      function h1TextF() {
        h1Text = `Welcome ${allUsers[i].userNameSUp}`;
        // console.log(allUsers[i].userNameSUp);
        alert(allUsers[i].userNameSUp);
        localStorage.setItem("currentUser", allUsers[i].userNameSUp);
      }
      h1TextF();
      console.log(allUsers[i]);
      document.querySelector("#WelcomeTitle").innerHTML = h1Text;
      console.log(h1Text);
    }
    // else {
    //   console.log("fashl");
    //   window.alert("Wrong User Name or Password");
    // }
  }
}

function clearSignin() {
  userEmail.value = "";
  userPass.value = "";
}
function clearSignup() {
  userNameSUp.value = "";
  userEmailSUp.value = "";
  userPassSup.value = "";
}

if (h1Text != null) {
  h1Text = `Welcome ${localStorage.getItem("currentUser")}`;
}
