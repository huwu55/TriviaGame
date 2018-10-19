$(document).ready(function(){

    console.log(questions.length);
    var wins, loses, timeLeft, timerID, start, resultTimer;
    var i=0;
    wins = 0;
    loses = 0;
    //timeLeft = 5;
    start = false;

    function reset(){
        wins = 0;
        loses = 0;
        i = 0;
    }

    function countdown(){
        if(timeLeft==0){
            clearTimeout(timerID);
            //$(".main").html("");
            checkAnswer("");
        }
        else{
            $("#timeRemaining").html(timeLeft + "seconds");
            timeLeft--;
        }
    }

    function displayQuestionAndSelections(){
        timeLeft = 10;
        //start = true;
        console.log(i);
        $("#question").html(questions[i].q);
        $("#a1").html(questions[i].a1);
        $("#a2").html(questions[i].a2);
        $("#a3").html(questions[i].a3);
        $("#a4").html(questions[i].a4);
        timerID = setInterval(countdown, 1000);
    }

    function checki(){
        if (i < questions.length - 1){
            i++;
            displayQuestionAndSelections();
        }
        else console.log("end");
    }


    function correctAnswer(){
        console.log("right");
        //$("#qAndA").append("<div class='right'></div>");
        $(".right").remove();
        checki();
    }

    function wrongAnswer(){
        console.log("false");
        //$("#qAndA").append("<div class='wrong'></div>");
        $(".wrong").remove();
        checki();
    }

    function checkAnswer(str){
        //console.log("hello world");
        clearTimeout(timerID);
        //start = false;
        if (str === questions[i].correctAns){
            $("#qAndA").append("<div class='right'></div>");
            resultTimer = setTimeout(correctAnswer, 3000);
        }
        else{
            $("#qAndA").append("<div class='wrong'></div>");
            resultTimer = setTimeout(wrongAnswer, 3000);
        }
    }


    $("#start").click(function(){
        $(this).remove();
        if(!start){
            console.log("start");
            //start = true;
            displayQuestionAndSelections();
        }

    });
    
    $("#a1").click(function(){
        //if(start) 
        checkAnswer(questions[i].a1);
    });
    $("#a2").click(function(){
        //if(start) 
        checkAnswer(questions[i].a2);
    });
    $("#a3").click(function(){
        //if(start)
        checkAnswer(questions[i].a3);
    });
    $("#a4").click(function(){
        //if(start) 
        checkAnswer(questions[i].a4);
    });

});