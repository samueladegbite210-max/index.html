let events = JSON.parse(localStorage.getItem("events")) || [];
function eventReply(msg, text){

    // ================================
    // Natural Event
    // ================================

    if(
        msg.includes("i have") &&
        (
            msg.includes("today") ||
            msg.includes("tomorrow") ||
            msg.includes("monday") ||
            msg.includes("tuesday") ||
            msg.includes("wednesday") ||
            msg.includes("thursday") ||
            msg.includes("friday") ||
            msg.includes("saturday") ||
            msg.includes("sunday")
        )
    ){

        events.push({

            title: text,
            date: new Date().toISOString().split("T")[0],
            time: "",
            location: "",
            notes: "",
            reminder: "none",
            repeat: "none"

        });

        localStorage.setItem("events", JSON.stringify(events));

        return "📅 I've added that to your events.";

    }

    // ================================
    // Create Event
    // ================================

    if(
        msg.startsWith("create an event called ") ||
        msg.startsWith("add an event called ")
    ){

        let eventTitle = text
            .replace(/create an event called /i,"")
            .replace(/add an event called /i,"")
            .trim();

        events.push({

            title:eventTitle,
            date:new Date().toISOString().split("T")[0],
            time:"",
            location:"",
            notes:"",
            reminder:"none",
            repeat:"none"

        });

        localStorage.setItem("events", JSON.stringify(events));

        return "📅 Event \"" + eventTitle + "\" created successfully!";

    }

    // ================================
    // Show Events
    // ================================

    if(hasAny(msg,[

        "show my events",
        "show events",
        "list events",
        "list my events",
        "event list",
        "my events",
        "events",
        "do i have events",
        "do i have any events",
        "can i see my events",
        "what are my events"

    ])){

        if(events.length===0){

            return "📅 You don't have any events.";

        }

        let reply="📅 <strong>Your Events</strong><br><br>";

        events.forEach(function(event,index){

            reply +=
            (index+1)+". "+
            event.title+
            "<br>📆 "+
            event.date+
            "<br>🕒 "+
            (event.time || "No time")+
            "<br><br>";

        });

        return reply;

    }

    // ================================
    // Event Count
    // ================================

    if(hasAny(msg,[

        "event count",
        "how many events",
        "number of events",
        "total events"

    ])){

        return "📅 You currently have " + events.length + " event(s).";

    }

    // ================================
    // Next Event
    // ================================

    if(hasAny(msg,[

        "next event",
        "upcoming event",
        "my next event"

    ])){

        if(events.length===0){

            return "📅 You don't have any upcoming events.";

        }

        let event = events[0];

        return "📅 <strong>Next Event</strong><br><br>" +
               "📝 " + event.title +
               "<br>📆 " + event.date +
               "<br>🕒 " + (event.time || "No time") +
               "<br>📍 " + (event.location || "No location");

    }

    // ================================
    // Search Events
    // ================================

    if(msg.startsWith("search events for ")){

        const keyword = msg.replace("search events for ","").trim();

        const results = events.filter(function(event){

            return event.title.toLowerCase().includes(keyword.toLowerCase());

        });

        if(results.length===0){

            return "❌ No matching events found.";

        }

        let reply="📅 <strong>Matching Events</strong><br><br>";

        results.forEach(function(event,index){

            reply +=
            (index+1)+". "+
            event.title+
            "<br>📆 "+
            event.date+
            "<br><br>";

        });

        return reply;

    }

    return null;

}
