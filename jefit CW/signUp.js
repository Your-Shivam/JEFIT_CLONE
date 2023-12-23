
 // Function to handle user sign-up
function signUp() {
    // Get values from input fields
    var username = document.getElementById('usname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('pass1').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; 
    }

    // Check if username and email are not empty
    if (!username || !email || !password) {
        alert("Please fill out all fields!");
        return;  
    }

   
    if (localStorage.getItem(email)) {
        alert("Email already exists!");
        return;  
    }

    // Create a user object
    var user = {
        username: username,
        email: email,
        password: password 
    };

     
    localStorage.setItem(email, JSON.stringify(user));

  
    alert("Account created successfully!");

    
    window.location.href = "signIn.html";  
}
