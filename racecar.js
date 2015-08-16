$(document).ready(function(){

  $('html').keypress(function (e) {
    if (e.keyCode == 97) {
      $(".playerOne").animate({ "left": "+=200px" }, 100 );}
  });

  $('html').keypress(function (e) {
    if (e.keyCode == 108) {
      $(".playerTwo").animate({ "left": "+=200px" }, 100 );}
  });

  $("input").click(function(){
    $(".playerOne,.playerTwo").removeAttr("style");
  });





})