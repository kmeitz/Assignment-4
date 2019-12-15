console.log('starting');
$("#trueButton").hide();
$("#falseButton").hide();
$("#restartButton").hide();
$("#startButton").hide();
$("#nextButton").hide();

var score = 0; 
var questionNum = 0;
var first = 1;
var remainQ = 10;

$("#score").html(score);
nbutton = $("#nextButton");
qSpace = $("#div1");
scoreS = $("#score");
rbutton = $("#restartButton"); 
fbutton = $("#falseButton") ;
tbutton = $("#trueButton");



const api = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean';

$().ready(() => { 
  $("#questionButton").click(() => {
    $("#questionButton").hide();
    


    $.ajax({
      url: api
    }).then((data) => {
      
      trivia = console.log(JSON.stringify(data,null,3))
      
      $("#trueButton").show();
      
$("#falseButton").show();

$("#restartButton").show();





$("#div1").html("Question " + first +  ": " + data.results[questionNum].question + "\n You have " + remainQ + " questions remaining.") ;

// Restart button function
rbutton.click(function restart() {
  $("#trueButton").hide();
  $("#falseButton").hide();
  $("#restartButton").hide();
  $("#startButton").hide();
  $("#nextButton").hide();
  
  score = 0; 
  questionNum = 0;
  first = 1;
  scoreS.html(score);
  qSpace.html("")
  
  $("#questionButton").show();
});



if ( questionNum == 10) {
  qSpace.html("Your final score is " + score + ". Refresh the page to play again");
  tbutton.hide();
  fbutton.hide();
  nbutton.hide();
}
else { // If the true button is clicked"
  tbutton.click(function TrueClick() {
    $("#nextButton").show();
    fbutton.hide();
    tbutton.hide();
    remainQ -= 1;
    
    
    $("#div1").html("Question " + first + ": " + " The correct answer is " + data.results[questionNum].correct_answer + "." + " \n You have " + remainQ + " questions remaining.");
    
    if (data.results[questionNum].correct_answer == `True` ) {
      score += 1;
      scoreS.html(score);
    }
    questionNum += 1;
  first += 1;
  
});
// When the next button is clicked.
nbutton.click(function NextClick() {
 if (questionNum == 10)
 {
  qSpace.html("Your final score is " + score + ". Refresh the page to play again!");
  tbutton.hide();
  fbutton.hide();
  nbutton.hide();
 }
 else {
  tbutton.show();
  fbutton.show();
  nbutton.hide();
  $("#div1").html("Question " + first + ": " + data.results[questionNum].question + "\n You have " + remainQ + " questions remaining.");
 }
}); // when the false button is clicked
fbutton.click(function FalseClick() {
     
  $("#nextButton").show();
  fbutton.hide();
  tbutton.hide();
  remainQ -= 1;
  $("#div1").html("Question " + first + ": " + " The correct answer is " + data.results[questionNum].correct_answer + "." + " You have " + remainQ + " questions remaining.");
  
  if (data.results[questionNum].correct_answer == `False` ) {
    score += 1;
    scoreS.html(score);
  }
  questionNum += 1;
  first += 1;
 
});


}; 
  





    }); 
  })
});
