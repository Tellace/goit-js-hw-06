const allCategories = document.querySelectorAll(`ul#categories li.item`);
const numberOfCategories = allCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

for (let i = 0; i < numberOfCategories; i += 1) {
const headText = allCategories[i].firstElementChild.textContent; 
console.log(`Category: ${headText}`);

const elementsEl = allCategories[i].lastElementChild;
const numberOfElements = elementsEl.querySelectorAll(`li`);
console.log(`Elements: ${numberOfElements.length}`);
}