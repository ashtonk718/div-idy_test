

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';

  


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA4yEWmNPWCfYQgRgTO1sMRE_PiNquVkbI",
    authDomain: "webbuilder-b3a38.firebaseapp.com",
    databaseURL: "https://webbuilder-b3a38-default-rtdb.firebaseio.com",
    projectId: "webbuilder-b3a38",
    storageBucket: "webbuilder-b3a38.appspot.com",
    messagingSenderId: "975048162961",
    appId: "1:975048162961:web:0992b66e66981af0588930",
    measurementId: "G-XBQMJZVQ0Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  
  import {getDatabase, ref, get, set, child, update, remove}
  from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

  const db = getDatabase();






  function gotologin (){
    window.location.href = 'login.html' + "?" + "for=login";


}

function gotosignup (){
    window.location.href = 'login.html' + "?" + "for=signup";


}


loginlogin.addEventListener('click', gotologin);
signuplogin.addEventListener('click', gotosignup);









//Authentication



function createanewaccountuser() {

  const email = document.getElementById('signupemail').value;
  const password = document.getElementById('signuppassword').value;
  const name = document.getElementById('signupdisplayname').value;
    console.log('click')


  const auth = getAuth(); // Change this line

  // Example: Sign Up
  createUserWithEmailAndPassword(auth, email, password, name)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Signed up successfully!", user);
      console.log(user.uid);
const useridnumberfirebase = user.uid



set(ref(db, "accounts/"+ useridnumberfirebase ),{
  useridnumber: useridnumberfirebase ,
  email: email,
  displayname: name,
  
  })
  .then(()=>{
  
  alert("data stored successfully")
  
  })
  .catch((error)=>{
  alert("did not work sucka"+error);
  
  
  });

 })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
}

signupbtn.addEventListener('click', createanewaccountuser);








function logintoaccountuser() {
  const email = document.getElementById('loginemail').value;
  const password = document.getElementById('loginpassword').value;

  const auth = getAuth(); // Change this line

  // Example: Sign In
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Signed in successfully!", user);


      // Assuming you have a reference to the user's data
      const userRef = ref(db, 'accounts/' + user.uid);
      console.log(userRef)

      // Fetch user data from Firebase
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            console.log("User data:", userData);

          
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location.href = 'myaccount.html';


            // Now you can use the display name as neededz
          } else {
            console.log("User data not found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error.message);
        });



      
    })
    .catch((error) => {
      console.error("Error signing in:", error.message);
    });
}


loginbtn.addEventListener('click', logintoaccountuser);





//myacount


document.getElementById('displayname').innerHTML = displayName;