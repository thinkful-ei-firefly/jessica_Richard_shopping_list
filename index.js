'use strict';

const store = [
  {name: 'apples', completed: false}, 
  {name: 'oranges', completed: true}, 
  {name: 'bananas', completed: false}
];

function handleAddItem(){
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
    let input = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    //update the store
    console.log(input);
    store.push( {name: input, completed: false} );
    //call render
    renderShoppingList();
  });
}

function handleDeleteItem(){
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    event.preventDefault();
    //delete targeted li
    $(event.target).closest($('li')).remove();
  //update the store
  //render
  });
}

function handleToggleItem(){
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
    let input = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
  //update the store
  //render
  });
}

function renderShoppingList() {
  const html = generateShoppingListElements(store);
  $('.shopping-list').html(html);  
}

function generateShoppingItemHtml(item, itemIndex){
  const checkedClass = item.checked ? 'shopping-item__checked' : '';

  return `
    <li class="js-item-index-element" data-item-index="${itemIndex}">
      <span class="shopping-item js-shopping-item ${checkedClass}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
   </li>
  `;
}

function generateShoppingListElements(items){
  // Create new array of HTML strings
  const elements = items.map((item, index) => {
    return generateShoppingItemHtml(item, index);
  });

  // Join the array into a single string and return it
  return elements.join();
}

function main(){
  renderShoppingList();
  handleAddItem();
  handleDeleteItem();
  handleToggleItem();
}

// Run the `main` function when DOM loads:
main();