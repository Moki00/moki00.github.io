// form
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    console.log("Form submitted");

    // init("USER_ID");
    emailjs.init("3zPT4IVEKJkbl8zDx");

    // Collect form data
    const formData = {
      name: this.querySelector("[name='from_name']").value,
      email: this.querySelector("[name='email']").value,
      message: this.querySelector("[name='message']").value,
    };

    // emailjs:SERVICE_ID-TEMPLATE_ID-formData
    emailjs
      .send("service_mbs3adl", "template_jytl819", formData)
      .then(() => {
        alert("Thank you for your message! We will get back to you soon.");
        this.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Error sending your message. Please try again later.");
      });
  });
