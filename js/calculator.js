function calculatorReply(msg){

    if(!/^[0-9+\-*/(). x]+$/i.test(msg)){
        return null;
    }

    try{

        let expression = msg.replace(/x/gi,"*");

        let result = eval(expression);

        return "🧮 Answer: <strong>" + result + "</strong>";

    }catch{

        return "❌ Sorry, I couldn't calculate that.";

    }

}
