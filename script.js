// EmailJS Public Key
emailjs.init("6ou6FUbff378jGxUO");

// Form Submit
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send(
      "service_dwgvnk8",
      "template_5ce385u",
      templateParams
    )
    .then(function () {

      alert("Message Sent Successfully!");

      document.getElementById("contact-form").reset();

    })
    .catch(function (error) {

      console.log(error);

      alert("Failed To Send Message!");

    });

});
