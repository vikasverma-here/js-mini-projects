const interviewQuestions = [

    {
      question: "What is the purpose of the <!DOCTYPE> declaration in HTML?",
      options: [
        "To define the document type and version of HTML.",
        "To include CSS styles.",
        "To make the page responsive.",
        "To link external JavaScript."
      ],
      answer: "To define the document type and version of HTML.",
      category: "HTML"
    },
   
    {
      question: "What is the purpose of the <head> tag in HTML?",
      options: [
        "To include metadata and links to stylesheets or scripts.",
        "To display content on the webpage.",
        "To create the header section.",
        "To align text to the top."
      ],
      answer: "To include metadata and links to stylesheets or scripts.",
      category: "HTML"
    },
  
    {
      question: "What is the purpose of the <iframe> tag in HTML?",
      options: [
        "To embed another document within the current HTML document.",
        "To insert an image.",
        "To create a form.",
        "To define a clickable area."
      ],
      answer: "To embed another document within the current HTML document.",
      category: "HTML"
    },
    {
      question: "What is the correct syntax for adding a comment in HTML?",
      options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
      answer: "<!-- comment -->",
      category: "HTML"
    },
    {
      question: "What is the purpose of the <fieldset> and <legend> elements in HTML forms?",
      options: [
        "To group related fields and provide a caption.",
        "To define input types.",
        "To style the form.",
        "To make the form responsive."
      ],
      answer: "To group related fields and provide a caption.",
      category: "HTML"
    },
    {
      question: "Which attribute is used to specify the target of a link in HTML?",
      options: ["href", "target", "rel", "src"],
      answer: "target",
      category: "HTML"
    },
    {
      question: "What is the purpose of the <canvas> element in HTML?",
      options: [
        "To draw graphics using JavaScript.",
        "To include a video.",
        "To insert an image.",
        "To create animations."
      ],
      answer: "To draw graphics using JavaScript.",
      category: "HTML"
    },
  
   
    {
      question: "What is the difference between 'id' and 'class' in CSS?",
      options: [
        "'id' is unique and applies to one element, 'class' can be reused on multiple elements.",
        "'id' is for JavaScript only, 'class' is for CSS.",
        "'id' is faster than 'class'.",
        "There is no difference."
      ],
      answer: "'id' is unique and applies to one element, 'class' can be reused on multiple elements.",
      category: "CSS"
    },
    {
      question: "What is the difference between 'relative' and 'fixed' positioning in CSS?",
      options: [
        "'Relative' positions an element relative to itself, 'fixed' positions it relative to the viewport.",
        "'Relative' is for text alignment, 'fixed' is for images.",
        "Both are the same.",
        "'Fixed' is only used in media queries."
      ],
      answer: "'Relative' positions an element relative to itself, 'fixed' positions it relative to the viewport.",
      category: "CSS"
    },
    {
      question: "What does the 'box-sizing' property in CSS do?",
      options: [
        "Defines whether padding and border are included in the element's width and height.",
        "Sets the size of the text box.",
        "Creates a responsive layout.",
        "Defines the margin of an element."
      ],
      answer: "Defines whether padding and border are included in the element's width and height.",
      category: "CSS"
    },
    {
      question: "What is the difference between 'inline', 'block', and 'inline-block' elements in CSS?",
      options: [
        "Inline does not start on a new line, block starts on a new line, inline-block is a mix of both.",
        "Inline can have padding and margins, block cannot.",
        "Inline and inline-block are the same, block is different.",
        "None of the above."
      ],
      answer: "Inline does not start on a new line, block starts on a new line, inline-block is a mix of both.",
      category: "CSS"
    },
    {
      question: "What is a pseudo-class in CSS?",
      options: [
        "A keyword added to selectors to style elements in a specific state.",
        "A placeholder for a class name.",
        "A way to define custom functions.",
        "A method to include JavaScript in CSS."
      ],
      answer: "A keyword added to selectors to style elements in a specific state.",
      category: "CSS"
    },
  
   
    {
      question: "What is the difference between '==' and '===' in JavaScript?",
      options: [
        "'==' checks only values, '===' checks values and data types.",
        "'===' is used for strings only.",
        "'==' is for functions, '===' is for variables.",
        "Both are the same."
      ],
      answer: "'==' checks only values, '===' checks values and data types.",
      category: "JavaScript"
    },
    {
      question: "What is 'hoisting' in JavaScript?",
      options: [
        "Moving variable and function declarations to the top of their scope.",
        "Creating a new scope for every variable.",
        "Lifting the page to the top.",
        "Aligning elements using JavaScript."
      ],
      answer: "Moving variable and function declarations to the top of their scope.",
      category: "JavaScript"
    },
    {
      question: "What are 'closures' in JavaScript?",
      options: [
        "Functions bundled with their lexical environment.",
        "Functions without arguments.",
        "Functions that are immediately invoked.",
        "Functions with no return statement."
      ],
      answer: "Functions bundled with their lexical environment.",
      category: "JavaScript"
    }, { question: "What is the purpose of the 'let' keyword in JavaScript?", options: ["To declare variables globally", "To declare variables that are block-scoped", "To declare constants", "To declare function parameters"], answer: "To declare variables that are block-scoped" },
    { question: "What is the result of typeof null in JavaScript?", options: ["'null'", "'object'", "'undefined'", "'boolean'"], answer: "'object'" },
    { question: "Which of the following is a falsy value in JavaScript?", options: ["1", "'false'", "0", "'0'"], answer: "0" },
    { question: "What is the default value of 'this' in a regular function?", options: ["Global object", "undefined", "null", "Window object"], answer: "Global object" },
    { question: "Which method is used to convert a JSON object into a string?", options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.toString()"], answer: "JSON.stringify()" },
    { question: "What will the following code output: console.log(1 + '1');?", options: ["2", "'11'", "NaN", "undefined"], answer: "'11'" },
    { question: "What is the difference between '==' and '===' in JavaScript?", options: ["'==' checks value only, '===' checks value and type", "'==' checks type only, '===' checks value and type", "'==' and '===' are equivalent", "'===' checks type only"], answer: "'==' checks value only, '===' checks value and type" },
    { question: "Which JavaScript method is used to remove the last element from an array?", options: [".push()", ".pop()", ".shift()", ".unshift()"], answer: ".pop()" },
    { question: "What is the purpose of the 'use strict' directive in JavaScript?", options: ["To enable strict mode", "To disable strict mode", "To declare strict variables", "To optimize JavaScript performance"], answer: "To enable strict mode" },
    { question: "Which method is used to add a new element to the beginning of an array?", options: [".push()", ".unshift()", ".concat()", ".splice()"], answer: ".unshift()" },
    { question: "How do you check if a property exists in an object?", options: ["Using 'hasOwnProperty()'", "Using 'in' operator", "Both A and B", "None of the above"], answer: "Both A and B" },
    { question: "What is the difference between 'null' and 'undefined'?", options: ["'null' is a value, 'undefined' means a variable is not defined", "'null' and 'undefined' are equivalent", "'null' is a placeholder, 'undefined' is a type", "'undefined' is a value, 'null' means not defined"], answer: "'null' is a value, 'undefined' means a variable is not defined" },
    { question: "Which statement is used to handle exceptions in JavaScript?", options: ["try...catch", "try...finally", "try...else", "try...then"], answer: "try...catch" },
    { question: "What is the purpose of the 'setTimeout' function?", options: ["To call a function after a specified delay", "To repeatedly call a function", "To stop the execution of a function", "To execute a function immediately"], answer: "To call a function after a specified delay" },
    { question: "What does the 'bind()' method do?", options: ["Creates a new function with 'this' keyword bound to a specified object", "Executes a function immediately", "Binds two functions together", "Combines arrays"], answer: "Creates a new function with 'this' keyword bound to a specified object" },
    { question: "Which keyword is used to create a class in JavaScript?", options: ["class", "Class", "constructor", "new"], answer: "class" },
    { question: "What is the purpose of the 'Promise' object in JavaScript?", options: ["To handle asynchronous operations", "To execute synchronous code", "To debug code", "To execute code immediately"], answer: "To handle asynchronous operations" },
    { question: "Which JavaScript event is fired when a form is submitted?", options: ["onchange", "onsubmit", "oninput", "onload"], answer: "onsubmit" },
    { question: "Which method is used to stop the propagation of an event?", options: ["event.stopPropagation()", "event.preventDefault()", "event.cancel()", "event.halt()"], answer: "event.stopPropagation()" },
  ];
  

  const RandomQuestions = ()=>{
    let i = 0;
    let length = interviewQuestions.length;
    const arr = [];
    // console.log(arr)
console.log(length);
    while(i<5){
        const index = Math.floor(Math.random()*length);
        arr.push(interviewQuestions[index]);
        [interviewQuestions[index],interviewQuestions[length-1]] = [interviewQuestions[length-1],interviewQuestions[index]];
        length--,i++;

    }
    return arr;
  }
   const selected_question= RandomQuestions()
console.log(selected_question)

const form = document.querySelector('form')
selected_question.forEach((problem,index)=>{
    const div = document.createElement('div');
    div.className='question' 
    const para = document.createElement('p');
    para.innerText = `${index+1}. ${problem['question']}`
    div.appendChild(para)

    problem['options'].forEach((data)=>{
        const newDiv= document.createElement('div');
        const input = document.createElement('input');
        input.type='radio';
        input.name=`q${index+1}`
        input.value=data;
        const labal = document.createElement('label')
        labal.innerHTML=data;
        newDiv.appendChild(input)
        newDiv.appendChild(labal)
        div.appendChild(newDiv)
    })



form.appendChild(div)
})

const btndiv= document.createElement('div');
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.className = "submit-btn";
submitButton.innerText = "SUBMIT";
btndiv.appendChild(submitButton);
form.appendChild(btndiv)

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.reload(); 
  });