let ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.querySelector("#ingredients");
let preList = "";
ingredients.forEach(renderElementList);

function renderElementList(element) {
  let li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;
  preList += li.outerHTML;
  console.log(li);
  console.log(li.innerHTML);
  console.log(preList);
}
list.insertAdjacentHTML("afterbegin", preList);