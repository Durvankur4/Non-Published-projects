let inputField = document.getElementById('inputField')
let addToDoButton = document.getElementById('addToDo')
let toDoContainer = document.getElementById('toDoContainer')

addToDoButton.addEventListener('click', function () {
    let paragraph = document.createElement('p')
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputField.value;
    inputField.value = "";

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph)
    })
})