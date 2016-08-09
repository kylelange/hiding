$(function(){
  $("body").addClass("backgroundImage");

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
    $("body").addClass("backgroundImage");
  });
  $("#button1").click(function(){
    $("#card1").toggle();
  });
  $("#button2").click(function(){
    $("#card2").toggle();
  });
  $("#button3").click(function(){
    $("#card3").toggle();
  });
  $("#button4").click(function(){
    $("#card4").toggle();
  });
  $("#button5").click(function(){
    $("#card5").toggle();
  });
  $("#button6").click(function(){
    $("#card6").toggle();
  });
  $("#smack-m").click(function(){
    $("ul.unstyled1").prepend("<li>Mothra's the best! Godzilla's so poor his front and back door are on the same hinge!</li>");
  });
  $("#smack-g").click(function(){
    $("ul.unstyled2").prepend("<li>Godzilla is wet! Mothra is so ratchet she wears her mama's clothes NON-ironically.</li>")
  });
});


// $("#hiding-image").show();
