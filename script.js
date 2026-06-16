document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let success = document.getElementById("formSuccess");

    let valid = true;

    // Clear errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    success.textContent = "";

    // Validation
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

    // ✅ If valid → open email app
    if (valid) {

        let toEmail = "sm6579164@gmail.com"; // 🔴 change if needed

        let subject = encodeURIComponent("Contact from " + name.value);
        let body = encodeURIComponent(
            "Name: " + name.value + "\n" +
            "Email: " + email.value + "\n\n" +
            "Message:\n" + message.value
        );

        // Open mail app
        window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;

        success.textContent = "📧 Opening your email app...";
    }
});
