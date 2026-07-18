alert("tasks.js loaded");
function taskReply(msg, text){

    if(msg.includes("task")){

        return "✅ tasks.js is working!";

    }

    return null;

}
