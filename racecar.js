var playerOneWin = "";
var playerTwoWin = "";

$(document).ready(function(){

/*========================================
          PLAYER ANIMATION
=======================================*/

  var functionOne = $('html').keyup(function (e) {
    if (e.keyCode == 70) {
      $(".playerOne").animate({ "left": "+=20px" }, 0 );}
  });

  $('html').keyup(function (e) {
    if (e.keyCode == 76) {
      $(".playerTwo").animate({ "left": "+=20px" }, 0 );}
  });

/*========================================
                WINNER
=======================================*/

  $('html').keyup( function(event) {     
    var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '70'){
        $('#html').html(playerOneWin++);  
      }
      if (playerOneWin === 64) {
        alert("PLAYER ONE WINS");
      }
   });

  $('html').keyup( function(event) {     
    var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '76'){
        $('#html').html(playerTwoWin++);  
      }
      if (playerTwoWin === 64) {
        alert("PLAYER TWO WINS");
      } 
   });

/*========================================
            RESET GAME
=======================================*/

 $("#reset").click(function(){
    location.reload();
  });
})
