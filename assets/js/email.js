window.onload = function () {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      function isName(name) {
        var regex = /^[a-zA-Z\s]*$/;
        return regex.test(name);
      }
      function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }
      function isNameTooShort(name) {
        if (name.length < 2) {
          return false;
        } else {
          return true;
        }
      }
      function isNameTooLong(name) {
        if (name.length > 30) {
          return false;
        } else {
          return true;
        }
      }
      function isEmailTooShort(email) {
        if (email.length < 7) {
          return false;
        } else {
          return true;
        }
      }
      function isEmailTooLong(email) {
        if (email.length > 100) {
          return false;
        } else {
          return true;
        }
      }
      function isMessageTooShort(message) {
        if (message.length < 11) {
          return false;
        } else {
          return true;
        }
      }
      function isMessageTooLong(message) {
        if (message.length > 1000) {
          return false;
        } else {
          return true;
        }
      }
      var nameAlert = "";
      var emailAlert = "";
      var messageAlert = "";
      var isNameValid = document.getElementById("name").value;
      var isEmailValid = document.getElementById("email").value;
      var isMessageValid = document.getElementById("message").value;
      // no empty input fields validation
      if (isNameValid == "" || isEmailValid == "" || isMessageValid == "") {
        nameAlert +=
          "<div class='alert alert-warning text-center alert-contact alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para'>Please fill out all fields!</p></div>";
        document.getElementById("error-message").innerHTML = nameAlert;
        return false;
      }
      // name validation
      if (!isName(isNameValid)) {
        nameAlert +=
          "<div class='alert alert-warning text-center alert-contact alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para'>Please enter a <span class='underline'>valid</span> name!</p>";
        document.getElementById("error-message").innerHTML = nameAlert;
        return false;
      } else if (!isNameTooShort(isNameValid)) {
        nameAlert +=
          "<div class='alert alert-warning text-center alert-contact' alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para'>The name you have entered is too short! Please try again.</p>";
        document.getElementById("error-message").innerHTML = nameAlert;
        return false;
      } else if (!isNameTooLong(isNameValid)) {
        nameAlert +=
          "<div class='alert alert-warning text-center alert-contact' alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para'>The name you have entered is too long! Please try again (max. 30 characters)</p>";
        document.getElementById("error-message").innerHTML = nameAlert;
        return false;
      }
      // email validation
      if (!isEmail(isEmailValid)) {
        emailAlert +=
          "<div class='alert alert-warning text-center alert-contact' alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para alert-para-inner'>Please enter a <span class='underline'>valid</span> email address!</p><p class='alert-para'>e.g. <span class='emphasise'>yourname@gmail.com</span></p></div>";
        document.getElementById("error-message").innerHTML = emailAlert;
        return false;
      } else if (!isEmailTooShort(isEmailValid)) {
        emailAlert +=
          "<div class='alert alert-warning text-center alert-contact' alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para'>The email you have entered is too short! Please try again.</p>";
        document.getElementById("error-message").innerHTML = emailAlert;
        return false;
      } else if (!isEmailTooLong(isEmailValid)) {
        emailAlert +=
          "<div class='alert alert-warning text-center alert-contact' alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para'>The email you have entered is too long! Please try again (max. 100 characters)</p>";
        document.getElementById("error-message").innerHTML = emailAlert;
        return false;
      }
      // message validation
      if (!isMessageTooShort(isMessageValid)) {
        messageAlert +=
          "<div class='alert alert-warning text-center alert-contact' alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para'>Your message is too short! Please try again.</p>";
        document.getElementById("error-message").innerHTML = messageAlert;
        return false;
      } else if (!isMessageTooLong(isMessageValid)) {
        messageAlert +=
          "<div class='alert alert-warning text-center alert-contact' alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para'>Your message is too long! Please try again (max. 1,000 characters)</p>";
        document.getElementById("error-message").innerHTML = messageAlert;
        return false;
      }
      // generate a five digit number for the contact-number variable
      this.contact_number.value = Math.random() * 100000;
      // these IDs from the previous steps
      emailjs.sendForm("gmail", "ltd_contact_form", this).then(
        function (response) {
          document.getElementById("error-message").innerHTML = "";
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          $("#modal-contact").modal();
        },
        function (error) {
          setTimeout(() => {
            document.getElementById("error-message").innerHTML =
              "<div class='alert alert-danger text-center alert-contact' alert-dismissible fade show' role='alert'><button type='button' class='p-0 close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><span class='icon icon-warning'></span><br><p class='alert-para alert-para-inner'>We're sorry, but something's gone wrong...</p><p class='alert-para'>Please refresh the page and try again!</p></div>";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
          }, 3000);
        }
      );
    });
};

$(document).ready(function () {
  $(document).on("shown.bs.modal", "#modal-contact", function () {
    setTimeout(function () {
      $("#modal-contact").modal("hide");
    }, 5000);
  });
  $(document).on("hidden.bs.modal", "#modal-contact", function () {
    window.location.href = "index.html";
  });
});
