const input = document.querySelector('#in')
const addButton = document.querySelector('#btn')
const parentUllist = document.querySelector('.todoList')

addButton.addEventListener('click',function(e){
    const inputVal = input.value.trim()
    if(inputVal.length<=0){
        alert("You must write something")
    }else{
    const createListElement = document.createElement('li')
    if(addButton.innerHTML === "Edit"){
        editTodo.target.previousElementSibling.previousElementSibling.innerText = inputVal
       
        addButton.innerHTML = "ADD"
        input.value = ''
    }else{
    
    
    const p = document.createElement('p')
    p.innerHTML = inputVal
    input.value = ''
    
    const deletebtn = document.createElement('button')
    deletebtn.innerHTML = 'Remove'
    deletebtn.classList.add('dbtn','deleteBtn');
    const editBtn = document.createElement('button')
    editBtn.innerHTML = 'Edit'
    editBtn.classList.add('dbtn','editBtn');
    createListElement.appendChild(p)
    createListElement.appendChild(deletebtn)
    createListElement.appendChild(editBtn)
    parentUllist.appendChild(createListElement)
    }
}
})
let editTodo = null;
const deletetask = function(e){
    if(e.target.innerHTML === "Remove"){
        parentUllist.removeChild(e.target.parentElement)
    }
    
}
const updateTodo = function(e){
    if(e.target.innerHTML === 'Edit'){
        console.log(e.target.previousElementSibling)
        input.value = e.target.previousElementSibling.previousElementSibling.innerHTML;
        input.focus() //Brings the focus to the input field, allowing the user to start editing immediately.
        addButton.innerHTML = "Edit"
        editTodo = e;
    }

}

parentUllist.addEventListener('click',deletetask)
parentUllist.addEventListener('click',updateTodo)
