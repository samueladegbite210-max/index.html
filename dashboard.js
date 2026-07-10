// =====================================
// AI Life Assistant Dashboard
// Version 3.0
// =====================================

// Welcome Message
alert("Step 1");

const username = localStorage.getItem("username") || "Samuel";

const welcomeText = document.getElementById("welcomeText");

if (welcomeText) {
    welcomeText.textContent = "👋 Welcome Back, " + username;
}

alert("Step 2");

function updateDate() {
    const todayDate = document.getElementById("todayDate");

    if (todayDate) {
        todayDate.textContent = new Date().toDateString();
    }
}

alert("Step 3");

updateDate();

alert("Step 4");
