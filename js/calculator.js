// ================================
// Calculator
// ================================
alert("Calculator loaded");
else if (/^[0-9+\-*/(). x]+$/i.test(msg)) {

    try {

        let expression = msg.replace(/x/gi, "*");

        let result = eval(expression);

        reply = "🧮 Answer: <strong>" + result + "</strong>";

    } catch (error) {

        reply = "❌ Sorry, I couldn't calculate that.";

    }

}
