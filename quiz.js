let form = document.getElementById("myForm");
  form.addEventListener("submit",function (event) { 
  event.preventDefault()
});

/* 
  create an array of questions for the quiz, each question being an object with properties 
  of what the question is about, answer to the question and feedback div id. 
*/ 

const arrayOfQuestions = [{question: "capital", answer: "Bangkok",feedback: "response1"}, 
  {question: "sport", answer: "Soccer", feedback: "response2"}, 
  {question: "cars", answer: "Volkswagen", feedback: "response3"}
];

let correctAnswerCounter = 0;   


function runQuiz() {
arrayOfQuestions.forEach(test);  // runs the test function on each item/object in the array
}

function test(item) {
  let radioButtons = document.getElementsByName(item.question); // grabs the inputs with associated name
  
  for (let i = 0; i < radioButtons.length; i++) {               // iterate through radiobutton inputs
    console.log(radioButtons[i].value);
    if ((radioButtons[i].checked === true) && (radioButtons[i].value === item.answer)) {// compare user selection to object answer
      correctAnswerCounter += 1;                                          // was going to use this to print user score to screen not finished yet 
      responseCorrect(item.feedback);                                 // prints feedback to screen
    }
    else if  ((radioButtons[i].checked === true) && (radioButtons[i].value !== item.answer)) {  //if user gets it wrong
      responseInCorrect(item.feedback, item.answer);                                            // error message and correct answer shown
    }
  }

}

function responseCorrect(idName) {
  document.getElementById(idName).innerText = "Correct";
}

function responseInCorrect(idName, idSolution) {
  document.getElementById(idName).innerText = `Incorrect the correct answer was ${idSolution}`;
}

function clear() {                                      // was trying to clear the error div but on reset but Can' seem to make it work ??
  let div =  document.getElementById("response3"); 
 div.innerText = " " ;
}