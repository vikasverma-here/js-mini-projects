const elements = document.querySelectorAll(".element");

elements.forEach((element)=>{
    console.log(element)
    
    element.addEventListener("mousemove",()=>{
 let check =  element.childNodes[3].style.opacity = 1;
 console.log(check)
    })
    element.addEventListener("mousemove",(e)=>{
        element.childNodes[3].style.left = `${e.x}px`
    })
element.addEventListener("mouseleave",()=>{
    element.childNodes[3].style.opacity=0;
})
})