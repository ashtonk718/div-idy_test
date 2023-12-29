

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


  const userData = JSON.parse(userDataString);

  const userid = userData.useridnumber;

  
     
  
  
        // Assuming you have a reference to the user's data
        const userRef = ref(db, 'accounts/' + userid);
        console.log(userRef)
  
        // Fetch user data from Firebase
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              console.log("User data:", userData);
  
            
              localStorage.setItem('userData', JSON.stringify(userData));
  
  
              // Now you can use the display name as neededz
            } else {
              console.log("User data not found.");
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error.message);
          });
  
  
  
        
  

  
  // Parse the JSON string into a JavaScript object

  // Access displayname
  const displayName = userData.displayname;
  console.log("Display Name:", displayName);
  document.getElementById('displayname').innerHTML = "Welcome " + displayName;

  console.log(userData.useridnumber);

  // Assuming you have a parent div with the class 'projects'
  const projectsContainer = document.querySelector('.projects');

  // Iterate over myprojects and create a div for each project
  for (const projectNumber in userData.myprojects) {
      if (userData.myprojects.hasOwnProperty(projectNumber)) {
          const project = userData.myprojects[projectNumber];

          // Create a div for the project
          const projectDiv = document.createElement('div');
          projectDiv.classList.add('myaccountprojects');

          // Set the innerHTML of the div to the project name and number with a line break
          projectDiv.innerHTML = `${project.projectname} <br> ${projectNumber}`;

          // Add a click event listener
          projectDiv.addEventListener('click', function () {
              // Redirect to devtools.html with the project number as a query parameter
              window.location.href = 'devtools.html?project=' + projectNumber;
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




newproject.addEventListener('click', createnewproject);

function createnewproject () {
  document.getElementById("newprojectnamemodal").style.display = "block"
}

closenew.addEventListener('click', closenewproject);
function closenewproject () {
  document.getElementById("newprojectnamemodal").style.display = "none"
}






createnewprojectbtn.addEventListener('click', addnewproject);
function addnewproject () {



  function generateRandom16DigitNumber() {
    let randomNumber = '';
    for (let i = 0; i < 16; i++) {
        // Generate a random digit (0 to 9) and convert it to a string
        let randomDigit = Math.floor(Math.random() * 10).toString();
        // Concatenate the digit to the result
        randomNumber += randomDigit;
    }
    return randomNumber;
}

// project number
const random16DigitNumber = generateRandom16DigitNumber();
console.log(random16DigitNumber);


let projectnameinput = document.getElementById("projectnameinput").value

const userDataString = localStorage.getItem('userData');

const userData = JSON.parse(userDataString);

set(ref(db, 'accounts/' + userData.useridnumber + "/myprojects/" + random16DigitNumber + "/"),{
  html: "",
  css: "",
  js: "",
  public: false,
projectname: projectnameinput
  })
  .then(()=>{alert("data stored successfully");  window.location.href = 'devtools.html?project=' + random16DigitNumber;
}).catch((error)=>{alert("did not work sucka"+error);});






}





