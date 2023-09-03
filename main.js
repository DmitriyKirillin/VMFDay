var check1 = document.getElementById("quiz-form1").addEventListener("submit", checkAnswer1);

function checkAnswer1(event) {
    event.preventDefault();
    var selectedAnswer = document.querySelector('input[name="qw_1"]:checked');
    if (selectedAnswer && selectedAnswer.value === "Петр I") {
        alert("Ответ правильный");
    }
    else {
        alert("Нет, вы не правы");
    }
}

var check2 = document.getElementById("quiz-form2").addEventListener("submit", checkAnswer2);

function checkAnswer2(event) {
    event.preventDefault();
    var selectedAnswer = document.querySelector('input[name="qw_2"]:checked');
    if (selectedAnswer && selectedAnswer.value === "1jun1933") {
        alert("Ответ правильный");
    }
    else {
        alert("Нет, вы не правы");
    }
}

var check3 = document.getElementById("quiz-form3").addEventListener("submit", checkAnswer3);

function checkAnswer3(event) {
    event.preventDefault();
    var selectedAnswer = document.querySelector('input[name="qw_3"]:checked');
    if (selectedAnswer && selectedAnswer.value === "spb") {
        alert("Ответ правильный");
    }
    else {
        alert("Нет, вы не правы");
    }
}