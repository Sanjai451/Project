// selecting popup ,ovelay,button
var addbutton =document.querySelector(".addnew") //button
var popupmunu=document.querySelector(".popup-menu") //pop up
var ovelaypage=document.querySelector(".popup-overlay") // black screen overlay

// now enabling  the display poperty of 
//overlay and popup menu when btn is clicked
 addbutton.addEventListener("click",function(){
    popupmunu.style.display="block"
    ovelaypage.style.display="block"
 })

 //now disabling the display property when clicking 
 //the cancel btn
 var cancelButton=document.getElementById("cancelbutton")
 cancelButton.addEventListener("click",function(event){
    event.preventDefault()
    popupmunu.style.display="none"
    ovelaypage.style.display="none"
 })

 
 //select contiainer and book container
var container=document.querySelector(".container")
var bookcontainer=document.querySelector(".book-container")
var inputtitle=document.getElementById("book-title-input")
var inputauthor=document.getElementById("book-author-input")
var inputtextarea=document.getElementById("book-description")

//selecting add button on pop up tab
var addbookButton=document.getElementById(("addbutton"))
addbookButton.addEventListener("click", function(event){
   event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","book-container")
   div.innerHTML=`
   <h2>${inputtitle.value}</h2>
   <h5>${inputauthor.value}</h5>
   <p>${inputtextarea.value}</p>
   <button id="deletebook" onclick="deletebtn(event)">Delete</button> `
   container.append(div)
   popupmunu.style.display="none"
    ovelaypage.style.display="none"
})
function deletebtn(event){
    event.target.parentElement.remove()
}


//deleting book
var deletebook=document.getElementById("deletebook")
deletebook.addEventListener("click",function(event){
    //event.setAttribute("id","deletebook")
    event.target.parentElement.remove()
    
})


//page loader animation
const pre=document.getElementById("preloader")
window.addEventListener('load',function(){
    pre.style.display="none";
})