///Q1----------------------------------------------------

let emailinp = document.getElementById('emailinp')
let cardDisplay = document.getElementById('cardDisplay')
let sampleemail = document.getElementById('sampleemail')

showmail()
function showmail(){
    fetch('https://gorest.co.in/public/v2/users').then((data)=>{ 
        return data.json()
        
    }).then((RespObj)=>{

        let h=`<h5 style="text-decoration: underline;">Some Sample mails...Copy and Search</h5>`

        let m=``
        RespObj.forEach(element => {
            m=m+`<p>${element.email}</p>`
            
        });
        h=h+m

        sampleemail.innerHTML=h
  

})

}



function showcard(){
  fetch('https://gorest.co.in/public/v2/users').then((data)=>{ 
        return data.json()
        
    }).then((RespObj)=>{
  
  //console.log(RespObj)
  var ind = RespObj.findIndex(ele=>
     emailinp.value===ele.email)
//      console.log(ind) 
  console.log(RespObj[ind])
  if(ind==-1){
    cardDisplay.innerHTML=`<h5>Enter Valid Email ID</h5>`;

  }else{
    
  cardDisplay.style.display='block'
  cardDisplay.innerHTML=`<div><p><b>Name : </b>${RespObj[ind].name}</p><p><b>ID : </b>${RespObj[ind].id}</p><p><b>Email : </b>${RespObj[ind].email}</p><p><b>Gender : </b>${RespObj[ind].gender}</p><p><b>Status : </b>${RespObj[ind].status}</p></div>`;
  }

})

}


//Q2-----------------------------------------------------------------

let tempinp = document.getElementById('tempinp')
let tempresult = document.getElementById('tempresult')

function ConvertFtoC(){

    let res = (tempinp.value-32)*(5/9);
    tempresult.innerHTML=`<p>${tempinp.value}<b>°F</b> = ${res.toFixed(5)}<b>°C</b></p>`
    console.log(res)

}
function ConvertCtoF(){

    let res = (tempinp.value*(9/5))+32;
    tempresult.innerHTML=`<p>${tempinp.value}<b>°C</b> = ${res.toFixed(5)}<b>°F</b></p>`
    console.log(res)

}


//Q3----------------------------------------------------------

let todoinp = document.getElementById('todoinp')
let mylistdisplay = document.getElementById('mylistdisplay')

let todoarray=[]
function addtolist(){

    todoarray.push(todoinp.value)
    console.log(todoarray)
    todoinp.value=''
    showmylist()
 
    
}

function showmylist(){

    let tasks=``
    let taskhead=`<h3>ToDo List</h3>`
    let n=1
    todoarray.forEach(element => {
        tasks=tasks+`<div class="listandbtns" id="listbc${n}"><p>${element}</p><div><button onclick="deletefromlist('${element}')" class="delbtn">Delete</button>
        <button onclick="done(${n})" id="doneid${n}" class="done">Done</button>
        <button onclick="Inprogress(${n})" id="progressid${n}" class="inprog">In progress</button>
        </div></div>`
        n++
    });

    taskhead=taskhead+tasks
    mylistdisplay.innerHTML=taskhead
    
}

function deletefromlist(x){

    var idx = todoarray.findIndex(ele=> x===ele)
   
    todoarray.splice(idx,1)
    showmylist()
}
function done(n){
let listbc=document.getElementById('listbc'+n)
listbc.style.backgroundColor='green'
let idbtn = document.getElementById('doneid'+n)
idbtn.innerHTML=`<span>✓</span>`
idbtn.style.color='green'
idbtn.style.backgroundColor='none'
idbtn.style.border='none'
}

function Inprogress(n){
let listbc=document.getElementById('listbc'+n)
listbc.style.backgroundColor='orange'
let progressid = document.getElementById('progressid'+n)
progressid.innerHTML=`<span>⟳</span>`
progressid.style.color='orange'
progressid.style.backgroundColor='none'
progressid.style.border='none'

    
}

//--------------------------------------------
