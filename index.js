document.getElementById("add").addEventListener("click", function() {
    const taskInput = document.getElementById("newtask");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskValue;

        const statusLabelC = document.createElement("span");
        statusLabelC.textContent = "C";
        statusLabelC.style.marginRight = "10px";
        
        const statusLabelNC = document.createElement("span");
        statusLabelNC.textContent = "NC";
        statusLabelNC.style.marginRight = "10px";

        const statusGroup = document.createElement("div");
        statusGroup.classList.add("status-group");

        const completedRadio = document.createElement("input");
        completedRadio.type = "radio";
        completedRadio.name = `status-${taskValue}`; 
        completedRadio.value = "completed";
        completedRadio.addEventListener("change", function() {
            li.classList.add("completed");
        });

        const notCompletedRadio = document.createElement("input");
        notCompletedRadio.type = "radio";
        notCompletedRadio.name = `status-${taskValue}`;  
        notCompletedRadio.value = "not-completed";
        notCompletedRadio.checked = true; 
        notCompletedRadio.addEventListener("change", function() {
            li.classList.remove("completed");
        });

        statusGroup.appendChild(statusLabelNC);
        statusGroup.appendChild(notCompletedRadio);
        statusGroup.appendChild(statusLabelC);
        statusGroup.appendChild(completedRadio);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(statusGroup);
        li.appendChild(removeBtn);

        taskList.appendChild(li);

        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
});