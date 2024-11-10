const card = document.querySelector(".card");
const heart = document.querySelector(".heart");
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

card.addEventListener("dblclick",()=>{
    console.log("clicked")
    heart.style.opacity= 1;
    heart.style.scale= 2;
    heart.style.color= "yellow";
    setTimeout(() => {
        heart.style.opacity= 0;
        heart.style.scale= 0;
        heart.style.color= "red";
    }, 400);
})

body.addEventListener("mousemove",(e)=>{
    
    cursor.style.left = e.x+10+'px';
    cursor.style.top = e.y+10+'px';
})

card.addEventListener('mousemove',()=>{
    cursor.style.scale=2;
})
card.addEventListener("mouseleave", (e) => {
    cursor.style.scale = 1;
});

