const listOfItems = document.querySelectorAll("#categories li.item");
const amount = listOfItems.length;
console.log("Number of categories:", amount);

listOfItems.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const number = item.querySelectorAll("li").length;
  console.log("Category:", category);
  console.log("Elements:", number);
});
