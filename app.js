console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")

var output = document.getElementById('output');

var firstStatment = '';
var operator = ''
var lastStatment = '';

// Block or Disable a condition

function calculator(parameter) {

    // Operators Logic Handling
    if (parameter === "+" && operator === "") {
        operator = parameter;
        output.innerHTML += parameter;
    } else if (parameter === "-" && operator === "") {
        operator = parameter;
        output.innerHTML += parameter;
    } else if (parameter === "x" && operator === "") {
        operator = parameter;
        output.innerHTML += parameter;
    } else if (parameter === "/" && operator === "") {
        operator = parameter;
        output.innerHTML += parameter;
    } else if (parameter === "%" && operator === "") {
        operator = parameter;
        output.innerHTML += parameter;
    }

    // Numbers Logic Handling
    else {
        if (operator === "") {
            firstStatment += parameter;
            output.innerHTML += parameter;
        } else {
            lastStatment += parameter;
            output.innerHTML += parameter;
        }
    }


    // output.innerHTML += parameter

}


function finalOutput() {
    if (operator === "") {
        output.innerHTML = "Error"
    } else if (firstStatment === "" || lastStatment === "") {
        output.innerHTML = "Error"
    } else if (operator === "+") {
        var final = Number(firstStatment) + Number(lastStatment);
        output.innerHTML = final
    }
}



// var userName = document.getElementById('userName');

// function submit() {
//     console.log(userName.value);
// }

// function reset() {
//     userName.value = ''
// }

// function defaultName() {
//     userName.value = "Ali Huzaifa"
// }





