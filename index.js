const inputEl = document.getElementById("dark-mode");
const bodyEl = document.body;

// Check saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    bodyEl.style.backgroundColor = "black";
    inputEl.checked = true;
}

inputEl.addEventListener("change", () => {
    if (inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
        localStorage.setItem("theme", "dark");
    } else {
        bodyEl.style.backgroundColor = "white";
        localStorage.setItem("theme", "light");
    }
});
