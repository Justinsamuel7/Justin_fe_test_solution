let emailinp = document.getElementById('emailinp')
let cardDisplay = document.getElementById('cardDisplay')

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
    cardDisplay.innerHTML=`<h5>Enter Valid EmailID</h5>`;

  }else{
  cardDisplay.innerHTML=`<div><p>${RespObj[ind].name}</p><p>${RespObj[ind].id}</p><p>${RespObj[ind].email}</p><p>${RespObj[ind].gender}</p><p>${RespObj[ind].status}</p></div>`;
  }

})

}