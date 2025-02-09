//Database setup
const firebaseConfig = {
    apiKey: "#",
    authDomain: "ashif-s-portfolio.firebaseapp.com",
    databaseURL: "https://ashif-s-portfolio-default-rtdb.firebaseio.com",
    projectId: "ashif-s-portfolio",
    storageBucket: "ashif-s-portfolio.firebasestorage.app",
    messagingSenderId: "18517858921",
    appId: "#",
    measurementId: "G-SJH185M5CB"
};
//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference for my database
var contactFormDB = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');
    // console.log(name,email,message);
    saveMessages(name, email, message);
}

const saveMessages = (name, email, message) => {
    var newContactForm = contactFormDB.push({
        name: name,
        email: email,
        message: message,
    });
    newContactForm.set()
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
}

//Website Code
const texts = [
    "Hey Visitor, Welcome;)",
    "I am glad to see You Here..",
    "I am a Front-End Developer;)",
    "</Coder>",
    "Freelancer:)",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 100);
    }
})();


//
