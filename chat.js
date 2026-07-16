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

    alert(text);

    const msg = text.toLowerCase();

    let reply = "🤖 I'm still learning.";

    if(msg === "hi"){
        reply = "Hello!";
    }

    addMessage("ai", reply);

}
