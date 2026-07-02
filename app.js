const Input = document.getElementById('Input');
const Btn = document.getElementById('Btn');
const Ul = document.getElementById('UI');
const darkBtn = document.getElementById("dark")
Btn.addEventListener('click', clickToDo)

const todos = JSON.parse(localStorage.getItem("todos")) || [];

function clickToDo() {
    const text = Input.value.trim()
    if (!text) {
        alert("Vazifa kiriting...")
        return;
    }
    todos.push(text)
    localStorage.setItem('todos', JSON.stringify(todos))
    renderToDo()
    Input.value = ""
    
}

function renderToDo() {
    Ul.innerHTML = ""
    todos.forEach((todo, index) => {
        const li = document.createElement("li")
        const span = document.createElement("span")
        const btn = document.createElement("button")
        btn.textContent = "Delete"
        span.innerText = todo;
        li.append(span)
        li.append(btn)
        Ul.append(li)
        btn.addEventListener("click",()=>{
           todos.splice(index,1)
           localStorage.setItem("todos",JSON.stringify(todos))
           renderToDo()
        })
    });
}
renderToDo()