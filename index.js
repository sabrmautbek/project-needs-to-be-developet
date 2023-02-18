
showtasks();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let tasks = localStorage.getItem("tasks");
    if (tasks == null) tasksObj = [];
    else tasksObj = JSON.parse(tasks);
    tasksObj.push(addTxt.value);
    localStorage.setItem("tasks", JSON.stringify(tasksObj));
    addTxt.value = "";
    showtasks();
});
  

function showtasks() {
    let tasks = localStorage.getItem("tasks");
    if (tasks == null) tasksObj = [];
    else tasksObj = JSON.parse(tasks);
    let html = "";
    let deadline = document.getElementById("date")
    tasksObj.forEach(function (element, index,) {
        let Date = deadline.value;
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                    <strong> task ${index + 1} </strong> / Deadline: ${Date}
                    </h5> 
                    <input type="checkbox" style="display: flex; justify-content: flex-end;"> 
                    <p class="card-text">${element}</p>   
                  <button id="${index}" onclick=
                    "deleteNote(this.id)"
                    class="btn btn-primary">Delete Task</button>
                </div>
        </div>`;
    });
  
    let tasksElm = document.getElementById("tasks");
  
    if (tasksObj.length != 0) tasksElm.innerHTML = html;
    else
        tasksElm.innerHTML = ``;
}
function deleteNote(index) {
    let tasks = localStorage.getItem("tasks");
  
    if (tasks == null) tasksObj = [];
    else tasksObj = JSON.parse(tasks);
  
    tasksObj.splice(index, 1);
    localStorage.setItem("tasks", 
        JSON.stringify(tasksObj));
  
    showtasks();
}


const notify = document.getElementById("btn")
notify.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const notification = new Notification("Do you want to be notified?")
        }
    })
})

let notification
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        setInterval(() => {
            notification = new Notification("Your tasks do not run by their own"), { body: "task are waiting you"}}, 100)    
    } else {
        if(notification) notification.close()
    }})


/*const button = document.getElementById("getTasks");
button.addEventListener("click", () => {
    axios.get("http://localhost:8080/tasks").then(function (responce) {
      response.data.forEach((task) => {
        const div = document.createElement("div");
        div.className = "task";
        const id = document.createElement("h3");
        id.innerText = "id: " + task.id;
  
        const usernames = document.createElement("h3");
        usernames.innerText = "usernames: " + task.usernames;
  
        const tags = document.createElement("h3");
        tags.innerText = "tags: " + task.tags;
  
        const done = document.createElement("h3");
        done.innerText = "done: " + task.done;
  
        const deadline = document.createElement("h3");
        deadline.innerText = "deadline: " + task.deadline;
  
        const author = document.createElement("h3");
        author.innerText = "author: " + task.author;
  
        div.appendChild(id);
        div.appendChild(usernames);
        div.appendChild(done);
        div.appendChild(tags);
        div.appendChild(deadline);
        div.appendChild(author);
        document.body.appendChild(div);
      });
    });
  });
  
  const form = document.getElementById("create-task");
  
  const form2 = document.getElementById("delete-task");
  
  const createTask = document.getElementById("createTask");
  createTask.addEventListener("click", () => {
    if (form.style.display == "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  });
  
  const deleteTask = document.getElementById("deleteTask");
  deleteTask.addEventListener("click", () => {
    if (form2.style.display == "block") {
      form2.style.display = "none";
    } else {
      form2.style.display = "block";
    }
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let usernames = form.elements["usernames"].value;
    let tags = form.elements["tags"].value;
    let done =
      form.elements["done"].value === "true" ||
      form.elements["done"].value === "True";
    let deadline = form.elements["deadline"].value;
    let author = form.elements["author"].value;
    axios
      .post("http://localhost:8080/create", {
        usernames,
        tags,
        done,
        deadline,
        author,
      })
      .then(function (response) {
        console.log(response);
      });
  });
  form2.addEventListener("submit", (event) => {
    event.preventDefault();
    let id = form2.elements["id"].value;
    axios.post("http://localhost:8080/delete", {
      id,
    });
  });*/
  
