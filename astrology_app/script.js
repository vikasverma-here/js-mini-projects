// Based on Date, size 31
const compliments = [
    "You have a great sense of humor.",
    "Your smile lights up the room.",
    "You bring out the best in people.",
    "You're an incredibly thoughtful person.",
    "You have a heart of gold.",
    "Your creativity is inspiring.",
    "You're a fantastic problem-solver.",
    "Your kindness is contagious.",
    "You have an amazing ability to connect with others.",
    "You're so knowledgeable about so many things.",
    "Your determination is admirable.",
    "You're a great listener.",
    "You make the world a better place.",
    "Your positivity is infectious.",
    "You have an eye for detail.",
    "You're always so helpful and considerate.",
    "You have a natural talent for leadership.",
    "Your courage is inspiring.",
    "You're an amazing friend.",
    "You have a unique perspective that is refreshing.",
    "Your energy brightens everyone’s day.",
    "You're incredibly resourceful.",
    "You have a wonderful way with words.",
    "You're a ray of sunshine on a cloudy day.",
    "Your hard work is paying off.",
    "You're so reliable and trustworthy.",
    "You have a fantastic sense of style.",
    "Your confidence is inspiring.",
    "You're a great mentor and teacher.",
    "Your dedication is remarkable.",
    "You make everyone feel valued and respected."
];


// size 20
const victimCardCompliments = [
    "You always do good for others, but they don't appreciate it.",
    "You give so much, but rarely get anything in return.",
    "Your kindness often goes unnoticed, but it’s truly remarkable.",
    "You always put others first, even when they don’t deserve it.",
    "You sacrifice so much, yet people rarely acknowledge it.",
    "You have a heart of gold, but others take it for granted.",
    "You’re always there for everyone, but they’re not always there for you.",
    "You work so hard, yet your efforts often go unrecognized.",
    "You care deeply, even when others don’t reciprocate.",
    "You forgive so easily, even when people don’t deserve it.",
    "You give people the benefit of the doubt, but they rarely do the same for you.",
    "You stand by people in their tough times, but they forget you in yours.",
    "You always try to make peace, even when others blame you.",
    "You handle so much pressure, yet no one sees your struggles.",
    "You give so much love, but people don’t value it enough.",
    "You’re always honest, yet people misunderstand your intentions.",
    "You go out of your way for others, but they don’t return the favor.",
    "You share everything you have, but people still ask for more.",
    "You’re a true friend, even when others don’t treat you the same.",
    "You keep helping others, even when they don’t say thank you."
];



// size is 30
const recommendations = [
    "Feed a street dog and spread kindness.",
    "Plant a tree and nurture it.",
    "Volunteer at a local shelter or community center.",
    "Start your day with meditation for a peaceful mind.",
    "Write down three things you’re grateful for daily.",
    "Spend time with your family and cherish those moments.",
    "Help someone in need, even in small ways.",
    "Read a book that inspires you to grow.",
    "Exercise regularly to keep your body healthy.",
    "Donate clothes you don’t wear to charity.",
    "Cook a meal for someone and share the joy of food.",
    "Smile at strangers and brighten their day.",
    "Learn a new skill or hobby that excites you.",
    "Reduce your plastic use to help the environment.",
    "Disconnect from social media for a day and enjoy the moment.",
    "Start a journal to document your thoughts and dreams.",
    "Spend time in nature and appreciate its beauty.",
    "Compliment someone genuinely and make their day.",
    "Clean your room or workspace to feel more organized.",
    "Drink more water and prioritize your health.",
    "Write a letter to your future self.",
    "Support a local business or artisan.",
    "Listen to someone without interrupting.",
    "Practice random acts of kindness every day.",
    "Save a small amount of money weekly for future goals.",
    "Make a vision board to stay motivated.",
    "Adopt an eco-friendly habit like cycling or walking more.",
    "Spend time with children and learn from their innocence.",
    "Call an old friend and reconnect.",
    "Learn to say no to things that don’t serve your happiness."
];

// size is 20
const predictions = [
    "You will become a crorepati!",
    "Success is just around the corner for you.",
    "Your dream job is closer than you think.",
    "Expect the unexpected—great things are coming.",
    "You will travel the world in the next few years.",
    "A big opportunity will knock on your door soon.",
    "Your hard work will pay off in ways you can't imagine.",
    "You will make a difference in someone's life.",
    "A surprising adventure is coming your way.",
    "Great things come to those who wait—your time is coming.",
    "Your creativity will lead to great success.",
    "A life-changing moment is just ahead.",
    "Get ready for some exciting news soon.",
    "A financial breakthrough is in your future.",
    "You will find happiness in the smallest things.",
    "Your patience will lead to big rewards.",
    "A new friendship will change your life.",
    "Prepare for a future full of opportunities.",
    "A career breakthrough is on the horizon.",
    "You will leave a legacy of inspiration."
];




function generateSummary() {
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const age = document.getElementById('age').value.trim();
    const birthDate = document.getElementById('birthDate').value.trim();
    const birthMonth = document.getElementById('birthMonth').value.trim();
    const birthYear = document.getElementById('birthYear').value.trim();
    const fullDate = `${birthYear}-${birthMonth}-${birthDate}`;
    const summaryCard = document.getElementById("summaryCard");
summaryCard.classList.add("active");

   
//    validating form 

    if ( !name||!surname || !age || !birthDate || !birthMonth || !birthYear) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (birthDate < 1 || birthDate > 31) {
      alert('Please enter a valid day (1-31).');
      return;
    }
    if (birthMonth < 1 || birthMonth > 12) {
      alert('Please enter a valid month (1-12).');
      return;
    }
    if (birthYear < 1900 || birthYear > 2024) {
      alert('Please enter a valid year (1900-2024).');
      return;
    }
  
console.log(name,age,surname,birthDate,birthMonth,birthYear)




// get the day of user birth 
const DayAccordingToDate= (dateOfBirth)=> {
    const date = new Date(dateOfBirth);
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = date.getDay();
   
    return daysOfWeek[dayIndex];
}


// console.log(`You were born on a ${DayAccordingToDate(fullDate)}.`);
// first massage 
const first_massage = `Hellow ${name} ${surname}`
const second_message= `Acoording to your date of birth your birth day is ${DayAccordingToDate(fullDate)}`
const third_message=compliments[birthDate-1]
const fourth_message= victimCardCompliments[Math.floor(Math.random()*victimCardCompliments.length)]
let index=(birthDate*birthYear)%30
const fifth_message=recommendations[index]
index=(birthDate*birthMonth*birthYear)%30
const sex_massage = recommendations[index]

index = (name.length*surname.length)%20
const seventh_massage = predictions[index]
const summaryText = document.getElementById("summaryText")


summaryText.innerHTML=summaryText.innerHTML = `
<h2>Summary for ${name} ${surname}</h2>
<p><strong>Your Birth Day:</strong> According to your date of birth, you were born on a <strong>${DayAccordingToDate(fullDate)}</strong>.</p>
<p><strong>Your Compliment:</strong> ${third_message}</p>
<p><strong>Victim Card Message:</strong> ${fourth_message}</p>
<p><strong>Recommendation #1:</strong> ${fifth_message}</p>
<p><strong>Recommendation #2:</strong> ${sex_massage}</p>
<p><strong>Your Prediction:</strong> ${seventh_massage}</p>
<p>Thank you for using the summary generator. We hope this inspires you!</p>
`;

console.log(summaryText)
}

const button = document.getElementById("button")

button.addEventListener("click",generateSummary)
