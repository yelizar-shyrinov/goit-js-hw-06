const categoriesListRef = document.querySelector("ul#categories");
const categoriesItemsRef = categoriesListRef.querySelectorAll("li.item");
const categoriesItemsAmount = categoriesItemsRef.length;
console.log(`Number of categories:`, categoriesItemsAmount);
categoriesItemsRef.forEach(function(itemRef) {
    const headerRef = itemRef.querySelector("h2");
    console.log(`Category:`,headerRef.innerText);
    const elementsAmount = itemRef.querySelectorAll(`li`).length;
    console.log(`Elements:`, elementsAmount);
})



