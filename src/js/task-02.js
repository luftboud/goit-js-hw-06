let ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.querySelector("#ingredients");
ingredients.forEach(renderElementList);

function renderElementList(element) {
  let li = document.createElement("li");
  li.classList.add("item");
  list.append(li);
  li.innerHTML = li.innerHTML + element;
  console.log(li);
}