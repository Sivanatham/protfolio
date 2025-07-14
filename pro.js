var p1 = document.querySelector("#p1")
var p2 = document.querySelector("#p2")


var b1 =document.querySelector(".b1")
b1.addEventListener("click",()=>{
    p1.classList.toggle("hide")
    p2.classList.toggle("hide")// if class have it remove the class and it no class add class 

    
    b1.textContent = btn.textContent==="show more"?"show less":"show more"

    })