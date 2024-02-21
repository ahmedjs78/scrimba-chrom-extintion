let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("tab-btn")


saveTabBtn.addEventListener('click',saveTab)
deleteBtn.addEventListener("dblclick",deleteAll)
inputEl.addEventListener("keydown",saveLead)
inputBtn.addEventListener("click",saveLead)


let leadsfromLocalstorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsfromLocalstorage){
    myLeads = leadsfromLocalstorage
    render(myLeads)
}




function saveTab(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
       })
    }



    function render(leads){

    let listItem = ""
    for(let i = 0; i < leads.length; i++){
        listItem +=  `
                      <li>
                        <a href='${leads[i]}' target='_blank' >
                        ${leads[i]}
                        </a>
                      </li>
                      `
    }
    
    ulEl.innerHTML = listItem
}

function deleteAll(){
    console.log("deleted")
    localStorage.clear()
    myLeads = []
    render(myLeads)
}

//save Leads function
function saveLead(event){
    if (event.key === 'Enter' || event.type === "click" ){
        
        myLeads.push(inputEl.value)
        
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
        inputEl.value = ""
        
        render(myLeads)
    }
}