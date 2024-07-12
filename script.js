  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDm5EaphiE-Xe7dERlNuhupy41_wC8d8pk",
    authDomain: "room-helgagraphicode.firebaseapp.com",
    databaseURL: "https://room-helgagraphicode-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "room-helgagraphicode",
    storageBucket: "room-helgagraphicode.appspot.com",
    messagingSenderId: "207526463810",
    appId: "1:207526463810:web:a10dd34e196a57ca01e0db",
    measurementId: "G-MN6EEQ6YZK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        window.location.href = 'homepage.html'; // Redirect to homepage
      })
      .catch((error) => {
        alert(error.message);
      });
  });

  document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        document.getElementById('signInForm').style.display = 'block';
        document.getElementById('signUpForm').style.display = 'none';
      })
      .catch((error) => {
        alert(error.message);
      });
  });

  document.getElementById('showSignUp').addEventListener('click', () => {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
  });

  document.getElementById('showSignIn').addEventListener('click', () => {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = 'homepage.html'; // Redirect to homepage if user is logged in
    }
  });

  