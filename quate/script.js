const codingQuotes = [
    "Talk is cheap. Show me the code.",
    "Programs must be written for people to read, and only incidentally for machines to execute.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Fix the cause, not the symptom.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
    "Java is to JavaScript what car is to carpet.",
    "Knowledge is power.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    "Ruby is rubbish! PHP is phpantastic!",
    "Code never lies, comments sometimes do.",
    "The best error message is the one that never shows up.",
    "The best way to predict the future is to invent it.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "Testing leads to failure, and failure leads to understanding.",
    "The only way to go fast is to go well.",
    "The most disastrous thing that you can ever learn is your first programming language.",
    "Computers are fast; programmers keep it slow.",
    "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    "JavaScript is the duct tape of the Internet.",
    "If you think it's simple, then you have misunderstood the problem.",
    "Before software can be reusable it first has to be usable.",
    "It’s not a bug – it’s an undocumented feature.",
    "Walking on water and developing software from a specification are easy if both are frozen."
];

const imageUrls = [
    "https://unsplash.com/photos/5fNmWej4tAA/download?force=true", // Code on a laptop screen
    "https://unsplash.com/photos/IgUR1iX0mqM/download?force=true", // Developer working on code
    "https://unsplash.com/photos/9lTUAlNB87M/download?force=true", // Code displayed on a monitor
    "https://unsplash.com/photos/2EJCSULRwC8/download?force=true", // Person typing code on a laptop
    "https://unsplash.com/photos/8IKf54pc3qk/download?force=true", // Close-up of code editor
    "https://unsplash.com/photos/1K6IQsQbizI/download?force=true", // Code on multiple screens
    "https://unsplash.com/photos/3Mhgvrk4tjM/download?force=true", // Developer's workspace with code
    "https://unsplash.com/photos/1K6IQsQbizI/download?force=true", // Code on a dark-themed editor
    "https://unsplash.com/photos/5fNmWej4tAA/download?force=true", // Hands typing code on a keyboard
    "https://unsplash.com/photos/IgUR1iX0mqM/download?force=true", // Code displayed on a laptop
    "https://unsplash.com/photos/9lTUAlNB87M/download?force=true", // Developer writing code
    "https://unsplash.com/photos/2EJCSULRwC8/download?force=true", // Code editor with syntax highlighting
    "https://unsplash.com/photos/8IKf54pc3qk/download?force=true", // Person coding on a computer
    "https://unsplash.com/photos/1K6IQsQbizI/download?force=true", // Multiple monitors with code
    "https://unsplash.com/photos/3Mhgvrk4tjM/download?force=true", // Developer's desk with coding setup
    "https://unsplash.com/photos/1K6IQsQbizI/download?force=true", // Code on a laptop screen
    "https://unsplash.com/photos/5fNmWej4tAA/download?force=true", // Developer working on code
    "https://unsplash.com/photos/IgUR1iX0mqM/download?force=true", // Code displayed on a monitor
    "https://unsplash.com/photos/9lTUAlNB87M/download?force=true", // Person typing code on a laptop
    "https://unsplash.com/photos/2EJCSULRwC8/download?force=true", // Close-up of code editor
    "https://unsplash.com/photos/8IKf54pc3qk/download?force=true", // Code on multiple screens
    "https://unsplash.com/photos/1K6IQsQbizI/download?force=true", // Developer's workspace with code
    "https://unsplash.com/photos/3Mhgvrk4tjM/download?force=true", // Code on a dark-themed editor
    "https://unsplash.com/photos/1K6IQsQbizI/download?force=true", // Hands typing code on a keyboard
    "https://unsplash.com/photos/5fNmWej4tAA/download?force=true", // Code displayed on a laptop
    "https://unsplash.com/photos/IgUR1iX0mqM/download?force=true", // Developer writing code
    "https://unsplash.com/photos/9lTUAlNB87M/download?force=true", // Code editor with syntax highlighting
    "https://unsplash.com/photos/2EJCSULRwC8/download?force=true", // Person coding on a computer
    "https://unsplash.com/photos/8IKf54pc3qk/download?force=true", // Multiple monitors with code
    "https://unsplash.com/photos/1K6IQsQbizI/download?force=true"  // Developer's desk with coding setup
];
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#A633FF", 
    "#33FFF5", "#FFC733", "#FF5733", "#33FF8A", "#5733FF", 
    "#C70039", "#900C3F", "#581845", "#DAF7A6", "#FFC300", 
    "#FF5733", "#FF33A6", "#33FF57", "#FF33F5", "#800080", 
    "#FF6347", "#FF1493", "#FF8C00", "#32CD32", "#FFD700", 
    "#4682B4", "#D2691E", "#ADFF2F", "#8A2BE2", "#D3D3D3"
];


function changingQuate() {
    const quaate = document.getElementById('quaate');
    const body = document.querySelector("body")
    const imgElement = document.querySelector("img");
    const urlIndex = Math.floor(Math.random() * imageUrls.length);
    const index = Math.floor(Math.random() * codingQuotes.length);
    const colorIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor=colors[colorIndex]
    // Update the image source
    imgElement.src = imageUrls[urlIndex];

    // Update the quote text
    quaate.textContent = codingQuotes[index];
    console.log(index, urlIndex); // Log for debugging
}
setInterval(changingQuate, 5000);
