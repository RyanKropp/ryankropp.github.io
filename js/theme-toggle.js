const themeToggle = document.querySelector("#theme_toggle__btn");

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("theme--light")
    ? enableDarkMode()
    : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("theme--light");
  document.body.classList.add("theme--dark");
  themeToggle.setAttribute("aria-label", "Change to Light Theme");
}

function enableLightMode() {
  document.body.classList.remove("theme--dark");
  document.body.classList.add("theme--light");
  themeToggle.setAttribute("aria-label", "Change to Dark Theme");
}
