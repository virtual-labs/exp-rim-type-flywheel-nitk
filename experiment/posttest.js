
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
      question: "The energy is stored in Flywheel in form of",
      answers: {
        a: "Potential energy",
        b: "Kinetic energy",
        c: "Heat energy",
        d: "Electrical energy"
      },
      correctAnswer: "b"
    },
    {
      question: "With usual notations for different parameters involved, the maximum fluctuations of energy for a flywheel is given by",
      answers: {
        a: "<img src=\'images\/equations\/q7.png' title='2EC_s\'\ />",
        b: "<img src=\'images\/equations\/q8.png' title='\\frac{EC_s}{2}\'\/>",
        c: "<img src=\'images\/equations\/q9.png' title='2EC_s^2\'\/>",
        d: "<img src=\'images\/equations\/q10.png' title='2E^2C_s\'\/>"
      },
      correctAnswer: "a"
    },
    {
      question: "Flywheel are generally made from",
      answers: {
        a: "Cast Iron",
        b: "High strength steel",
        c: "Ceramics",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "The difference the maximum and minimum speeds during a cycle is called",
      answers: {
        a: "Fluctuation of speed",
        b: "Maximum fluctuation of speed",
        c: "Coefficient of fluctuation of speed",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "A flywheel connected to a punching machine has to supply energy of 160Nm while running at a mean angular speed of 12rad/s. If the total fluctuation of speed is not exceeded to ±1.75%, the mass moment of inertia of the flywheel in kgm<sup>2</sup> is",
      answers: {
        a: "56.25",
        b: "135.39",
        c: "31.75",
        d: "23.95"
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
