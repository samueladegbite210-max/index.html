// ================================
// Calculator
// ================================
alert("Calculator loaded");
function calculatorReply(msg){

    let expression = msg.replace(/what is|calculate|solve|=/gi,"").trim();

    if(expression === "") return null;

    if(/^[0-9+\-*/().\s]+$/.test(expression)){

        try{

            let result = Function("return " + expression)();

            return "🧮 Answer: " + result;

        }catch(e){

            return "❌ I couldn't calculate that.";

        }

    }

    return null;

}
