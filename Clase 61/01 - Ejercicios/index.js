// Forma 1
const ul = document.querySelector("ul");
const lis = ul.children;

for(let li of lis) { //[1,2,3,4,5]
  console.log(li.innerText);
} 

/*
// Forma 2
const lis = document.querySelectorAll("li");
lis.forEach(li => console.log(li.innerText));
*/

// EJERCICIO 2

const spanId = document.querySelector("#spanId");
const parent = spanId.parentElement;
const ulContainer = parent.children[2];
const ulChildren = ulContainer.children;
for(let li of ulChildren){
  console.log(li.innerText);
}

// const arrayBasadoEnNodeList = [...document.querySelectorAll("li")];
