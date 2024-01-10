const array1 = [];
const elementInput1 = document.querySelector(".input-p1");
const array2 = [];
let todoHtml = "";

function addElement1() {
  array1.push(elementInput1.value);
  elementInput1.value = "";
  console.log(array1);
}

function addElement2() {
  const elementInput2 = document.querySelector(".input-p2");
  array2.push(elementInput2.value);

  todoHtml += `<p>${elementInput2.value}</p>`;
  document.querySelector(".list-p2").innerHTML = todoHtml;
  elementInput2.value = "";
}
