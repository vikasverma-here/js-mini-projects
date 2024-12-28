
const boxes = document.getElementById("boared");
const result = document.getElementById("winner-massage");
const button = document.querySelector("button")
const imgOne= document.getElementById("img-one")
const imgTwo= document.getElementById("img-two")

button.addEventListener("click",()=>{
    console.log("cliick")
    window.location.reload()
})
let turn = "O"; 


const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

let arr = new Array(9).fill("e"); 



const checkWinner = () => {
    for (let [index0, index1, index2] of winner) {
    
        if (arr[index0] !== 'e' && arr[index0] === arr[index1] && arr[index1] === arr[index2]) {
            return true; 
        }
    }
    return false; 
};
const checkDraw = () => {
    return arr.every(cell =>  cell !== 'e');
};

const printer =(e) => {
    let element = e.target;

    if (arr[element.id] !== 'e') {
        return;
    }

 
    if (turn === "O") {
        
        element.innerHTML = "O";
        arr[element.id] = "O";
        if (checkWinner()) {
            result.innerHTML = "O or Player One is the winner!";
            boxes.removeEventListener("click",printer)
            
            return; 
        }
             imgOne.style.transform = "scale(1)";    // Reset Player 1's image to normal size
        imgTwo.style.transform = "scale(1.5)"
      
        turn = "X"; 
    } else {
        element.innerHTML = "X";
        arr[element.id] = "X";
        if (checkWinner()) {
            result.innerHTML = "X or Player Two is the winner!";
            boxes.removeEventListener("click",printer)
            return; 
        }
        imgOne.style.transform = "scale(1.5)";  // Scale Player 1's image
        imgTwo.style.transform = "scale(1)";
        turn = "O"; 
    }


    if (checkDraw()) {
        result.innerHTML = "It's a draw!";
        boxes.removeEventListener("click", printer);
    }

    console.log(arr); 
    console.log(element); 
}




boxes.addEventListener("click",printer );

const updateImageScaling = () => {
    if (turn === "O") {
           // Reset Player 2's image to normal size
    } else if (turn === "X") {
       ;  // Scale Player 2's image
    }
}

// Initial scaling based on the first turn

