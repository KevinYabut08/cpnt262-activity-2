//This line is the variable of my code for increment
let number = 1;
// adds 1 to the variable
number++;
//This connects the javascript to the html in order to make the id work
document.getElementById("myResult").onclick = function () {
  document.getElementById("myNumber").textContent = `${number}`;
};

//This line is the variable of my code for number to exponential
let num = 8.67345;
//This is the method that I used to turn my number to exponential
let n = num.toExponential();
//This connects the javascript to the html in order to make the id work
document.getElementById("myRes").onclick = function () {
  document.getElementById("myNum").textContent = `${n}`;
};

let str = "Web Development";
let length = str.length;
document.getElementById("myClick").onclick = function () {
  document.getElementById("myString").textContent = `${length}`;
};

let text = "Web Developer";
let output = text.slice(0, 4);
document.getElementById("myClickMe").onclick = function () {
  document.getElementById("myStr").textContent = `${output}`;
};

const animals = ["cats", "dogs", "goats"];
animals.push("cows");
document.getElementById("mySubmit").onclick = function () {
  document.getElementById("myVariable").textContent = `${animals}`;
};

const fruits = ["apple", "orange", "banana"];
fruits.pop();
document.getElementById("mySub").onclick = function () {
  document.getElementById("myVar").textContent = `${fruits}`;
};

const cellphones = ["iphone", "samsung", "blackberry", "sony"];
const keys = Object.keys(cellphones);
document.getElementById("myOutput").onclick = function () {
  document.getElementById("myText").textContent = `${keys}`;
};

const object1 = {
  firstName: `Ryan`,
  lastName: `Reynolds`,
  character: `Deadpool`,
};
const object2 = Object.values(object1);
document.getElementById("myButton").onclick = function () {
  document.getElementById("myObject").textContent = `${object2}`;
};
