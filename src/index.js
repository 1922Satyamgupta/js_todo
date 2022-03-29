var taskAssign = document.getElementById("input_task");
var remaining_task = document.getElementById("remaining_task");
var addTaskbtn = document.getElementById("Add");
var pid = document.getElementById("p");
var h3 = document.getElementById("add-item");
var completed = document.getElementById("completed_Task");
addTaskbtn.addEventListener("click", function add_function() {
  if (taskAssign.value != "") {
    const listing = document.createElement("li");
    const updateBox = document.createElement("input");
    updateBox.type = "checkbox";
    updateBox.addEventListener("change", function () {
      if (this.checked) {
        remaining_task.removeChild(listing);
        completed.appendChild(listing);
      } else {
        completed.removeChild(listing);
        remaining_task.appendChild(listing);
      }
    });
    const labeling = document.createElement("label");
    labeling.innerHTML = taskAssign.value;
    const completedText = document.createElement("input");
    completedText.type = "text";
    completedText.value = taskAssign.value;
    const btn_edit = document.createElement("button");
    btn_edit.innerHTML = "Edit";

    btn_edit.addEventListener("click", function () {
      taskAssign.value = labeling.innerHTML;
      const btn_update = document.createElement("button");
      h3.innerHTML = labeling.innerHTML;
      btn_update.innerHTML = "UPDATE";

      pid.removeChild(addTaskbtn);
      pid.appendChild(btn_update);

      btn_update.addEventListener("click", function afterupdatefunc() {
        if (taskAssign.value != "") {
          labeling.innerHTML = taskAssign.value;
          h3.innerHTML = "ADD ITEM";
          pid.removeChild(btn_update);
          pid.appendChild(addTaskbtn);
          taskAssign.value = "";
        } else {
        }
      });
    });

    const btn_delete = document.createElement("button");
    btn_delete.innerHTML = "delete";

    btn_delete.addEventListener("click", function removelist() {
      listing.remove();
    });

    listing.appendChild(updateBox);
    listing.appendChild(labeling);
    listing.appendChild(completedText);
    listing.appendChild(btn_edit);
    listing.appendChild(btn_delete);
    remaining_task.appendChild(listing);
  } 
  else {
    
  }
});
