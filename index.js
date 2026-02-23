const inputEl = document.getElementById("dark-mode");
const bodyEl = document.querySelector("body");

inputEl.addEventListener("input", () =>{
    if (inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white";
    }
})