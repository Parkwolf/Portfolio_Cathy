// script.js
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const btnEnSavoirPlus = document.getElementById("en-savoir-plus");
  const closeBtn = document.querySelector(".close");

  btnEnSavoirPlus.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
