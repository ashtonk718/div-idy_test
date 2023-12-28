// Import the functions you need from the SDKs you need
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
const analytics = getAnalytics(app);

import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"


const db = getDatabase();






function onPageLoad() {
  // Check if the current page is view.html
  if (window.location.pathname.includes('view.html')) {
      const queryString = window.location.search;
      const productValue = new URLSearchParams(queryString).get('v');
      console.log(productValue);


   
      const projectsRef = ref(db, 'accounts');

      // Fetch data from Firebase
      get(projectsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const accounts = snapshot.val();
  
            // Assuming productValue is set elsewhere in your code
  
            // Initialize variables to store data
            let htmlcode, csscode, jscode;
  
            // Iterate through user accounts
            for (const userId in accounts) {
                if (accounts.hasOwnProperty(userId) && accounts[userId] && accounts[userId].myprojects) {
                  const userProjects = accounts[userId].myprojects;
              
                  console.log("User Projects:", userProjects); // Add this line for debugging
              
                  // Check if productValue matches a project name
                  if (userProjects && userProjects.hasOwnProperty(productValue)) {
                    const project = userProjects[productValue];
              
                    console.log("Project:", project); // Add this line for debugging
              
                    // Assign data to variables
                    htmlcode = project.html || '';
                    csscode = project.css || '';
                    jscode = project.js || '';
              
                    // Break the loop since we found the project
                    break;
                  }
                }
              }
              
  
            // Now you can use htmlcode, csscode, and jscode as needed
            console.log('HTML Code:', htmlcode);
            console.log('CSS Code:', csscode);
            console.log('JS Code:', jscode);

            const outputFrame = document.getElementById('outputviewmode');

            // Access the contentDocument property directly
            const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
        
            outputDocument.open();
            outputDocument.write(`${htmlcode}<style>${csscode}</style><script>${jscode}</script>`);
            outputDocument.close();



          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error('Error getting data:', error);
        });









  }
}

window.onload = onPageLoad;


