const max = 100;
var buffer = "";
const fs = require("fs");
const file = "./the_perfect_calculator.js";
const interface = '<html><head><script src="the_perfect_calculator.js"></script></head><input type="text" id="number1" placeholder="Number 1"></input><input type="text" id="number2" placeholder="Number 2"></input><input type="text" id="operator" placehoolder="Operator (+ - * /)"></input><button onclick="calculate()">Calculate</button><p id="res"></p><script>function calculate() {var num1 = document.getElementById("number1").value;var num2 = document.getElementById("number2").value;var operator = document.getElementById("operator").value;document.getElementById("res").innerHTML = "Calculating...";var result = calculator(operator, num1, num2);document.getElementById("res").innerHTML = result;}</script></html>';

fs.writeFileSync(file, "function calculator(operation, num1, num2) {\n", () => {});

for (var i = 1; i < max; i++) {
    for (var j = 1; j < max; j++) {
        buffer = buffer + "if (num1 == '" + i + "' && num2 == '" + j + "' && operation == '+') { return '" + i + " + " + j + " = " + (i + j) + "' };\n"
        buffer = buffer + "if (num1 == '" + i + "' && num2 == '" + j + "' && operation == '-') { return '" + i + " - " + j + " = " + (i - j) + "' };\n"
        buffer = buffer + "if (num1 == '" + i + "' && num2 == '" + j + "' && operation == '*') { return '" + i + " * " + j + " = " + (i * j) + "' };\n"
        buffer = buffer + "if (num1 == '" + i + "' && num2 == '" + j + "' && operation == '/') { return '" + i + " / " + j + " = " + (i / j) + "' };\n"
        console.log("Completed subsection: " + j);
    }
    console.log("Completed main section: " + i);
}
console.log("Writing buffer...");
fs.appendFileSync(file, buffer + "};", () => {});
console.log("Written!")

console.log("Writing interface...");
fs.writeFileSync("./interface.html", interface, () => {});
console.log("Written!");