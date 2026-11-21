// EmailJS Public Key
emailjs.init("6ou6FUbff378jGxUO");

const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("sendBtn");
const emailInput = document.getElementById("email");

// Submit contact form
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (sendBtn.disabled) return;

    // A Google account must be selected before the form can be sent.
    const email = emailInput.value.trim();
    if (!email) {
        alert("Please sign in with Google first.");
        document.getElementById("googleBtn").focus();
        return;
    }

    if (!email.endsWith("@gmail.com")) {
        alert("Please use a Gmail account.");
        return;
    }

    const mobile = document.getElementById("mobile").value.trim();
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const templateParams = {
        name: document.getElementById("name").value.trim(),
        email,
        mobile,
        message: document.getElementById("message").value.trim()
    };

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    try {
        await emailjs.send(
            "service_dwgvnk8",
            "template_5ce385u",
            templateParams
        );

        form.reset();
        sendBtn.textContent = "Sent ✓";
        document.getElementById("successPopup").classList.add("show");
    } catch (error) {
        console.error("EmailJS Error:", error);
        sendBtn.disabled = false;
        sendBtn.textContent = "Send";
        alert("Failed to send message. Please try again.");
    }
});

// Submit Again
document.getElementById("submitAgainBtn").addEventListener("click", function () {
    window.location.href = "https://odrs-contact-form.vercel.app/";
});
