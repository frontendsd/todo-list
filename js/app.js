const formControl = document.querySelector('.form-control')
const inputText = document.querySelector('.input-text')
const todoList = document.querySelector('.todo-list')

formControl.addEventListener('submit', (e)=> {
    e.preventDefault()
    const inputValue = inputText.value.trim()
    if(inputValue) {
        makeTodo(inputValue)
         inputText.value = ""
    }else {
        alert('Iltimos nimadir kiriting')
    }
})

function makeTodo(textTodo) {
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo')

    const pText = document.createElement("p")
    pText.classList.add('todo-text')
    pText.textContent = textTodo

    const btnChecked = document.createElement('button')
    btnChecked.classList.add('check-btn')
    btnChecked.innerHTML = '<i class="btn fas fa-check"></i>'

    const btnTrash = document.createElement('button')
    btnTrash.classList.add('trash-btn')
    btnTrash.innerHTML = '<i class="btn fas fa-trash"></i>'

    newTodo.appendChild(pText)
    newTodo.appendChild(btnChecked)
    newTodo.appendChild(btnTrash)
    todoList.appendChild(newTodo)


    document.addEventListener('click', (e)=> {
        if(e.target.classList.value == "check-btn") {
            e.target.parentElement.classList.toggle('checked')
        }
        if(e.target.classList.value == "trash-btn") {
            e.target.parentElement.classList.add('done')
            e.target.parentElement.addEventListener("transitionend", ()=> {
                e.target.parentElement.remove('checked')
            })

        }
    })

}

