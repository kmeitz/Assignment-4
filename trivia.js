console.log('starting');
$("#trueButton").hide();
$("#falseButton").hide();
$("#restartButton").hide();
$("#startButton").hide();
$("#nextButton").hide();

var trivia;





const api = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean';

$().ready(() => { 
  $("#questionButton").click(() => {
    $("#questionButton").hide();
    


    $.ajax({
      url: api
    }).then((data) => {
      
      trivia = console.log(JSON.stringify(data,null,3))
      const questionNum = 1;
      const score  = 0; 
      $("#trueButton").show();
      tbutton = $("#trueButton");
$("#falseButton").show();
fbutton = $("#falseButton") ;
$("#restartButton").show();
rbutton = $("#restartButton"); 
$("#nextButton").show();
nbutton = $("#nextButton");
qSpace = $("#div1");
scoreS = $("#score");

$("#div1").html("Question " + questionNum + ": " + data.results[0].question);

// Restart button function
rbutton.click(function restart() {
  const questionNum = 0;
  const score = 0;
  scoreS.html("");
  fbutton.hide();
  tbutton.hide();
  nbutton.hide();
  rbutton.hide();
  qSpace.html("");
  $("#questionButton").show();


});

  


    }); 
  })
});









//$("#startButton").click(function start() {
//$("#startButton").hide();


//$("#div2").html(data.question[0]);
//});


//$("#trueButton").click(function trueC() {
  //if( data.correct_answer = "True") {
    //questionNum += 1;
    //score += 1;
    //$("#score").html('Score: ' + score);
  //}
//}



  //$("#startButton").click(function(foo){
    //$.ajax({url: api, success: function(result){
      //$("#div1").html(result);
      //console.log(`result: ${JSON.stringify(result, null, 3)}`);
      //const trivia = `result: ${JSON.stringify(result, null, 3)}`
      
      //$("#startButton").hide();
      //$("#trueButton").show();
      //$("#falseButton").show();
      //$("#restartButton").show();
      
      //$("#question").val(triviaData);
      

   // }});
 // });
// });







  
    
    
