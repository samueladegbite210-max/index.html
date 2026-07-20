alert("brain.js loaded");

function brainReply(msg, text){

    // ==========================
    // GREETINGS
    // ==========================
    if(hasAny(msg,[
        "hi",
        "hello",
        "hey"
    ])){
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

    // ==========================
    // HOW ARE YOU
    // ==========================
    if(hasAny(msg,[
        "how are you",
        "how r you",
        "how are u"
    ])){
        return "😊 I'm doing great, Samuel! Thanks for asking. How are you today?";
    }

    // ==========================
    // FEELINGS
    // ==========================
    if(
        msg.includes("i'm sad") ||
        msg.includes("i am sad") ||
        msg.includes("sad")
    ){
        return "💙 I'm sorry you're feeling sad. I'm here for you. Want to talk about it?";
    }

    if(
        msg.includes("i'm happy") ||
        msg.includes("i am happy") ||
        msg.includes("happy")
    ){
        return "😊 That's wonderful! I'm happy you're feeling good today.";
    }

    if(
        msg.includes("i'm bored") ||
        msg.includes("i am bored") ||
        msg.includes("bored")
    ){
        return "🎉 Let's do something productive! Maybe review your goals or ask me something interesting.";
    }

    if(
        msg.includes("i'm stressed") ||
        msg.includes("i am stressed") ||
        msg.includes("stressed")
    ){
        return "💙 Take a deep breath. One step at a time. You've got this!";
    }

    // ==========================
    // FOOD
    // ==========================
    if(
        msg.includes("eat") ||
        msg.includes("food") ||
        msg.includes("hungry") ||
        msg.includes("meal") ||
        msg.includes("breakfast") ||
        msg.includes("lunch") ||
        msg.includes("dinner")
    ){
        return "🍽️ I recommend eating something healthy like rice, chicken, beans, eggs, vegetables, fruits, or any balanced meal. Don't forget to drink water too!";
    }

    // ==========================
    // SLEEP
    // ==========================
    if(
        msg.includes("sleep") ||
        msg.includes("sleeping") ||
        msg.includes("tired") ||
        msg.includes("rest")
    ){
        return "😴 You sound tired. I think you should get some rest and drink some water. Your body needs it.";
    }

    // ==========================
    // MOTIVATION
    // ==========================
    if(msg.includes("motivate me")){
        return "💪 Success comes from small consistent steps. Keep building your AI Life Assistant—you are creating something amazing.";
    }

    // ==========================
    // WHAT ARE YOU DOING
    // ==========================
    if(hasAny(msg,[
        "what are you doing",
        "what are u doing",
        "what are you up to"
    ])){
        return "🤖 I'm here waiting to help you with your tasks, goals, notes, calendar, and answer your questions.";
    }

    // ==========================
    // DO YOU KNOW ME
    // ==========================
    if(hasAny(msg,[
        "do you know me",
        "who am i"
    ])){
        return "💙 Of course! You're Samuel, and we've been building your AI Life Assistant together.";
    }

    // ==========================
    // JOKES
    // ==========================
    if(
        msg.includes("joke") ||
        msg.includes("funny")
    ){
        return "😂 Why do programmers prefer dark mode? Because light attracts bugs!";
    }

    // ==========================
    // CREATOR
    // ==========================
    if(hasAny(msg,[
        "who create you",
        "who created you",
        "who made you",
        "who built you"
    ])){
        return "🤖 I was built by Samuel with the help of ChatGPT.";
    }

    // ==========================
    // IDENTITY
    // ==========================
    if(hasAny(msg,[
        "who are you",
        "what are you",
        "tell me about yourself"
    ])){
        return "🤖 I'm AI Life Assistant. I'm your personal AI companion. I can help with tasks, goals, notes, calendar, reminders, memory, calculations, and much more.";
    }

    return null;
}
