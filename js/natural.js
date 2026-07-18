function naturalReply(msg){

    // TIRED
    if(
        msg.includes("tired") ||
        msg.includes("exhausted") ||
        msg.includes("sleepy") ||
        msg.includes("worn out") ||
        msg.includes("need rest")
    ){
        return "😴 You sound tired. Get some rest, drink water, and take care of yourself.";
    }

    // HUNGRY
    if(
        msg.includes("hungry") ||
        msg.includes("need food") ||
        msg.includes("starving") ||
        msg.includes("want food")
    ){
        return "🍽️ Sounds like you're hungry. Go grab something delicious to eat!";
    }

    // HAPPY
    if(
        msg.includes("happy") ||
        msg.includes("excited") ||
        msg.includes("feeling good") ||
        msg.includes("i feel good") ||
        msg.includes("great today")
    ){
        return "😊 That's wonderful! I'm really happy you're feeling good today.";
    }

    // SAD
    if(
        msg.includes("sad") ||
        msg.includes("upset") ||
        msg.includes("depressed") ||
        msg.includes("feeling down") ||
        msg.includes("heartbroken")
    ){
        return "💙 I'm sorry you're feeling that way. I'm here if you want to talk.";
    }

    // STRESSED
    if(
        msg.includes("stressed") ||
        msg.includes("stress") ||
        msg.includes("overwhelmed") ||
        msg.includes("frustrated")
    ){
        return "💙 Take a deep breath. One step at a time—you've got this!";
    }

    // BORED
    if(msg.includes("bored")){
        return "🎮 You're bored! Why not review your goals, learn something new, or work on your AI project?";
    }

    // WORK
    if(
        msg.includes("going to work") ||
        msg.includes("at work") ||
        msg.includes("working now") ||
        msg.includes("i'm working") ||
        msg.includes("im working")
    ){
        return "💼 Have a productive day! Stay safe and do your best.";
    }

    // THANKS
    if(
        msg.includes("thank you") ||
        msg.includes("thanks") ||
        msg.includes("thank u") ||
        msg.includes("thx")
    ){
        return "❤️ You're very welcome! I'm always here whenever you need me.";
    }

    // GOOD LUCK
    if(msg.includes("good luck")){
        return "🍀 Thank you! I wish you success in everything you do.";
    }

    // LOVE
    if(
        msg.includes("i love you") ||
        msg.includes("love you")
    ){
        return "❤️ Thank you! I appreciate you too. I'll always be here to help.";
    }

    // GOOD JOB
    if(
        msg.includes("good job") ||
        msg.includes("well done") ||
        msg.includes("nice work")
    ){
        return "😊 Thank you! That means a lot.";
    }

    // BYE
    if(
        msg.includes("bye") ||
        msg.includes("goodbye") ||
        msg.includes("see you") ||
        msg.includes("see you later")
    ){
        return "👋 Goodbye! Have a wonderful day. I'll always be here when you need me.";
    }

    return null;

}
