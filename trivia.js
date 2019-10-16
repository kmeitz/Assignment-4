console.log('starting');
const api = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean';

$(document).ready(() =>  {
    $("#startButton").click(() => {
        $("#div1").load(api);
  });
});
    
    
    
