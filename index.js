let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")

let leadsfromLocalstorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsfromLocalstorage){
    myLeads = leadsfromLocalstorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick",deleteAll)
function deleteAll(){
    console.log("deleted")
    localStorage.clear()
    myLeads = []
    renderLeads()
}

//save Leads function
function saveLead(event){
    if (event.key === 'Enter' || event.type === "click" ){

        myLeads.push(inputEl.value)
        
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
        leadsfromLocalstorage = JSON.parse(localStorage.getItem("myLeads"))
        
        inputEl.value = ""
        
        console.log(myLeads)
        
        renderLeads()
    }
}
inputEl.addEventListener("keydown",saveLead)
inputBtn.addEventListener("click",saveLead)

function renderLeads(){
    
    let listItem = ""
    for(let i = 0; i < myLeads.length; i++){
        listItem +=  `
                      <li>
                        <a href='${myLeads[i]}' target='_blank' >
                        ${myLeads[i]}
                        </a>
                      </li>
                      `
    }
    
    ulEl.innerHTML = listItem
}