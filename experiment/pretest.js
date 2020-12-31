
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "What is the value of the radius of gyration of rim type flywheel as compared to a disc type flywheel for the same diameter?",
    answers: {
      a: "<img src=\'images\/equations\/q1.png' title='\\sqrt2\'\/> times",
      b: "<img src=\'images\/equations\/q2.png' title='\\frac{1}{2}\'\/> times",
      c: "2 times",
      d: "<img src=\'images\/equations\/q3.png' title=''\\frac{1}{\\sqrt2}\'\/> times"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the value of the radius of gyration of the rim type flywheel as compared to disc type flywheel for the same diameter? ",
    answers: {
      a: "<img src=\'images\/equations\/q4.png' title='\\frac{21}{2}\'\/> times",
      b: "<img src=\'images\/equations\/q5.png' title='\\frac{1}{\\frac{21}{2}}\'\/> times",
      c: "2 times",
      d: "<img src=\'images\/equations\/q6.png' title='\\frac{1}{2}\'\ /> times"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the moment of inertia of rim type of flywheel?",
    answers: {
      a: "I= Mr<sup>2</sup>",
      b: "I=0.5∗Mr<sup>2</sup>",
      c: "I=2∗Mr<sup>2</sup>",
      d: "I=0.4∗Mr<sup>2</sup>"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following statements are correct?<br>Statement A: To absorb energy when demand of energy id less than the supply<br>Statement B: To give out energy when demand of energy is more than the supply.",
    answers: {
      a: "A is correct and B is wrong",
      b: "B is correct and A is wrong",
      c: "Both A and B are correct",
      d: "Both A and B are wrong"
    },
    correctAnswer: "c"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
