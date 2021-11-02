
let form = document.getElementById("myForm");
let correctAnswerCounter = 0;                  // keeps track of  # of correct answers

// Prevents default action of form submission
 
form.addEventListener("submit",function (event) { 
  event.preventDefault()
});

form.addEventListener("reset", clearMessages);  

/* 
  Grabs the Divs of class "response" as an array
  Clears messages in each div on reset
*/
function clearMessages() {
  let x = document.getElementsByClassName("response");
  
  for (let i = 0; i < x.length; i++) {
    x[i].innerText = "";
  }
  correctAnswerCounter = 0;      // reset counter
}

/* 
  Create an array of questions for the quiz, each question being an object with properties 
  of what the question is about, answer to the question and feedback div id. 
*/ 

const arrayOfQuestions = [{question: "capital", answer: "Bangkok",feedback: "response1"}, 
  {question: "sport", answer: "Soccer", feedback: "response2"}, 
  {question: "cars", answer: "Volkswagen", feedback: "response3"}
];

 
function runQuiz() {
  arrayOfQuestions.forEach(test);  // runs the test function on each object in the array
}

function test(object) {
  
  let radioButtons = document.getElementsByName(object.question); // grabs the inputs with associated name
  let results = document.getElementById("result");
  
  for (let i = 0; i < radioButtons.length; i++) {               // iterate through radiobutton inputs
    if ((radioButtons[i].checked === true) && (radioButtons[i].value === object.answer)) { // compare user selection to object property answer
      correctAnswerCounter += 1;                                         // increment counter 
      responseCorrect(object.feedback);                                 // prints feedback to screen
    }
    else if  ((radioButtons[i].checked === true) && (radioButtons[i].value !== object.answer)) {  // if user gets it wrong
      responseInCorrect(object.feedback, object.answer);                                            // error message and correct answer shown
    }
  }
  results.innerText = `You scored ${correctAnswerCounter}/3 `;   // prints userscore to screen
  
}

function responseCorrect(idName) {
  document.getElementById(idName).innerText = "Correct";
}

function responseInCorrect(idName, correctAnswer) {
  document.getElementById(idName).innerText = `Incorrect the correct answer was ${correctAnswer}`;
}

