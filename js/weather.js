function weatherReply(msg){

    if(

        msg.includes("weather") ||
        msg.includes("forecast") ||
        msg.includes("temperature") ||
        msg.includes("is it raining") ||
        msg.includes("is it sunny") ||
        msg.includes("hot today") ||
        msg.includes("cold today")

    ){

        return "🌤️ I can't check live weather yet, but this feature is coming in AI Life Assistant Version 2.0. Soon I'll be able to show real-time weather for any city.";

    }

    return null;

}
