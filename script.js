var plusbutton=document.querySelector(".plusbutton")
var popupbg=document.querySelector(".popupbg")
var popuptable=document.querySelector(".popuptable")
var cancelmoviebutton=document.querySelector(".cancelmoviebutton")
var addmoviebutton=document.querySelector(".addmoviebutton")
var mname=document.getElementById("mname")
var mdirector=document.getElementById("mdirector")
var mdate=document.getElementById("mdate")
var mdescription=document.getElementById("mdescription")
var divide1=document.querySelector(".divide1")

plusbutton.addEventListener("click",function(){
    popupbg.style.display="block"
    popuptable.style.display="block"
})
cancelmoviebutton.addEventListener("click",function(event){
    popupbg.style.display="none"
    popuptable.style.display="none"
    event.preventDefault()

})
addmoviebutton.addEventListener("click",function(event){
    var div=document.createElement("div")
    div.setAttribute("class","divide2")
    div.innerHTML=`<h2>${mname.value}</h2>
            <h4>${mdirector.value}</h4>
            <p>Date : ${mdate.value}</p>
            <p>${mdescription.value}</p>
            <button onclick="deletetable(event)">Delete</button>`
    divide1.append(div)
    popupbg.style.display="none"
    popuptable.style.display="none"
    event.preventDefault()
})
function deletetable(event)
{
    event.preventDefault()
    event.target.parentElement.remove()
}

