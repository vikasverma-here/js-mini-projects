// const body = document.body;
// const divs = document.querySelectorAll(".box");

// // Log the NodeList
// console.log(divs);

// divs.forEach((div)=>{
//     div.addEventListener("click",()=>{
//         body.style.backgroundColor = div.id;
       
//     })
// })

const body = document.body;
const divs = document.getElementById("container")
console.log(divs)

divs.addEventListener("click",(e)=>{
    console.log(e.target.id)
    body.style.backgroundColor = e.target.id;
})