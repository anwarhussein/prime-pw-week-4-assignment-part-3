console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Create a global variable named `basket` and set it to an empty array.
let basket = [];

//Create a function called `addItem`. It should:
//take an input parameter for a string `item`
//add the new item to the global array `basket`.
//return `true` indicating the item was added
function addItem(item){
  basket.push(item);
  return basket.includes(item);
}

console.log(addItem('mango'));
console.log(`Basket has:  ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

//Create a function called `listItems`. It should:
//loop over the items in the `basket` array
//console.log each individual item on a new line
function listItems(basket){
  for (let item of basket)
    console.log(item);
}
listItems(basket);

//Create a function called `empty`. It should:
//reset the `basket` to an empty array
function empty(basket){
  while (basket.length) {
    basket.pop();
}
  return basket;
}
console.log(empty(basket));

// ### Stretch Goals
// 1. Add a global `const` named `maxItems` and set it to 5.
// 2. Create a function called isFull(). It should:
// return `false` if the basket contains *less* than max number of items
// return `true` otherwise (equal or more than maxItems)
const maxItems = 5;

function isFull(){
  if(basket.length >= maxItems){
    return true;
  }
  return false;
}
console.log(isFull());
//Update the required `addItem` function to:
//Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//If an item was added to the array, return `true`
//If there was no room and the item could not be added return `false`
addItem('banana');
addItem('pears');
addItem('pinneapple');
addItem('papaya');
function updatedAddItem(){
    if (isFull()) {
      console.log('There is no more room to add an item');
      return true;
    }
    console.log('There is plenty of room to add an item');
    return false;
}
console.log(updatedAddItem());

//Create a function called `removeItem`. It should:
//Take an input parameter for a string `item`
//Use [Array.indexOf] to find the index of the first matching item in the basket.
//Use [Array.splice] to remove the first matching item from the basket.
//Return the item removed or `null` if the item was not found
console.log(basket);
function removeItem(item){
  basket.splice(basket.indexOf(item), 2);
  return basket;
}

console.log(removeItem('banana'));
