
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDpck4DwL2eJxLwffQhGVIDpkOSiUQt0fo",
      authDomain: "appointment-71dfb.firebaseapp.com",
      projectId: "appointment-71dfb",
      storageBucket: "appointment-71dfb.appspot.com",
      messagingSenderId: "334708244687",
      appId: "1:334708244687:web:d776f8a6b67c2f1e89f7ba"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    function submitForm() {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('emailid').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            department: document.getElementById('department').value,
            doctor: document.getElementById('doctor').value,
            message: document.getElementById('message').value
        };

        function submitForm() {
            console.log("Submitting form...");
            // Rest of the function code...
        
            // Push the form data to the database
            push(ref(database, 'appointment'), formData)
                .then(() => {
                    console.log("Form submitted successfully!");
                    // Rest of the function code...
                })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                    alert('An error occurred. Please try again later.');
                });
        }
        

        // Push the form data to the database
        push(ref(database, 'appointment'), formData)
            .then(() => {
                // Clear the form fields after successful submission
                document.getElementById('name').value = '';
                document.getElementById('emailid').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('date').value = '';
                document.getElementById('department').value = '';
                document.getElementById('doctor').value = '';
                document.getElementById('message').value = '';

                // Display success message
                alert('Your appointment request has been sent successfully. Thank you!');
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again later.');
            });
    }