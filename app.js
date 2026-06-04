const Input = document.getElementById('Input');
const Btn = document.getElementById('Btn');
const Ul = document.getElementById('UI');
Btn.addEventListener('click',clickToDo)

function clickToDo(){
    const text = Input.value.trim();

    if(text === ""){
        alert("Vazifa kiriting")
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    const deletBtn = document.createElement("button")
    deletBtn.textContent = "o'chirish"
    li.append(span)
    li.append(deletBtn)
    Ul.append(li)
    Input.value = ""
    span.addEventListener("click", () => {
    span.classList.toggle("completed");
    });
    deletBtn.addEventListener('click',()=>{
        li.remove()
    })
}