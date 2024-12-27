const arr = ["Rock","Paper","Scissor"]
const btn = document.getElementById("btn")
const playerOne = document.getElementById("player-one")
const playerTwo = document.getElementById("player-two")
const result = document.getElementById("result")
const playbtn = ()=>{
    const random = Math.floor(Math.random()*arr.length)
    const random2 = Math.floor(Math.random()*arr.length)
    console.log(random)
    playerOne.innerHTML = arr[random]
    playerTwo.innerHTML = arr[random2]

    if(playerOne.innerHTML == playerTwo.innerHTML){
        result.innerHTML=" Result :match draw boss"
       }else{
        result.innerHTML="Result : "
       }
    if(playerOne.innerHTML=="Rock"&& playerTwo.innerHTML=="Paper"){
        result.innerHTML="Result:Player two is winner"
    }
    if(playerOne.innerHTML=="Rock"&& playerTwo.innerHTML=="Scissor"){
         result.innerHTML="Result:Player one is winner"
    }
    if(playerTwo.innerHTML=="Rock" && playerOne.innerHTML=="Paper"){
result.innerHTML="Result : Player one is winner"

    }
    if(playerTwo.innerHTML=="Rock" && playerOne.innerHTML=="Scissor"){
result.innerHTML="Result : Player two is winner"

    }
    if(playerOne.innerHTML=="Paper" && playerTwo.innerHTML=="Scissor"){
        result.innerHTML="Result : Player two is winner"
    }
    if(playerOne.innerHTML=="Scissor" && playerTwo.innerHTML=="Paper"){
        result.innerHTML="Result : Player one is winner"
    }
}
btn.addEventListener("click",()=>{
    playbtn()
})
