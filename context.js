// ==========================
// Conversation Context
// ==========================

let chatContext = JSON.parse(localStorage.getItem("chatContext")) || [];

function saveContext(role, message){

    chatContext.push({
        role: role,
        message: message
    });

    // Keep only the latest 20 messages
    if(chatContext.length > 20){
        chatContext.shift();
    }

    localStorage.setItem(
        "chatContext",
        JSON.stringify(chatContext)
    );

}

function getContext(){

    return chatContext;

}

function clearContext(){

    chatContext = [];

    localStorage.removeItem("chatContext");

}
