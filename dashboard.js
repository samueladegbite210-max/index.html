// =====================================
// AI Life Assistant Dashboard
// Version 3.0
// =====================================

// Welcome Message
const username = localStorage.getItem("username") || "Samuel";

const welcomeText = document.getElementById("welcomeText");

if (welcomeText) {
    welcomeText.textContent = "👋 Welcome Back, " + username;
}

// ==========================
// Live Date
// ==========================

function updateDate() {

    const todayDate = document.getElementById("todayDate");

    if (todayDate) {
        todayDate.textContent = new Date().toDateString();
    }

}

// ==========================
// Live Clock
// ==========================

function updateClock() {

    const currentTime = document.getElementById("currentTime");

    if (currentTime) {
        currentTime.textContent =
        new Date().toLocaleTimeString();
    }

}

// ==========================
// AI Tip of the Day
// ==========================

const tips = [

    "💪 Complete your hardest task first.",

    "📚 Learn something new every day.",

    "🎯 Focus on one task at a time.",

    "💧 Drink enough water today.",

    "😴 Rest well to stay productive.",

    "🚀 Small progress every day leads to big success.",

    "🧠 Plan tomorrow before going to bed."

];

function updateAITip() {

    const tipText = document.getElementById("tipText");

    if (!tipText) return;

    const day = new Date().getDate();

    tipText.textContent = tips[day % tips.length];

}

// ==========================
// Start Dashboard
// ==========================

updateDate();
updateClock();
updateAITip();

setInterval(updateClock,1000);
