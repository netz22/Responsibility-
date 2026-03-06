
let transactions = JSON.parse(localStorage.getItem("transactions") || "[]")

function save(){
localStorage.setItem("transactions",JSON.stringify(transactions))
}

function add(){
let amount=parseFloat(document.getElementById("amount").value)
let type=document.getElementById("type").value
let category=document.getElementById("category").value

transactions.push({
amount,type,category,date:new Date()
})

save()
render()
}

function render(){

let income=0
let expenses=0

transactions.forEach(t=>{
if(t.type==="income") income+=t.amount
else expenses+=t.amount
})

document.getElementById("income").innerText=income
document.getElementById("expenses").innerText=expenses
document.getElementById("balance").innerText=income-expenses

let list=document.getElementById("list")
list.innerHTML=""

transactions.slice().reverse().forEach(t=>{
let li=document.createElement("li")
li.innerText=`${t.type} - ${t.amount}€ (${t.category})`
list.appendChild(li)
})

}

render()
