alert("brain.js loaded");
function brainReply(msg, text){
    // ===== Greetings =====
    // ==========================
// GREETINGS
// ==========================
if (
    msg.includes("hi") ||
    msg.includes("hello") ||
    msg.includes("hey")
){
    return "👋 Hello Samuel! How can I help you today?";
}

if(msg.includes("good morning")){
    return "🌅 Good morning Samuel! I hope you have a productive day.";
}

if(msg.includes("good afternoon")){
    return "☀️ Good afternoon Samuel! How is your day going?";
}

if(msg.includes("good evening")){
    return "🌇 Good evening Samuel! Hope your day went well.";
}

if(msg.includes("good night")){
    return "🌙 Good night Samuel! Sleep well and recharge for tomorrow.";
}
    // ===== Feelings =====
    if(
        msg.includes("i'm sad") ||
        msg.includes("i am sad")
    ){
        return "💙 I'm sorry you're feeling sad. I'm here for you. Want to talk about it?";
    }
    if(
        msg.includes("i'm happy") ||
        msg.includes("i am happy")
    ){
        return "😊 That's wonderful! I'm happy you're feeling good today.";
    }
    if(
        msg.includes("i'm bored") ||
        msg.includes("i am bored")
    ){
        return "🎉 Let's do something productive! Maybe review your goals or ask me something interesting.";
    }
    if(
        msg.includes("i'm stressed") ||
        msg.includes("i am stressed")
    ){
        return "💙 Take a deep breath. One step at a time. You've overcome difficult days before.";
    }
    
    
// FOOD
if(
    msg.includes("eat") ||
    msg.includes("food") ||
    msg.includes("hungry") ||
    msg.includes("meal") ||
    msg.includes("breakfast") ||
    msg.includes("lunch") ||
    msg.includes("dinner")
){
    return "🍽️ I recommend eating something healthy like rice, chicken, beans, eggs, vegetables, fruits, or whatever balanced meal you enjoy.";
}


// SLEEP
if(
    msg.includes("sleep") ||
    msg.includes("sleeping") ||
    msg.includes("tired") ||
    msg.includes("rest")
){
    return "😴 You sound tired. I think you should get some rest and drink some water. Your body needs it.";

}
    // ===== Motivation =====
    if(
        msg.includes("motivate me")
    ){
        return "💪 Success comes from small consistent steps. Keep building your AI Life Assistant—you are creating something amazing.";
    }
    if(msg.includes("how are you")){
    return "😊 I'm doing great, Samuel! Thanks for asking. How are you today?";
}

if(msg.includes("what are you doing")){
    return "🤖 I'm here waiting to help you with your tasks, goals, notes, questions, and anything else you need.";
}

if(msg.includes("do you know me")){
    return "💙 Of course! You're Samuel, and we've been building your AI Life Assistant together.";
}
    // ===== Joke =====
    if(
        msg.includes("joke")
    ){
        return "😂 Why do programmers prefer dark mode? Because light attracts bugs!";
    }

// ===== Creator =====
if(hasAny(msg,[
    "who create you",
    "who created you",
    "who made you",
    "who built you"
])){
    return "🤖 I was built by Samuel with the help of ChatGPT.";
}
    }
    // ===== Identity =====
    if(
        msg.includes("who are you")
    ){
        return "🤖 I'm AI Life Assistant. I'm here to help you organize your life and answer your questions.";
    }
    return null;
}
