var playerOneWin = "";
var playerTwoWin = "";

$(document).ready(function(){

/*========================================
          PLAYER ANIMATION
=======================================*/

  var functionOne = $('html').keypress(function (e) {
    if (e.keyCode == 97) {
      $(".playerOne").animate({ "left": "+=20px" }, 0 );}
  });

  $('html').keypress(function (e) {
    if (e.keyCode == 108) {
      $(".playerTwo").animate({ "left": "+=20px" }, 0 );}
  });

/*========================================
                WINNER
=======================================*/

  $('html').keypress( function(event) {     
    var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '97'){
        $('#html').html(playerOneWin++);  
      }
      if (playerOneWin === 64) {
        alert("PLAYER ONE WINS");
      }
   });

  $('html').keypress( function(event) {     
    var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '108'){
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
