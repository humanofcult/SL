let taskNum = 0;

function adder()
{
  if(document.getElementById("tt").value.length != 0)
  {
    let reg = document.getElementById("taskContainer");
    let newTask = document.createElement("span");
    newTask.setAttribute("id", taskNum);
    newTask.setAttribute("class", "spanich");
    let newTaskNode = document.createTextNode(document.getElementById("tt").value);
    newTask.appendChild(newTaskNode);
    reg.appendChild(newTask);
    taskNum++;
    document.getElementById("tt").value = "";
  }
}

function delOne()
{
    let removable = document.getElementById(taskNum - 1);
    removable?.remove();
    taskNum--;
}

function delAll()
{
    document.getElementById("taskContainer").innerHTML = "";
}

const TaskManager = () => {
  return (
    <div id="manager">
        <h2>Task Manager</h2>
        <input type="text" id="tt" placeholder="NEW TASK"/>
        <button className="btn" onClick={adder}>ADD</button>
        <button className="btn" onClick={delOne}>REMOVE</button>
        <button className="btn" onClick={delAll}>REMOVE ALL</button>
        <hr />
        <div id="taskContainer">

        </div>
    </div>
  )
}

export default TaskManager