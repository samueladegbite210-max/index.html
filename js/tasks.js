// ================================
// Create Task
// ================================

else if(msg.startsWith("create a task called ")){

    let taskName = text.replace(/create a task called /i,"").trim();

    if(taskName === ""){

        reply = "❌ Please enter a task name.";

    }else{

        tasks.push({
            id: Date.now(),
            text: taskName,
            done: false
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

        reply = "✅ Task \"" + taskName + "\" created successfully!";

    }

}

else if(hasAny(msg, [

    "show my tasks",
    "show tasks",
    "task list",
    "list tasks",
    "list my tasks",
    "what are my tasks",
    "what's on my to-do list",
    "what's on my todo list",
    "do i have any tasks",
    "do i have tasks",
    "my tasks",
    "to do list",
    "todo list"

])){

    if(tasks.length === 0){

        reply = "📋 You don't have any tasks.";

    }else{

        reply = "📋 <strong>Your Tasks</strong><br><br>";

        tasks.forEach(function(task,index){

            reply +=
            (task.done ? "✅ " : "⬜ ") +
            (index + 1) +
            ". " +
            task.text +
            "<br>";

        });

    }

}
// ================================
// Task Count
// ================================

else if(

    msg.includes("how many tasks") ||
    msg.includes("task count")

){

    reply = "📋 You currently have " + tasks.length + " task(s).";

}
// ================================
// Create Goal
// ================================

else if(msg.startsWith("create a goal called ")){

    let goalName = text.replace(/create a goal called /i,"").trim();

    if(goalName === ""){

        reply = "❌ Please enter a goal.";

    }else{

        goals.push({
            id: Date.now(),
            text: goalName,
            done: false
        });

        localStorage.setItem("goals", JSON.stringify(goals));

        reply = "🎯 Goal \"" + goalName + "\" created successfully!";

    }

}



