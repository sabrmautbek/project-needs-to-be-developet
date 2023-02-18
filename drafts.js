showdrafts();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let drafts = localStorage.getItem("drafts");
  
    if (drafts == null) draftsObj = [];
    else draftsObj = JSON.parse(drafts);
  
    draftsObj.push(addTxt.value);
    localStorage.setItem("drafts", JSON.stringify(draftsObj));
    addTxt.value = "";
  
    showdrafts();
});
  
function showdrafts() {
    let drafts = localStorage.getItem("drafts");
  
    if (drafts == null) draftsObj = [];
    else draftsObj = JSON.parse(drafts);
  
    let html = "";
  
    draftsObj.forEach(function(element, index) {
        html += `<div class="DraftCard my-2 mx-2 card" 
            style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        draft ${index + 1}
                    </h5>
                    <p class="card-text"> 
                        ${element}
                    </p>
   
                  <button id="${index}" onclick=
                    "deleteDraft(this.id)"
                    class="btn btn-primary">
                    Delete draft
                </button>
            </div>
        </div>`;
    });
  
    let draftsElm = document.getElementById("drafts");
  
    if (draftsObj.length != 0) draftsElm.innerHTML = html;
    else
        draftsElm.innerHTML = ``;
}
function deleteDraft(index) {
    let drafts = localStorage.getItem("drafts");
  
    if (drafts == null) draftsObj = [];
    else draftsObj = JSON.parse(drafts);
  
    draftsObj.splice(index, 1);
  
    localStorage.setItem("drafts", 
        JSON.stringify(draftsObj));
  
    showdrafts();
}


let interval
let notification
document.addEventListener("visibilitychange", ()=> {
    if (document.visibilityState === "hidden"){
        setInterval(()=> {let notification = new Notification("Your drafts don't run by their own!")}, 100)
    }
    else{
        notification.close()
    }});
