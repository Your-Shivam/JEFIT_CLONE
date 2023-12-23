 
function login() {
    
    var usernameOrEmail = document.querySelector('#inputs input[type="text"]').value;
    var password = document.querySelector('#inputs input[type="password"]').value;

     
    var userData = JSON.parse(localStorage.getItem(usernameOrEmail));

     
    if (userData && userData.password === password) {
        alert("Logged in successfully!");
         
        window.location.href = "main.html";  
    } else {
        alert("Invalid username/email or password!");
    }
}

 
document.getElementById('btn').addEventListener('click', login);
