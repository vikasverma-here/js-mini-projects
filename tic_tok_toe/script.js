const boxes = document.getElementById("container")
const divs = document.querySelectorAll('.box')
let turn = "O"


let winner = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

const baord_array = new Array(9).fill("E")
console.log(baord_array)
boxes.addEventListener("click",(e)=>{
      let element = e.target
        if(turn ==="O"){
            element.innerHTML = "O";
             baord_array[element.id] ="O"  
             console.log(baord_array)
            turn = "X"
        }
        else{
            element.innerHTML="X"
             baord_array[element.id] ="X"
             console.log(baord_array)
            turn="O"
        }
 
})
