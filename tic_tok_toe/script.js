
const boxes = document.getElementById("boared");
const result = document.getElementById("winner-massage");

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


boxes.addEventListener("click", (e) => {
    let element = e.target;

    if (arr[element.id] !== 'e') {
        return;
    }

 
    if (turn === "O") {
        element.innerHTML = "O";
        arr[element.id] = "O";
        if (checkWinner()) {
            result.innerHTML = "O or Player One is the winner!";
            return; 
        }
        turn = "X"; 
    } else {
        element.innerHTML = "X";
        arr[element.id] = "X";
        if (checkWinner()) {
            result.innerHTML = "X or Player Two is the winner!";
            return; 
        }
        turn = "O"; 
    }

    console.log(arr); 
    console.log(element); 
});
