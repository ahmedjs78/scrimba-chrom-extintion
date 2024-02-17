let myLeads = ["bruh",123,2,"qwe21"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
function saveLead( ){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    console.log(myLeads)
    renderLeads()
}

inputBtn.addEventListener("click",saveLead)

function renderLeads(){

    let listItem = ""
    for(let i = 0; i < myLeads.length; i++){
        
        listItem +=  `<li>
                        <a href='${myLeads[i]}' target='_blank' > ${myLeads[i]}
                        </a>  
                      </li>`
    }
    console.log(listItem)
    ulEl.innerHTML = listItem
}