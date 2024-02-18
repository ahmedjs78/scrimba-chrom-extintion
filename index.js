let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");



function saveLead( ){
    myLeads.push(inputEl.value)
    let skrt = []
    skrt += inputEl.value
    localStorage.setItem("myLeads", skrt)
    inputEl.value = ""
    console.log(myLeads)
    renderLeads()
    console.log(localStorage.getItem("myLeads"));
}

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
    console.log(listItem)
    ulEl.innerHTML = listItem
}