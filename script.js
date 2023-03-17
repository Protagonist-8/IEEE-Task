let addToDoButton = document.getElementById('addTodo');
let toDoContainer = document.getElementById('TODOC');
let inputField = document.getElementById('inputu');

addToDoButton.addEventListener('click', function(){
    const list = document.createElement('li');
    list.innerText = inputField.value;
    toDoContainer.appendChild(list);
    inputField.value = "";

})
