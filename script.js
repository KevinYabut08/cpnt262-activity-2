let fullName = "Kevin Yabut";
let age = 22;
let student = true;

document.getElementById("p2").textContent = `I'm ${age} years old`;
document.getElementById("p3").textContent = `Am I a student: ${student}`;

fullName = fullName.toLowerCase();
document.getElementById("p1").textContent = `My name is ${fullName}`;
