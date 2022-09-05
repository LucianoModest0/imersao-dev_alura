var studentName = "João";

var grades = [9, 7, 4, 2];

let sum = 0;

for (i = 0; i < grades.length; i++) {
  sum += grades[i];
}

let mean = sum / grades.length;

const container = document.querySelector(".container");
const showResult = document.createElement("p");
showResult.textContent = `Com as notas ${grades}. A média final de ${studentName} foi ${mean}`;
container.appendChild(showResult);
