const specificDate = new Date(2028, 6, 21);
console.log(specificDate)
const originalDate = document.getElementById("originalDate")
originalDate.textContent=specificDate

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#33FFF5', '#FFC300', '#DAF7A6'];
let colorIndex = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 3000);

const countDown =()=>{
    const olympocDay = new Date("2028-07-21T00:00:00").getTime()
   
    
    const now = new Date().getTime()

    const diffrence = olympocDay - now
    

    if(diffrence<=0){
        heading.innerHTML="olympic 2028 has be allready started "
    }

    const days = Math.floor(diffrence/(1000*60*60*24))
   
    const hours = Math.floor(diffrence%(1000*60*60*24)/(1000*60*60))
    
    const minutes = Math.floor(diffrence%(1000*60*60)/(1000*60))
    
    const second = Math.floor(diffrence%(1000*60)/1000)
   

   document.getElementById("days").textContent=days
 document.getElementById("houres").textContent=hours
document.getElementById("minutes").textContent=minutes
 document.getElementById("seconds").textContent=second
}
countDown()

setInterval(countDown, 1000);
