let goals = JSON.parse(localStorage.getItem("goals")) || [];
console.log("goals.js loaded");

function goalReply(msg, text){

    // ================================
    // Create Goal
    // ================================

    if(msg.startsWith("create a goal called ")){

        let goalName = text.replace(/create a goal called /i,"").trim();

        if(goalName === ""){
            return "❌ Please enter a goal.";
        }

        goals.push({
            id: Date.now(),
            text: goalName,
            done: false
        });

        localStorage.setItem("goals", JSON.stringify(goals));

        return "🎯 Goal \"" + goalName + "\" created successfully!";

    }

    // ================================
    // Show Goals
    // ================================

    if(hasAny(msg,[

        "show my goals",
        "show goals",
        "goal list",
        "list goals",
        "list my goals",
        "my goals",
        "what are my goals",
        "do i have goals",
        "do i have any goals",
        "can i see my goals",
        "what goals do i have"

    ])){

        if(goals.length===0){

            return "🎯 You don't have any goals.";

        }

        let reply = "🎯 <strong>Your Goals</strong><br><br>";

        goals.forEach(function(goal,index){

            reply +=
            (goal.done ? "✅ " : "⬜ ") +
            (index+1) +
            ". " +
            goal.text +
            "<br>";

        });

        return reply;

    }

    // ================================
    // Goal Count
    // ================================

    if(hasAny(msg,[

        "goal count",
        "how many goals",
        "number of goals",
        "total goals"

    ])){

        return "🎯 You currently have " + goals.length + " goal(s).";

    }

    return null;

}
