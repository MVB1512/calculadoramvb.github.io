function calcResta(){
    var num1Res = document.getElementById("num1Res").value;
    var num2Res = document.getElementById("num2Res").value;
    document.getElementById("rtaRes").innerHTML = num1Res - num2Res;
}
function calcSuma(){
    var num1Sum = document.getElementById("num1Sum").value;
    var num2Sum = document.getElementById("num2Sum").value;
    num1Sum = parseFloat(num1Sum);
    num2Sum = parseFloat(num2Sum);
    document.getElementById("rtaSum").innerHTML = num1Sum + num2Sum;
}
function calcMulti(){
    var num1Mul = document.getElementById("num1Mul").value;
    var num2Mul = document.getElementById("num2Mul").value;
    document.getElementById("rtaMul").innerHTML = num1Mul * num2Mul;

}
function calcDiv(){
    var num1Div = document.getElementById("num1Div").value;
    var num2Div = document.getElementById("num2Div").value;
    document.getElementById("rtaDiv").innerHTML = num1Div / num2Div;
}