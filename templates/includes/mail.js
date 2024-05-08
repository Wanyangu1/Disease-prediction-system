    const firebaseConfig = {
        apiKey: "AIzaSyDdQ0-t30SLjks3BrBLemPMFkGBqh_m4z4",
        authDomain: "contactform-1e4a9.firebaseapp.com",
        databaseURL: "https://contactform-1e4a9-default-rtdb.firebaseio.com",
        projectId: "contactform-1e4a9",
        storageBucket: "contactform-1e4a9.appspot.com",
        messagingSenderId: "62803575963",
        appId: "1:62803575963:web:e491841ced1e0b913c723e"
      };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  