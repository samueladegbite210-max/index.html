// ===============================
// AI Life Assistant Dashboard 3.0
// ===============================

// Welcome Message
const username = localStorage.getItem("username") || "Samuel";

const welcomeText = document.getElementById("welcomeText");

if (welcomeText) {
    welcomeText.textContent = "👋 Welcome Back, " + username;
}

// Today's Date
function updateDate() {
    const todayDate = document.getElementById("todayDate");

    if (todayDate) {
        todayDate.textContent = new Date().toDateString();
    }
}

// Live Clock
function updateClock() {
    const currentTime = document.getElementById("currentTime");

    if (currentTime) {
        currentTime.textContent =
            new Date().toLocaleTimeString();
    }
}

// AI Tip
const tips = [
    "💪 Complete your hardest task first.",
    "📚 Learn something new every day.",
    "🎯 Focus on one task at a time.",
    "💧 Drink enough water.",
    "😴 Get enough sleep.",
    "🚀 Small progress every day leads to big success.",
    "🧠 Plan tomorrow today."
];

function updateTip() {

    const tipText = document.getElementById("tipText");

    if (!tipText) return;

    const day = new Date().getDate();

    tipText.textContent =
        tips[day % tips.length];
}

// Start Everything
updateDate();
updateClock();
updateTip();

setInterval(updateClock, 1000);
