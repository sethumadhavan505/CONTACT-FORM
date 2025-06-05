document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let success = document.getElementById("formSuccess");

    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    success.textContent = "";

    
    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }

    if (message.value.trim() === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        valid = false;
    }

    if (valid) {
        success.textContent = "Message sent successfully!";
        name.value = "";
        email.value = "";
        message.value = "";
    }
});