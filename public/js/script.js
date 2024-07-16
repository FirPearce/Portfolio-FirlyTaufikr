// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// emailjs
function sendMail() {
  let params = {
    name: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // check if the input is empty
  if (params.name === "" || params.email === "" || params.message === "") {
    Swal.fire({
      icon: "error",
      title: "Sorry",
      html: "<p>Please fill all the form</p>",
      customClass: {
        popup: "swal-custom-bg",
        confirmButton: "swal-custom-button",
        title: "swal-custom-title",
        htmlContainer: "swal-custom-content",
      },
      backdrop: true,
    });
    return;
  }
  // send email then show the alert if ok then reload the page
  emailjs
    .send("service_rl8rx0t", "template_r3kq6zu", params)
    .then(
      Swal.fire({
        icon: "success",
        title: "Success",
        html: "<p>Your message has been sent</p>",
        customClass: {
          popup: "swal-custom-bg",
          confirmButton: "swal-custom-button",
          title: "swal-custom-title",
          htmlContainer: "swal-custom-content",
        },
        backdrop: true,
      })
    )
    .then(() => {
      window.location.reload();
    });
}
