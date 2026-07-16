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
    alert("chat.js works!");

    const text = input.value.trim();

    if (text === "") return;

    addMessage("user", text);

    input.value = "";

    addMessage("ai", "Hello Samuel!");
}
function aiReply(text){

    const msg = text.toLowerCase();
    let reply = "";

    if(msg === "hi" || msg === "hello"){

        reply = "👋 Hello Samuel! How can I help you today?";

    }

    else if(msg.includes("good morning")){

        reply = "🌅 Good morning! Have a productive day.";

    }

    else{

        reply = "🤖 I'm still learning.";

    }

    addMessage("ai", reply);
}
