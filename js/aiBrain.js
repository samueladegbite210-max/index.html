function aiBrainReply(msg){

    const intent = detectIntent(msg);

    switch(intent){

        case "greeting":
            return "👋 Hello Samuel!";

        case "food":
            return "🍽️ I recommend rice, beans, eggs, vegetables and fruit.";

        case "sleep":
            return "😴 You sound tired. Go get some rest.";

        case "creator":
            return "🤖 I was built by Samuel with the help of ChatGPT.";

        case "identity":
            return "🤖 I'm AI Life Assistant.";

        case "knowme":
            return "💙 Of course I know you, Samuel.";

        default:
            return null;

    }

}
