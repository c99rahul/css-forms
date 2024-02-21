const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

if (themeSwitch) {
  themeSwitch.addEventListener("change", (e) => {
    if (e.target.checked) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  });
}
