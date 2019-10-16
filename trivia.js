console.log('starting');
const api = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean';

$(document).ready(function(){
  $("button").click(function(){
    $.ajax({url: api, success: function(result){
      $("#div1").html(result);
      console.log(`result: ${JSON.stringify(result, null, 3)}`);
    }});
  });
});

    
    
