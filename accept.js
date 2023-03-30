const firebaseConfig = {
    //   copy your firebase config informations
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("f").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var subject = getElementVal("subject");
    var texts = getElementVal("texts");

    saveMessages(name, email, subject, texts);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, subject, texts) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        subject: subject,
        texts: texts
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};