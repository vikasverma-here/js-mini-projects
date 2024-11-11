
const body = document.querySelector("body");
body.addEventListener("keydown", (e) => {
    const element = document.querySelector(`.${e.key}`);
    element.style.backgroundColor = "white";
    element.style.color = "black";
    element.childNodes[1].play();
});

body.addEventListener("keyup", (e) => {
    const element = document.querySelector(`.${e.key}`);
    element.style.backgroundColor = "black";
    element.style.color = "white";
    // element.childNodes[1].pause();
    // element.childNodes[1].load();
});
