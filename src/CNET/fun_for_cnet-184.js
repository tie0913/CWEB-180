/**
 *
 *
 * question list
 * [
 *     {
 *         type:'multi/single'
 *         text:'',
 *         options:
 *         [
 *              {
 *                  text:''
 *                  id:'',
 *                  correct:0/1
 *              }
 *         ]
 *     }
 * ]
 *
 * @constructor
 */

Question_Array = [{
    text:'This is question',
    type:'single',
    options:[{
        text:'answer A',
        id:'1',
        correct:'1'
    },{
        text:'answer B',
        id:'2',
        correct:'0'
    },{
        text:"answer C",
        id:'3',
        correct:'0'
    }]
},{
    text:'This is another question',
    type:'multiple',
    options:[{
        text:'answer 1',
        id:'1',
        correct:'1'
    },{
        text:'answer 2',
        id:'2',
        correct:'0'
    },{
        text:"answer 3",
        id:'3',
        correct:'1'
    }]
},{
    text:'This is the 3rd question',
    type:'single',
    options:[{
        text:'answer A',
        id:'1',
        correct:'0'
    },{
        text:'answer B',
        id:'2',
        correct:'1'
    },{
        text:"answer C",
        id:'3',
        correct:'0'
    }]
}]

function Paper(){
    const single = "single";
    const optionNamePrefix = "question_";
    const correct = "1";

    let questionList = Question_Array;
    let currentIndex = -1;
    let correctNumber = 0;

    let refreshStatistics = function(){
        document.getElementById("statistics").innerHTML = "You have finished " + currentIndex + "/" + questionList.length
            + " questions and make " + correctNumber + " of them correct";
    }

    let getNextRandomIndex = function(max){
        return Math.floor(Math.random() * max);
    }

    let shuffle = function(arr){
        let len = arr.length;
        for(let i = 0; i < len; i++){
            let index = getNextRandomIndex(len);
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }

    let getOptionsNameForCurrentQuestion = function(){
         return optionNamePrefix + currentIndex;
    }

    let displayQuestion = function(currentQuestion){
        let options = currentQuestion["options"];
        shuffle(options);
        document.getElementById("question").innerHTML = currentQuestion["text"];

        let optionHtml = "";
        for(let i = 0; i < options.length; i++){

            let option = options[i];
            let type = undefined;
            if(single === currentQuestion['type']){
                type = "radio";
            }else{
                type = "checkbox";
            }

            optionHtml += "<span c='" + option['correct'] + "'>";
            optionHtml += "<input type='" + type + "' name='" + getOptionsNameForCurrentQuestion() + "' id='" + option["id"] + "'>";
            optionHtml += option["text"];
            optionHtml += "</span>";
            optionHtml += "<br>";
        }

        document.getElementById("options").innerHTML = optionHtml;
    }

    let nextQuestion = function(){
        let currentQuestion = questionList[currentIndex++];
        displayQuestion(currentQuestion);
    }

    let judging = function(){
        let checkers = document.getElementsByName(getOptionsNameForCurrentQuestion())
        let errors = 0;
        for(let checker of checkers){
            let span = checker.parentNode
            if(span.getAttribute('c') === correct
            && !checker.checked){
                errors++;
            }else if(span.getAttribute('c') !== correct
            && checker.checked){
                errors++;
            }
        }
        return errors === 0;
    }

    let refreshAnswers = function(){
        let answerDiv = document.getElementById("answers");
        answerDiv.style.display = "none";
    }

    let backupUnCorrectAnswers = function(){
        let questionText = document.getElementById("question").innerHTML
        let optionText = document.getElementById("options").innerHTML;
        let backupHTML = "<div class='backup'><div>" + questionText + "</div><div>" + optionText + "</div></div>";
        document.getElementById("answers").innerHTML += backupHTML;
    }

    this.startNewRound = function(){
        shuffle(questionList)
        currentIndex = 0;
        correctNumber = 0;
        refreshStatistics();
        nextQuestion();
        refreshAnswers();
        document.getElementById("answers").innerHTML = "";
        document.getElementById("answers").style.display = "none";
    }

    this.next = function(){
        if(currentIndex < 0){
            alert("Please click start a new round");
            currentIndex = -1;
            return;
        }
        if(judging()){
            correctNumber++;
        }else{
            this.checkAnswer();
            backupUnCorrectAnswers();
        }


        refreshStatistics();

        if(currentIndex < questionList.length){
            nextQuestion();
        }else{
            alert("You have done one round, well done!")
            document.getElementById("answers").style.display = "block";
            currentIndex = -1;
        }
    }

    this.checkAnswer = function(){

        let checkers = document.getElementsByName(getOptionsNameForCurrentQuestion())
        for(let checker of checkers){
            checker.disabled = true;
        }

        for(let span of document.getElementsByTagName("span")){
            let attr = span.getAttribute('c');
            if(attr === correct){
                span.style.backgroundColor = "lightgreen";
            }else{
                span.style.backgroundColor = "orange";
            }
        }

    }
}



window.onload = function(){


    let paper = new Paper();

    document.getElementById("start").onclick = function(){
        paper.startNewRound();
    }

    document.getElementById("check").onclick = function(){
        paper.checkAnswer();
    }

    document.getElementById("next").onclick = function(){
        paper.next();
    }
}



