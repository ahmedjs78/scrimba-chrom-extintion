let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");

function saveLead( ){
    myLeads.push(inputEl.value)
    console.log(myLeads)
}

inputBtn.addEventListener("click",saveLead)