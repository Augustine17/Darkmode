let toggle = document.querySelector("#toggle-container");
let toggleBtn = document.querySelector("#circle");
let page = document.querySelector("body");
let text = document.querySelector("h1")

function changeTheme(){
    toggleBtn.classList.toggle("active");
    page.classList.toggle("black");
    text.classList.toggle("white")
}

toggle.addEventListener("click",changeTheme)
