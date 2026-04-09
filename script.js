document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = this;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let success = document.getElementById("formSuccess");

    let valid = true;

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    success.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        valid = false;
    }

    // ✅ If valid → send email
    if (valid) {

        success.textContent = "⏳ Sending...";

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
            .then(function () {
                success.textContent = "✅ Message sent successfully!";
                form.reset();
            })
            .catch(function (error) {
                success.textContent = "❌ Failed to send message!";
                console.error("EmailJS Error:", error);
            });
    }
});
