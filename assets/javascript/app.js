$(document).ready(function(){

    console.log(questions.length);
    var wins, loses, timeLeft, timerID;
    var i=0;
    wins = 0;
    loses = 0;
    timeLeft = 10;

    //reset game after the round
    function reset(){
        wins = 0;
        loses = 0;
        i = 0;
        $(".reset").remove();
        displayQuestionAndSelections();
    }

    //countdown time when player answers questions
    function countdown(){
        if(timeLeft==0){
            clearTimeout(timerID);
            checkAnswer("");
        }
        else{
            timeLeft--;
            $("#timeRemaining").html(timeLeft + " seconds");
        }
    }

    //display current question and its selections
    function displayQuestionAndSelections(){
        timeLeft = 10;
        timerID = setInterval(countdown, 1000);
        //console.log(i);
        $("#question").html(questions[i].q);
        $("#a1").html(questions[i].a1);
        $("#a2").html(questions[i].a2);
        $("#a3").html(questions[i].a3);
        $("#a4").html(questions[i].a4);
    }

    //track current index of questions and display the next question
    function checki(){
        if (i < questions.length - 1){
            i++;
            displayQuestionAndSelections();
        }
        else{
            $(".main").append("<div class='reset col-md-8'></div>");
            $(".reset").html("Wins: " + wins + "<br>Loses: " + loses + "<br>");
            $(".reset").append("<button id='reset'>Restart!</button>");
            $("#reset").click(reset);
        }
    }

    //remove the correctAnswer screen after countdown and update i
    function correctAnswer(){
        console.log("right");
        $(".right").remove();
        checki();
    }
   
    // remove the wrongAnswer screen after countdown and update i
    function wrongAnswer(){
        $(".wrong").remove();
        checki();
    }

    //interrupt timer, check the player's answer
    //start display a page and timer depends on the right or wrong answer
    function checkAnswer(str){
        clearTimeout(timerID);
        $("#timeRemaining").html("");
        if (str === questions[i].correctAns){
            setTimeout(correctAnswer, 2000);
            $(".main").append("<div class='right col-md-8'></div>");
            $(".right").html("You Win!");
            wins++;
        }
        else{
            setTimeout(wrongAnswer, 2000);
            $(".main").append("<div class='wrong col-md-8'></div>");
            $(".wrong").html("Wrong answer!<br>The correct answer is: " + questions[i].correctAns);
            loses++;
        }
    }

    $(".main").append("<div class='start col-md-8'><button type='button' id='start'>Start!</button></div>");

    // start the game
    $("#start").click(function(){
        $(".start").remove();
        displayQuestionAndSelections();
    });
    
    $("#a1").click(function(){
        checkAnswer(questions[i].a1);
    });
    $("#a2").click(function(){
        checkAnswer(questions[i].a2);
    });
    $("#a3").click(function(){
        checkAnswer(questions[i].a3);
    });
    $("#a4").click(function(){
        checkAnswer(questions[i].a4);
    });
});
