
const body = document.querySelector("body");


body.addEventListener("keydown",(e)=>{
    console.log(e)
    const element = document.querySelector(`.${e.key}`)
    console.log(element)

    let node =element.childNodes[1].play()
    console.log(node)
    element.style.backgroundColor='white'
    element.style.color='black'
    

})

body.addEventListener('keyup',(e)=>{
let element = document.querySelector(`.${e.key}`)
element.style.backgroundColor="black"
element.style.color="white"
    element.childNodes[1].pause();
    // element.childNodes[1].load();

})