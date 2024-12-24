const body = document.querySelector("body");
const box = document.querySelector(".box");

const funnyQuestions = [
    "Banana phone?",
    "Chicken dance?",
    "Penguin yoga?",
    "Zombie chef?",
    "Unicorn pizza?",
    "Dinosaur tea?",
    "Robot hug?",
    "Alien selfie?",
    "Shark karaoke?",
    "Panda DJ?",
    "Bubble pants?",
    "Llama disco?",
    "Toast trampoline?",
    "Octopus guitar?",
    "Turtle rocket?",
    "Potato magician?",
    "Pizza unicorn?",
    "Cheese moon?",
    "Ghost karaoke?",
    "Donut spaceship?",
    "Camel yoga?",
    "Penguin party?",
    "Cow surfboard?",
    "Giraffe ballet?",
    "Snail taxi?",
    "Dragon coffee?",
    "Hippo chef?",
    "Lobster party?",
    "Frog astronaut?",
    "Cat saxophone?"
];


body.addEventListener("click", (e) => {
    box.style.left = e.clientX - 100 + "px";
    box.style.top = e.clientY - 100 + "px";
    box.style.backgroundColor = `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`;
    
    
    box.style.opacity = "1";
    box.style.transform = "scale(1)";
    box.style.borderRadius = "50%";
    box.textContent = funnyQuestions[Math.floor(Math.random() * funnyQuestions.length)];
   
    setTimeout(() => {
        box.style.opacity = "0";
        box.style.transform = "scale(0)";
    }, 500); 
});
