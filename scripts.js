var answers = {};
answers.question1=0;
answers.question2=0;


var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');


question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})


function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}


function totalScore(){
    var total = answers.question1+answers.question2;
    console.log(answers.question1+answers.question2);
    return total;
}

function getInfoBasedOnScore(){
    if(totalScore()==3 ){
        var score_info = "Parabéns 100% de acerto!"
    }
    if(totalScore()==5 ){
        var score_info = "50% de acerto, errou a questão 2!"
    }
    if(totalScore()==4 ){
        var score_info = "50% de acerto, errou a questão 1!"
    }
    if(totalScore()==6 ){
        var score_info = "0% de acerto, tente novamente!"
    }
    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');

var submit5 = document.getElementById('submit5');


function nextQuestion(question_number){
    var current_question_number
   
    current_question_number = question_number-1;
    
    var Question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+Question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('50%');
})

submit2.addEventListener('click', function(){
    growProgressBar('100%');
    document.getElementById('question-2').style.display = "none";
    nextQuestion(5);
})

submit5.addEventListener('click', function(){
    document.getElementById('printscoreinfo').value = getInfoBasedOnScore();
    var a = document.getElementById('printscoreinfo').value.replace(/\n/g, '<br>')
    document.getElementById("printscoreinfo").innerHTML = a;
})


function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}