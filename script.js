function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");

    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";

    let valid = true;

    if (name === "") {
      nameError.innerText = "Please enter your name.";
      valid = false;
    }

    if (email === "") {
      emailError.innerText = "Please enter your email.";
      valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      emailError.innerText = "Please enter a valid email.";
      valid = false;
    }

    if (phone === "") {
      phoneError.innerText = "Please enter your phone number.";
      valid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      phoneError.innerText = "Enter a valid 10-digit phone number.";
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
    }
  }


