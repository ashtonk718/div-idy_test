

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


// Retrieve data from local storage
const userDataString = localStorage.getItem('userData');

if (userDataString) {
  // Parse the JSON string into a JavaScript object
  const userData = JSON.parse(userDataString);

  // Access displayname
  const displayName = userData.displayname;
  console.log("Display Name:", displayName);
document.getElementById('displayname').innerHTML = "Welcome " + displayName;



console.log(userData.myprojects)



  // Assuming you have a parent div with the class 'projects'
  const projectsContainer = document.querySelector('.projects');
  
  // Iterate over myprojects and create a div for each project
  for (const projectName in userData.myprojects) {
    if (userData.myprojects.hasOwnProperty(projectName)) {
      const project = userData.myprojects[projectName];
  
      // Create a div for the project
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('myaccountprojects');
  
      // Set the text content of the div to the project name
      projectDiv.textContent = projectName;
  

// Set the text content of the div to the project name
projectDiv.textContent = projectName;

// Add a click event listener
projectDiv.addEventListener('click', function() {
  // Redirect to devtools.html with the project name as a query parameter
  window.location.href = 'devtools.html?project=' + projectName;
});








      // Append the project div to the parent container
      projectsContainer.appendChild(projectDiv);
    }
  }
  


  // Access myprojects
  const myProjects = userData.myprojects;
  console.log("My Projects:", myProjects);
} else {
  console.error("User data not found in local storage");
}





newproject.addEventListener('click', saveproject);

function createnewproject () {







}


