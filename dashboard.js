// ====================================
// AI Life Assistant Dashboard
// dashboard.js
// ====================================

// Welcome Message
const username = localStorage.getItem("username") || "Samuel";

const welcomeText = document.getElementById("welcomeText");

if (welcomeText) {
    welcomeText.textContent = "👋 Welcome Back, " + username;
}

// Today's Date
const todayDate = document.getElementById("todayDate");

if (todayDate) {
    todayDate.textContent = new Date().toDateString();
}

// Live Clock
function updateClock() {

    const currentTime = document.getElementById("currentTime");

    if (currentTime) {
        currentTime.textContent =
        new Date().toLocaleTimeString();
    }

}

updateClock();

setInterval(updateClock, 1000);

// AI Tip of the Day
const tips = [
    "Complete your hardest task first.",
    "Take a 5-minute break after every hour of work.",
    "Review your goals every morning.",
    "Finish one task before starting another.",
    "Small daily progress leads to big success.",
    "Stay organized and plan tomorrow before sleeping."
];

const tipText = document.getElementById("tipText");

if (tipText) {

    const day = new Date().getDate();

    tipText.textContent =
    tips[day % tips.length];

}
