//firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
import { getDatabase, ref, get, child, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"


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







const projecturl = new URLSearchParams(window.location.search).get('project');
console.log(projecturl);
document.getElementById('proname').value = projecturl;



const userDataString = localStorage.getItem('userData');

const userData = JSON.parse(userDataString);


const dbref = ref(db);

console.log(dbref, 'accounts/' + userData.useridnumber + "/myprojects/" + proname.value + "/");


get(child(dbref, 'accounts/' + userData.useridnumber + "/myprojects/" + proname.value + "/"))
.then((snapshot) => {
        
              if (snapshot.exists()) {
        
        
        
        
        const htmlCode = snapshot.val().html
            const cssCode = snapshot.val().css
            const jsCode = snapshot.val().js
            const publicload = snapshot.val().public

           
        
document.getElementById('html-input').value = htmlCode
document.getElementById('css-input').value = cssCode
document.getElementById('js-input').value = jsCode



// Set the initial state of the toggle switch and toggle text
const toggleSwitch = document.getElementById('toggleSwitch');
const toggleText = document.getElementById('toggleText');

toggleSwitch.checked = publicload;
toggleText.textContent = publicload ? 'Public' : 'Private';

// Add an event listener to handle changes to the toggle switch
toggleSwitch.addEventListener('change', function () {
    toggleText.textContent = this.checked ? 'Public' : 'Private';
});




const outputFrame = document.getElementById('outputiframepreview');

// Access the contentDocument property directly
const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;

outputDocument.open();
outputDocument.write(`${htmlCode}<style>${cssCode}</style><script>${jsCode}</script>`);
outputDocument.close();


                
              } else {
                alert("No data found");
              }
            })
            .catch((error) => {
              alert("Error: " + error.message);
            });
        









    updateoutput.addEventListener('click', saveproject);

    buttonsaveproject.addEventListener('click', saveproject);


function saveproject (){


console.log(db, 'accounts/' + userData.useridnumber + "/myprojects/" + proname.value + "/")

    


    set(ref(db, 'accounts/' + userData.useridnumber + "/myprojects/" + proname.value + "/"),{
        html: document.getElementById('html-input').value,
        css: document.getElementById('css-input').value,
        js: document.getElementById('js-input').value,
        public: document.getElementById('toggleText').innerHTML.includes("Public")
        })
        .then(()=>{
        
        alert("data stored successfully")


        
        
        })
        .catch((error)=>{
        alert("did not work sucka"+error);
        
        
        });




    const htmlCodeupdate =  document.getElementById('html-input').value
    const cssCodeupdate  = document.getElementById('css-input').value 
    const  jsCodeupdate  = document.getElementById('js-input').value  

        const outputFrame = document.getElementById('outputiframepreview');

        // Access the contentDocument property directly
        const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
        
        outputDocument.open();
        outputDocument.write(`${htmlCodeupdate}<style>${cssCodeupdate}</style><script>${jsCodeupdate}</script>`);
        outputDocument.close();



        




}


document.getElementById('toggleSwitch').addEventListener('change', function () {
    const toggleText = document.getElementById('toggleText');
    toggleText.textContent = this.checked ? 'Public' : 'Private';



if (toggleText.textContent == "Public"){

    console.log("Public")

    set(ref(db, 'accounts/' + userData.useridnumber + "/myprojects/" + proname.value + "/"),{
        public: true,
        html: document.getElementById('html-input').value,
        css: document.getElementById('css-input').value,
        js: document.getElementById('js-input').value,
        })
        .then(()=>{
        alert("data stored successfully")
        })
        .catch((error)=>{
        alert("did not work sucka"+error);
        });




} else {
    console.log("Private")

    set(ref(db, 'accounts/' + userData.useridnumber + "/myprojects/" + proname.value + "/"),{
        public: false,
        html: document.getElementById('html-input').value,
        css: document.getElementById('css-input').value,
        js: document.getElementById('js-input').value,
        
        })
        .then(()=>{
        alert("data stored successfully")
        })
        .catch((error)=>{
        alert("did not work sucka"+error);
        });

}





});
