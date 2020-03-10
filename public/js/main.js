// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKZT2u245phtsgSQ5MMXMlNmp4PdP0GgY",
    authDomain: "actrience-2eea4.firebaseapp.com",
    databaseURL: "https://actrience-2eea4.firebaseio.com",
    projectId: "actrience-2eea4",
    storageBucket: "actrience-2eea4.appspot.com",
    messagingSenderId: "796169791510",
    appId: "1:796169791510:web:28012343f8a92fdb382d37",
    measurementId: "G-EDFDHF68NC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Refrence messages
var messageRef = firebase.database().ref('messages');

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // Get values

    var name = getInputVal('name');
    var email = getInputVal('email');
    var contact = getInputVal('form-contact');
    var message = getInputVal('message');

    saveMessage(name, email, contact, message);

    // Show Alert
    document.querySelector('.alert').style.display = 'block';

    // Time out
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 1500);

    // Reset
    document.getElementById('contactForm').reset();

}

// Function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

// Save messages to firebase
function saveMessage(name, email, contact, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        contact: contact,
        message: message
    });
}

// Sidebar-controller
var i=0;
document.getElementById('sidebarIco').addEventListener('click', function(){
    if(i==0){
        document.getElementById('sidebar').style.display = 'block';
        i=i+1;
    }
    else if(i==1){
        document.getElementById('sidebar').style.display = 'none';
        i=i-1;
    } 
    else  {
        document.getElementById('sidebar').style.display = 'block';
    }
});

