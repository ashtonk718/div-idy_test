//sign in buttons

function gotologin (){
    window.location.href = 'login.html' + "?" + "for=login";


}

function gotosignup (){
    window.location.href = 'login.html' + "?" + "for=signup";


}


loginhome.addEventListener('click', gotologin);
signuphome.addEventListener('click', gotosignup);




//firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"


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
const db = getDatabase(app);








//initial page load projects

function onPageLoad() {
    const projectsRef = ref(db, 'accounts');
  
    // Fetch data from Firebase
    get(projectsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const accounts = snapshot.val();
  
          // Initialize an array to store project names
          const publicProjects = [];
  
          // Iterate through user accounts
          for (const userId in accounts) {
            if (accounts.hasOwnProperty(userId)) {
              const userProjects = accounts[userId].myprojects;
  
              // Iterate through projects of each user
              for (const projectName in userProjects) {
                if (userProjects.hasOwnProperty(projectName)) {
                  const project = userProjects[projectName];
  
                  // Check if the project is public
                  if (project.public === true) {
                    // Add the project name to the array
                    publicProjects.push(projectName);
                  }
                }
              }
            }
          }
  
          // Log the array of project names
          console.log(publicProjects);
  
          // Display the array in the 'posterthumbnails' div
          const posterThumbnailsDiv = document.getElementById('posterthumbnails');
  
 
            // Create a container div for each project
            publicProjects.forEach((project) => {
              const projectContainer = document.createElement('div');
              projectContainer.classList.add('project-container'); // Add a class to the container div

              // Create a header (h3) for the project name
              const projectHeader = document.createElement('h3');
              projectHeader.textContent = project;
              projectHeader.classList.add('project-name'); // Add a class to the header (h3)


              projectContainer.addEventListener('click', function () {
                // Redirect to view.html with the project name as a query parameter
                window.location.href = `view.html?v=${project}`;
              });


              // Append the header to the container
              projectContainer.appendChild(projectHeader);
  
              // Append the container to the 'posterthumbnails' div
              posterThumbnailsDiv.appendChild(projectContainer);
            });
  
          // Append the list to the 'posterthumbnails' div
          posterThumbnailsDiv.appendChild(list);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error('Error getting data:', error);
      });
  }
  
  window.onload = onPageLoad;
  