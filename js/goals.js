alert("Goals loaded");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

function goalReply(msg, text){

    // Reload latest goals
    goals = JSON.parse(localStorage.getItem("goals")) || [];

    // ==========================
    // Smart Goal Detection
    // ==========================

    if(
        msg.startsWith("i want to ") ||
        msg.startsWith("my goal is to ") ||
        msg.startsWith("i plan to ")
    ){

        const goalName = text
            .replace(/i want to/i,"")
            .replace(/my goal is to/i,"")
            .replace(/i plan to/i,"")
            .trim();

        goals.push({
            id: Date.now(),
            text: goalName,
            done:false
        });

        localStorage.setItem("goals",JSON.stringify(goals));

        return "🎯 Great goal!\n\nI've added:\n🎯 " + goalName;
    }

    // ==========================
    // Create Goal
    // ==========================

    if(
        msg.startsWith("create a goal called ") ||
        msg.startsWith("add a goal called ")
    ){

        const goalName = text
            .replace(/create a goal called/i,"")
            .replace(/add a goal called/i,"")
            .trim();

        goals.push({
            id:Date.now(),
            text:goalName,
            done:false
        });

        localStorage.setItem("goals",JSON.stringify(goals));

        return "🎯 Goal created successfully!";
    }

    // ==========================
    // Goal Summary
    // ==========================

    if(
        msg.includes("goal summary") ||
        msg.includes("how many goals")
    ){

        const completed = goals.filter(g=>g.done).length;

        return `📊 Goal Summary

🎯 Total Goals: ${goals.length}
✅ Completed: ${completed}
⏳ Pending: ${goals.length-completed}`;
    }

    // ==========================
    // Show Goals
    // ==========================

    if(
        msg.includes("show my goals") ||
        msg.includes("list my goals") ||
        msg.includes("show goals")
    ){

        if(goals.length===0){

            return "🎯 You don't have any goals yet.";

        }

        let reply="🎯 Your Goals\n\n";

        goals.forEach(goal=>{

            reply += `${goal.done ? "✅":"🎯"} ${goal.text}\n`;

        });

        return reply;
    }

    // ==========================
    // Pending Goals
    // ==========================

    if(msg.includes("pending goals")){

        const pending = goals.filter(g=>!g.done);

        if(pending.length===0){

            return "🎉 You have no pending goals.";

        }

        let reply="⏳ Pending Goals\n\n";

        pending.forEach(goal=>{

            reply += `🎯 ${goal.text || goal.title}\n`;

        });

        return reply;
    }

    // ==========================
    // Completed Goals
    // ==========================

    if(msg.includes("completed goals")){

        const completed = goals.filter(g=>g.done);

        if(completed.length===0){

            return "You haven't completed any goals yet.";

        }

        let reply="✅ Completed Goals\n\n";

        completed.forEach(goal=>{

            reply += `✅ ${goal.text}\n`;

        });

        return reply;
    }

    return null;
}
