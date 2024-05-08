
var firebaseConfig = {
  apiKey: "AIzaSyB5t3zPBIoLbSN-I1xOBSR_lq-Z12ZJ-Fw",
  authDomain: "shinerweb-auth-c29fe.firebaseapp.com",
  projectId: "shinerweb-auth-c29fe",
  storageBucket: "shinerweb-auth-c29fe.appspot.com",
  messagingSenderId: "754492291109",
  appId: "1:754492291109:web:3d5fff583ad4c662ace7cc",
  measurementId: "G-7DVFZLX39P"
};

   // initialize firebase
   firebase.initializeApp(firebaseConfig);
  
   // Check if there's a user signed in
   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // You can access the user's data and display it in your HTML
      var userEmail = user.email;
      var userId = user.uid;
      var userDisplayName = user.displayName;

      // Build the HTML to display user data
      var userDataHTML = `
        <p>User Email: <strong>${userEmail}</strong></p>
        <p>User ID: <strong>${userId}</strong></p>
        <p>Display Name: <strong>${userDisplayName}</strong></p>
      `;

      // Display user data in the userData div
      document.getElementById('userData').innerHTML = userDataHTML;
    } else {
      // User is signed out.
      // Display a message or redirect to login page if needed.
      document.getElementById('userData').innerHTML = "<p>No user signed in.</p>";
    }
  });

  
