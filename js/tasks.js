function taskReply(msg, text){

    // ================================
    // Natural Task Creation
    // ================================

    if(
        msg.includes("i need to") ||
        msg.includes("remind me to") ||
        msg.includes("don't let me forget to")
    ){

        let taskName = text
            .replace(/i need to/i,"")
            .replace(/remind me to/i,"")
            .replace(/don't let me forget to/i,"")
            .trim();

        tasks.push({
            id: Date.now(),
            text: taskName,
            done: false
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

        return "✅ I've created a task: \"" + taskName + "\"";
    }

    // ================================
    // Create Task
    // ================================

    if(msg.startsWith("create a task called ")){

        let taskName = text.replace(/create a task called /i,"").trim();

        if(taskName === ""){
            return "❌ Please enter a task name.";
        }

        tasks.push({
            id: Date.now(),
            text: taskName,
            done: false
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

        return "✅ Task \"" + taskName + "\" created successfully!";
    }

    // ================================
    // Show Tasks
    // ================================

    if(hasAny(msg,[
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
            return "📋 You don't have any tasks.";
        }

        let reply = "📋 <strong>Your Tasks</strong><br><br>";

        tasks.forEach(function(task,index){

            reply +=
            (task.done ? "✅ " : "⬜ ") +
            (index + 1) +
            ". " +
            task.text +
            "<br>";

        });

        return reply;
    }

    // ================================
    // Task Count
    // ================================

    if(hasAny(msg,[
        "how many tasks",
        "task count",
        "number of tasks",
        "total tasks"
    ])){

        return "📋 You currently have " + tasks.length + " task(s).";

    }

    return null;

}


