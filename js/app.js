var email = document.getElementById("email");
var passowrd = document.getElementById("password");

// on login clicked
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Email has been sent");
    window.location.href = "index.html";
    return;
});
