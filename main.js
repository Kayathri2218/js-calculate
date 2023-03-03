
let numericInput = document.getElementById("numric");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let enter = document.getElementById("enter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("mul");
let divide = document.getElementById("division");
let modulo = document.getElementById("modul");
let power = document.getElementById("power");

let input = "";
let result = "";


one.addEventListener("click",function()  {
  input += "1";
  numericInput.value = input;
});

two.addEventListener("click", function()  {
  input += "2";
  numericInput.value = input;
});

three.addEventListener("click", function()  {
  input += "3";
  numericInput.value = input;
});

four.addEventListener("click", function() {
  input += "4";
  numericInput.value = input;
});

five.addEventListener("click", function() {
  input += "5";
  numericInput.value = input;
});

six.addEventListener("click", function() {
  input += "6";
  numericInput.value = input;
});

seven.addEventListener("click", function() {
  input += "7";
  numericInput.value = input;
});

eight.addEventListener("click", function() {
  input += "8";
  numericInput.value = input;
});

nine.addEventListener("click", function() {
  input += "9";
  numericInput.value = input;
});

zero.addEventListener("click",function () {
  input += "0";
  numericInput.value = input;
});

plus.addEventListener("click", function() {
  input += "+";
  numericInput.value = input;
});

minus.addEventListener("click", function() {
  input += "-";
  numericInput.value = input;
});

multiply.addEventListener("click", function() {
  input += "*";
  numericInput.value = input;
});

divide.addEventListener("click", function() {
  input += "/";
  numericInput.value = input;
});

modulo.addEventListener("click", function() {
  input += "%";
  numericInput.value = input;
});

power.addEventListener("click", function() {
  input += "**";
  numericInput.value = input;
});

enter.addEventListener("click", function    () {
  result = eval(input);
  numericInput.value = result;
  input = "";
});
