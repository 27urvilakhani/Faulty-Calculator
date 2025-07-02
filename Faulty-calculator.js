// faulty calculator
// +-->-
// - --->/
// *-->+
// /-->**
const faultycalculato=(a, b, operator)=>{
    let isfaulty = Math.random() < 0.1
    if (isfaulty) {
        if (operator === "+") return a - b;
        else if (operator === "-") return a / b;
        else if (operator === "*") return a + b;
        else if (operator === "/") return a ** b;
    
    } else {
        if (operator === "+") return a + b;
        else if (operator === "-") return a - b;
        else if (operator === "*") return a * b;
        else if (operator === "**") return a ** b;
    }
};
let result = faultycalculato(2,6,"-")
console.log(result)
