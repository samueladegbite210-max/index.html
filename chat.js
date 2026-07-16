const input = document.getElementById("userInput");
const chat = document.getElementById("chatBox");

function addMessage(type, text) {
    chat.innerHTML += `
        <div class="message ${type}">
            ${text}
        </div>
    `;
}

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    addMessage("user", text);

    input.value = "";

    aiReply(text);

}
function aiReply(text){

    const msg = text.toLowerCase();
    let reply = "";

    // Greetings
    if(msg === "hi" || msg === "hello"){

        reply = "👋 Hello Samuel! How can I help you today?";

    }

    else if(msg.includes("good morning")){

        reply = "🌅 Good morning! Have a productive day.";

    }

    // Knowledge
    else if(msg.includes("who are you")){

        reply = "🤖 I'm AI Life Assistant, your personal AI companion.";

    }

    else if(msg.includes("who made you")){

        reply = "💙 I was built by Samuel with the help of ChatGPT.";

    }

    else if(msg.includes("what can you do")){

        reply = "🚀 I can help with studying, coding, tasks, goals, notes, planning and much more.";

    }

    else if(msg.includes("what is html")){

        reply = "🌐 HTML is used to build the structure of websites.";

    }

    else if(msg.includes("what is css")){

        reply = "🎨 CSS is used to style websites.";

    }

    else if(msg.includes("what is javascript")){

        reply = "💻 JavaScript makes websites interactive.";

    }

    else if(
        msg.includes("what is ai") ||
        msg.includes("artificial intelligence")
    ){

        reply = "🤖 Artificial Intelligence enables computers to learn, reason and solve problems.";

    }

    else{

        reply = "🤖 I'm still learning.";

    }

    addMessage("ai", reply);

}
