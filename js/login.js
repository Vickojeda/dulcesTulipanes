function auth(event) {
    event.preventDefault();
    
    var email = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    
    if (email === "admin@gmail.com" && password === "user") {
    window.location.replace("html/menuAdmin.html");
    } else {
    window.location.replace("html/menu.html");
    }
    }
    