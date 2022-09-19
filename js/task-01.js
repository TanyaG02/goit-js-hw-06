const item = document.querySelectorAll(".item");
console.log("Number of categories:", item.length);
item.forEach(function (listElement) {
  console.log("Category:", listElement.firstElementChild.textContent);
  console.log("Elements:", listElement.querySelectorAll("li").length);
});
