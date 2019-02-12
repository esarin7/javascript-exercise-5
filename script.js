var myQuiz = document.getElementById('myQuiz');
var submitButton = document.myQuiz.quizButton;


var year = document.myQuiz.year;
var disease = document.myQuiz.disease;
var story = document.myQuiz.story;
var nurse = document.myQuiz.nurse;
var male = document.myQuiz.male;
var conquistador = document.myQuiz.conquistador;

var score = 0;

submitButton.addEventListener("click", function(event) {
    
    

    if (year[0].checked) {
        score++;
    }

    if (disease[1].checked) {
        score++;
    }

    if (story.value =="The Epic of Gilgamesh") {
        score++;
    }

    if (nurse.value =="Florence Nightingale") {
        score++;
    }

    if (male[2].checked) {
        score++;
    }

    if (conquistador[1].checked) {
        score++
    }
    
    document.getElementById("score").innerHTML = ("Your score is " + score + " out of 6.");
    
    event.preventDefault();
    

})










