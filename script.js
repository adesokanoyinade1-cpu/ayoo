let current = 0;
const sections = document.querySelectorAll(".section");

function nextSection() {
    sections[current].classList.remove("active");
    current++;
    if (current < sections.length) {
        sections[current].classList.add("active");
    }
}

function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    if (password === "ayo20") {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
        document.getElementById("bg-music").play();
    } else {
        alert("Wrong password 💔");
    }
}
