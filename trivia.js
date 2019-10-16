console.log('starting');
$("#submitButton").hide();
const api = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean';

$(document).ready(function(){
  $("#startButton").click(function(){
    $.ajax({url: api, success: function(result){
      $("#div1").html(result);
      console.log(`result: ${JSON.stringify(result, null, 3)}`);
      data = `result: ${JSON.stringify(result, null, 3)}`
      
      $("#startButton").hide();
    }});
  });
});
$("#submitButton").show();
//for (i = 0; i < 10; i++) {
  //$("#div1").html(result[i]);

  
    
    
