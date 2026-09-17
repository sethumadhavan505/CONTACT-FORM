// ===============================
// EmailJS Public Key
// ===============================

emailjs.init("6ou6FUbff378jGxUO");


// ===============================
// Form Submit
// ===============================

document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const form = document.getElementById("contact-form");
        const sendBtn = document.getElementById("sendBtn");

        // Prevent multiple clicks
        if (sendBtn.disabled) {
            return;
        }

        // Disable Send button immediately
        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";


        // Get form values
        const templateParams = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            message: document.getElementById("message").value

        };


        // ===============================
        // Send Email
        // ===============================

        emailjs.send(
            "service_dwgvnk8",
            "template_5ce385u",
            templateParams
        )

        .then(function () {

            console.log("Message sent successfully!");

            // Clear form
            form.reset();

            // Change Send button
            sendBtn.textContent = "Sent ✓";


            // Show success popup
            document
                .getElementById("successPopup")
                .classList.add("show");

        })

        .catch(function (error) {

            console.log("EmailJS Error:", error);

            // Enable Send button again
            sendBtn.disabled = false;

            sendBtn.textContent = "Send";

            alert("Failed To Send Message!");

        });

    });


// ===============================
// Submit Again
// ===============================

document
    .getElementById("submitAgainBtn")
    .addEventListener("click", function () {

        window.location.href =
            "https://odrs-contact-form.vercel.app/";

    });
