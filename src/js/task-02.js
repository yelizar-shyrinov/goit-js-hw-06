const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.querySelector("#ingredients");
const ingredientsNodeList = ingredients.map((ingredient) => {
  const listItemRef = document.createElement("li");
  listItemRef.setAttribute("class", "item");
  listItemRef.innerText = ingredient;
  return listItemRef;
});
ingredientsListRef.append(...ingredientsNodeList);