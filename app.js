//     var t= document.querySelector('#task-list')
//     // add todo
//     list.addEventListener('click', function(e)){
//         if(e.target.className == 'add'){
//             const li = e.target.parentElement;
//             list.addChild
//         }
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector(".form");
    const todoInput = document.querySelector("#new-task");
    //  const addButton = document.querySelector('#submit-task')
    // const taskList = document.querySelector(".tasks");
    const list = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = todoInput.value;

        if (!task) {
            alert("Please add a task");
            return;
        }
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const contentElement = document.createElement("div");
        contentElement.classList.add("content");
        contentElement.innerText = task;

        taskElement.appendChild(contentElement);

        // const taskInputElement = document.createElement("input");
        // taskInputElement.classList.add("text");
        // taskInputElement.type = "text";
        // taskInputElement.value = task;
        // taskInputElement.setAttribute = ("readonly")

        // contentElement.appendChild(taskInputElement);

        const actionButtons = document.createElement("div");
        actionButtons.classList.add("action");

        // const editButton = document.createElement("button");
        // editButton.classList.add("edit");
        // editButton.innerHTML = "Edit";

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = "Delete";

        // actionButtons.appendChild(editButton);
        actionButtons.appendChild(deleteButton);


        taskElement.appendChild(actionButtons);

        list.appendChild(taskElement);
        todoInput.value = "";
        deleteButton.addEventListener('click', () => {
            list.removeChild(taskElement)
        });
        //     editButton.addEventListener('click', () => {
        //         if (editButton.innerText === "edit");
        //         taskElement.removeAttribute("readonly");
        //     taskInputElement.focus();
        //     editButton.innerText = "Save";
        //     else {console.log("Save")
        // }
        //  });
        const showTasks = document.querySelector("#alltask");

        alltask.addEventListener('change', function () {
            if (!showTasks.checked) {
                list.style.display = "none"
            }
            else { list.style.display = "initial" };
        });
    }



    )
})


//   console.log("Submit form")
//   document.addEventListener("DOMContentLoaded", getLocalTodo)
//   document.addEventListener("click", addButton)
//   function addButton(e){
//     e.preventDefault();
//     newTask.classList.add("addTodo");
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todoInput.value;
//     newTodo.classList.add("todo-item")
//     newTask.appendChild(newTodo)
//   }
//   const editButton = document.querySelector(".edit")
//   const deleteButton = document.querySelector(".delete")
//   document.addEventListener("click", deleteButton)
// function deleteTask(e){
//      const item = e.target;
//      if (item.classList[0] === "deleteButton")
// }