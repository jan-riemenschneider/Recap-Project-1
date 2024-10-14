const darkModeSwitch = document.querySelector("#darkModeSwitch");
const body = document.querySelector("body");

if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeSwitch.checked = true;
}

darkModeSwitch.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  }
});
