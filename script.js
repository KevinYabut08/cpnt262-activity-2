//Increment
let number = 1;
// adds 1 to the variable
number++;
//This connects the javascript to the html in order to make the id work
document.getElementById("myResult").onclick = function () {
  document.getElementById("myNumber").textContent = `${number}`;
};

//Number to Exponential method
let num = 8.67345;
//turns my number to exponential
let n = num.toExponential();
//This connects the javascript to the html in order to make the id work
document.getElementById("myRes").onclick = function () {
  document.getElementById("myNum").textContent = `${n}`;
};

//String Length
let str = "Web Development";
//counts the length of the string
let length = str.length;
//This connects the javascript to the html in order to make the id work
document.getElementById("myClick").onclick = function () {
  document.getElementById("myString").textContent = `${length}`;
};

//String Slice
let text = "Web Developer";
// cuts/slice the variable
let output = text.slice(0, 4);
//This connects the javascript to the html in order to make the id work
document.getElementById("myClickMe").onclick = function () {
  document.getElementById("myStr").textContent = `${output}`;
};

//Array push
const animals = ["cats", "dogs", "goats"];
//Adds a new variable at the end of the array
animals.push("cows");
//This connects the javascript to the html in order to make the id work
document.getElementById("mySubmit").onclick = function () {
  document.getElementById("myVariable").textContent = `${animals}`;
};

//Array pop
const fruits = ["apple", "orange", "banana"];
//Removes the last variable
fruits.pop();
//This connects the javascript to the html in order to make the id work
document.getElementById("mySub").onclick = function () {
  document.getElementById("myVar").textContent = `${fruits}`;
};

//Object keys
const cellphones = ["iphone", "samsung", "blackberry", "sony"];
//Returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon object
const keys = Object.keys(cellphones);
//This connects the javascript to the html in order to make the id work
document.getElementById("myOutput").onclick = function () {
  document.getElementById("myText").textContent = `${keys}`;
};

//Object values
const object1 = {
  firstName: `Ryan`,
  lastName: `Reynolds`,
  character: `Deadpool`,
};
//Returns an array whose elements are values of enumerable string-keyed properties found directly upon object
const object2 = Object.values(object1);
//This connects the javascript to the html in order to make the id work
document.getElementById("myButton").onclick = function () {
  document.getElementById("myObject").textContent = `${object2}`;
};
