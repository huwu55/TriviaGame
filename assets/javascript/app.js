$(document).ready(function(){

    console.log(questions.length);
    var wins, loses, timeLeft, timerID, start;
    var i=0;
    wins = 0;
    loses = 0;
    //timeLeft = 5;
    start = false;

    //reset game after the round
    function reset(){
        wins = 0;
        loses = 0;
        i = 0;
    }

    //countdown time when player answers questions
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

    //display current question and its selections
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

    //track current index of questions and display the next question
    function checki(){
        if (i < questions.length - 1){
            i++;
            displayQuestionAndSelections();
        }
        else console.log("end");
    }

    //remove the correctAnswer screen after countdown and update i
    function correctAnswer(){
        console.log("right");
        //$("#qAndA").append("<div class='right'></div>");
        $(".right").remove();
        checki();
    }
   
    // remove the wrongAnswer screen after countdown and update i
    function wrongAnswer(){
        console.log("false");
        //$("#qAndA").append("<div class='wrong'></div>");
        $(".wrong").remove();
        checki();
    }

    //interrupt timer, check the player's answer
    //start display a page and timer depends on the right or wrong answer
    function checkAnswer(str){
        //console.log("hello world");
        clearTimeout(timerID);
        //start = false;
        if (str === questions[i].correctAns){
            $("#qAndA").append("<div class='right'></div>");
            setTimeout(correctAnswer, 3000);
        }
        else{
            $("#qAndA").append("<div class='wrong'></div>");
            setTimeout(wrongAnswer, 3000);
        }
    }

    // start the game
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
