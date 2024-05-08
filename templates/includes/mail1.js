
const firebaseConfig = {
    apiKey: "AIzaSyDpck4DwL2eJxLwffQhGVIDpkOSiUQt0fo",
    authDomain: "appointment-71dfb.firebaseapp.com",
    databaseURL: "https://appointment-71dfb-default-rtdb.firebaseio.com",
    projectId: "appointment-71dfb",
    storageBucket: "appointment-71dfb.appspot.com",
    messagingSenderId: "334708244687",
    appId: "1:334708244687:web:d776f8a6b67c2f1e89f7ba"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    document.getElementById("appointment").addEventListener("submit", submitForm);

    function submitForm(e) {
        e.preventDefault();

        var name = getElementVal("name");
        var email = getElementVal("emailid");
        var phone = getElementVal("phone");
        var date = getElementVal("date");
        var department = getElementVal("department");
        var doctor = getElementVal("doctor");
        var message = getElementVal("message");

        saveAppointment(name, email, phone, date, department, doctor, message);

        // Enable alert
        document.querySelector(".alert").style.display = "block";

        // Remove the alert after 3 seconds
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);

        // Reset the form
        document.getElementById("appointment").reset();
    }

    const saveAppointment = (name, email, phone, date, department, doctor, message) => {
        database.ref("appointment").push({
            name: name,
            email: email,
            phone: phone,
            date: date,
            department: department,
            doctor: doctor,
            message: message
        });
    };

    const getElementVal = (id) => {
        return document.getElementById(id).value;
    };

