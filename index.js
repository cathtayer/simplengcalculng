let button=document.getElementById('compute');
let output=document.getElementById('print');

button.onclick=function calculate() {
    window.alert('Okay, will calculate it!');

    var operation = document.getElementById('operation').value;

    let num1=document.getElementById('num1').value;
    val1=parseInt(num1);
    let num2=document.getElementById('num2').value;
    val2=parseInt(num2);

    var output;
    switch (operation) {
        case "Addition":
            if(isNaN(val1)||isNaN(val2)){
                window.alert('Input/s is/are empty.');
            } else {
                output=val1+val2;
            }
            break;
        case "Subtraction":
            if(isNaN(val1)||isNaN(val2)){
                window.alert('Input/s is/are empty.');
            } else {
                output=val1-val2;
            }
            break;
        case "Multiplication":
            if(isNaN(val1)||isNaN(val2)){
                window.alert('Input/s is/are empty.');
            } else {
                output=val1*val2;
            }
            break;
        case "Division":
            if(val2===0) {
                output="The resulting value is undefined.";
            } else {
                output=val1/val2;
            }
            break;
        default:
            output="Invalid operation!"
    }

    document.getElementById('print').innerText=output;
}