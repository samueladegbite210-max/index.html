
alert("🧠 smartAI.js loaded");

async function smartAIReply(msg){

    // Clean message
    msg = msg.toLowerCase().trim();

    if(msg === ""){
        return null;
    }

    // ==========================
    // LOCAL MODULES
    // ==========================

    let answer = null;

    answer = conversationReply(msg);
    if(answer) return answer;

    answer = knowledgeReply(msg);
    if(answer) return answer;

    answer = calculatorReply(msg);
    if(answer) return answer;

    answer = dateTimeReply(msg);
    if(answer) return answer;

    answer = taskReply(msg, msg);
    if(answer) return answer;

    answer = goalReply(msg, msg);
    if(answer) return answer;

    answer = noteReply(msg, msg);
    if(answer) return answer;

    answer = eventReply(msg, msg);
    if(answer) return answer;

    answer = memoryReply(msg, msg);
    if(answer) return answer;

    answer = naturalReply(msg);
    if(answer) return answer;

    answer = foodReply(msg);
    if(answer) return answer;

    answer = weatherReply(msg);
    if(answer) return answer;

    answer = aiBrainReply(msg);
    if(answer) return answer;

    answer = adviceReply(msg);
    if(answer) return answer;

    // ==========================
    // INTERNET SEARCH
    // ==========================

    answer = await internetReply(msg);

    if(answer){
        return answer;
    }

    // ==========================
    // DEFAULT
    // ==========================

    return "🤖 I couldn't find an answer yet. Try asking another question.";

}
