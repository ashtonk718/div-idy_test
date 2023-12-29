//sign in buttons

function gotologin (){
    window.location.href = 'login.html' + "?" + "for=login";


}

function gotosignup (){
    window.location.href = 'login.html' + "?" + "for=signup";


}

function gotomyaccount (){
  window.location.href = 'myaccount.html';

}



loginhome.addEventListener('click', gotologin);
signuphome.addEventListener('click', gotosignup);
accountbtn.addEventListener('click', gotomyaccount);



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

const posterThumbnailsDiv = document.getElementById('posterthumbnails');


function onPageLoad() {

  //Nav Buttons

  const userDataString = localStorage.getItem('userData');
  if (userDataString) {


    document.getElementById('accountbtn').style.display = "block";
    const userData = JSON.parse(userDataString);
    const username = userData.displayname;
    document.getElementById('accountbtn').textContent = username;

    document.getElementById('loginhome').style.display = "none";
    document.getElementById('signuphome').style.display = "none";

  }else{
    document.getElementById('accountbtn').style.display = "none";
    document.getElementById('loginhome').style.display = "block";
    document.getElementById('signuphome').style.display = "block";

  }









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
            const userDisplayName = accounts[userId].displayname; // Fetch display name

            // Iterate through projects of each user
            for (const projectName in userProjects) {
              if (userProjects.hasOwnProperty(projectName)) {
                const project = userProjects[projectName];

                // Check if the project is public
                if (project.public === true) {
                  // Create a container div for each project
                  const projectContainer = document.createElement('div');
                  projectContainer.classList.add('project-container'); // Add a class to the container div

                  // Create a header (h3) for the project name
                  
                  
                  
                

// Combine HTML and CSS
const combinedCode = `<html><head><style>${project.css}*{transform: scale(0.6);
  transform-origin: top left;}</style></head><body>${project.html}</body></html>`;

// Create a container for the preview
const previewContainer = document.createElement('div');
previewContainer.classList.add('preview-container'); // Add a class for styling

// Append the preview container to the project container
projectContainer.appendChild(previewContainer);

// Create an iframe
const iframeElement = document.createElement('iframe');
iframeElement.classList.add('preview-iframe'); // Add a class for styling

// Set srcdoc attribute to combined HTML and CSS
iframeElement.srcdoc = combinedCode;

// Append the iframe to the preview container
previewContainer.appendChild(iframeElement);

// Create an overlay div
const overlayDiv = document.createElement('div');
overlayDiv.classList.add('overlay'); // Add a class for styling

// Append the overlay div to the preview container
projectContainer.appendChild(overlayDiv);

// Add a click event listener to the overlay div
overlayDiv.addEventListener('click', function () {
    // Redirect to the next page or perform other actions
    window.location.href = `view.html?v=${projectName}`;
});





const projectHeader = document.createElement('h3');
                  projectHeader.textContent = project.projectname;
                  projectHeader.classList.add('project-name'); // Add a class to the header (h3)

                  // Add event listener to the container
                  projectContainer.addEventListener('click', function () {
                    // Redirect to view.html with the project name as a query parameter
                    window.location.href = `view.html?v=${projectName}`;
                  });

                  // Append the header to the container
                  projectContainer.appendChild(projectHeader);

                  // Add display name to the container
                  const displayNameElement = document.createElement('p');
                  displayNameElement.textContent = `${userDisplayName}`;
                  displayNameElement.classList.add('user-name'); // Add a class to the header (h3)
                  projectContainer.appendChild(displayNameElement);














                  // Append the container to the 'posterthumbnails' div
                  posterThumbnailsDiv.appendChild(projectContainer);
                }
              }
            }
          }
        }
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error('Error getting data:', error);
    });
}

  window.onload = onPageLoad;
  