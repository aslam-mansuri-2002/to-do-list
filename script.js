// to do list
let my_input = document.querySelector(".my-input");
let my_btn = document.querySelector(".my-btn");
let abc = document.querySelector(".abc");

// 1. LocalStorage se tasks load karein ya khali array lein
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

// Page load hone par purane tasks dikhayein
renderTasks();

function renderTasks() {
    // Pehle se maujood task-items ko remove karein (input field wale div ko chod kar)
    let existingTasks = document.querySelectorAll(".task-item");
    existingTasks.forEach(item => item.remove());

    tasks.forEach((task, index) => {
        let div2 = document.createElement("div");
        div2.classList.add("task-item"); // Class for identification
        
        let h4 = document.createElement("h4");
        let del_btn = document.createElement("button");
        
        h4.innerText = task;
        del_btn.innerText = "delete";

        // basic styles
        h4.style.display = "inline-block";
        h4.style.margin = "0px";
        div2.style.display = "flex";
        div2.style.justifyContent = "space-between";
        div2.style.margin = "10px 20px 10px 20px";

        // Delete function
        del_btn.addEventListener("click", function () {
            tasks.splice(index, 1); // Array se delete karein
            saveAndRender();        // Save aur refresh karein
        });

        div2.appendChild(h4);
        div2.appendChild(del_btn);
        abc.appendChild(div2);
    });
}

function saveAndRender() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    renderTasks();
}

function addTask() {
    if (my_input.value.trim() === "") {
        alert("Please Enter value");
        return;
    }
    tasks.push(my_input.value); // Array mein add karein
    my_input.value = "";
    saveAndRender();            // Save aur refresh karein
}

// Click par add
my_btn.addEventListener("click", addTask);

// Enter dabane par add
my_input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});