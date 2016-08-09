$(function(){
  $("#click1").click(function() {
    $("#shy-owl").slideUp();
  });
  $("#click2").click(function() {
    $("#hiding-image").slideDown();
  });
  $("#click3").click(function() {
    $("#toggle-image").slideToggle();
  });
  $("#click4").click(function() {
    $("#hidden-p").slideToggle();
  });
  $("#click5").click(function(){
    $("#hidden-p2").slideDown();
  });
  $("#click6").click(function(){
    $("body").removeClass();
    $("body").addClass("white-background");
  });
  $("#click7").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("#click8").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });
});


// $("#hiding-image").show();
