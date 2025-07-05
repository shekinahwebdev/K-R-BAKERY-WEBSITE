document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const emailInput = document.querySelector(".email_input");
  const errorMessage = document.querySelector(".error");

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value;

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    if (!isValidEmail(email)) {
      emailInput.classList.add("invalid");
      errorMessage.classList.add("show");
      return;
    } else {
      emailInput.classList.remove("invalid");
      errorMessage.classList.remove("show");
    }

    emailjs.send("service_z5fg2vk", "template_i45yjbx", params).then(
      () => {
        form.reset();
        document.querySelector(".success-message").style.display = "block";
        setTimeout(() => {
          document.querySelector(".success-message").style.display = "none";
          window.location.reload();
        }, 100);
      },
      (error) => {
        console.error("Email send error:", error);
        alert("Something went wrong. Please try again.");
      }
    );

    emailjs.send("service_z5fg2vk", "template_sbyshas", {
      from_name: params.name,
      from_email: params.email,
    });
  });

  // const links = document.querySelectorAll("a");

  // links.forEach((link) => {
  //   link.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     document.body.classList.add("fade-out");

  //     setTimeout(() => {
  //       window.location.href = link.href;
  //     }, 300);
  //   });
  // });
});
