const roles = ["Web Designer", "Frontend Developer", "UI/UX Enthusiast"];
let index = 0;

function changeRole() {
    document.getElementById("role").textContent = roles[index];
    index = (index + 1) % roles.length;
}

setInterval(changeRole, 2000);
changeRole();
