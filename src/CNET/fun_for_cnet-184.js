/**
 *
 *
 * question list
 * [
 *     {
 *         questionText:'',
 *         options:
 *         [
 *              {
 *                  text:''
 *                  id:''
 *                  isCorrect: boolean
 *              }
 *         ]
 *     }
 * ]
 *
 * @constructor
 */
function Paper(){

    let visitedQuestionNumber = 0;
    let correctQuestionNumber = 0;
    let questionList = Array();
    let questionNumber = questionList.length;


    let refreshStatistics = function(){
        document.getElementById("statistics").innerHTML =
             "<h3>You have visited " + visitedQuestionNumber + "/" + questionNumber +  " questions" + " and make " + correctQuestionNumber + " correct</h3>";
    }

    let getNextRandomIndex = function(max){
        return Math.floor(Math.random() * max) + 1;
    }

    this.startNewRound = function(){
        for(let i = 0; i < questionNumber; i++){
            questionList[i]['visited'] = false;
        }
        visitedQuestionNumber = 0;
        correctQuestionNumber = 0;
        refreshStatistics();
    }



    this.nextQuestion = function(){
        let question = undefined;
        do{
            let index = getNextRandomIndex(questionNumber);
            question = questionList[index];
        }while(question['visited']);
        question['visited'] = true;
    }

    this.checkAnswer = function(){
        alert("check answer");
    }
}



window.onload = function(){


    let paper = new Paper();

    document.getElementById("start").onclick = function(){
        paper.startNewRound();
    }

    document.getElementById("submit").onclick = function(){
        paper.checkAnswer();
    }
}



