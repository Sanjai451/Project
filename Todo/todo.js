var ul=document.getElementById("list-container") 
        var inputv=document.getElementById("inputag")

        function add(){
            var listitem=document.createElement("li")
            //var deleteitem=document.createElement("Button")
            console.log(inputv.value)
            listitem.textContent=inputv.value
            //step 2 jus alter the line
            listitem.innerHTML=inputv.value+ "<Button onclick=del(event)> Delete</Button>"
            //deleteitem.textContent="Delete"
           // deleteitem.onclick="del(event)"   ----------------doubt in this area to add onclick --------so following step2
            console.log(listitem)
            ul.append(listitem)
            ul.append(deleteitem)

        }
        function del(event){
            alert("Do you want to delete this")
            event.target.parentElement.remove()
        }