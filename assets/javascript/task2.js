/* Put code for the task below */

$(document).ready(function(){
  $("#button-blue").click(function(){
    $("#task2-table").css("background", "#001D97")
    $("#task2-table").css("color", "white")
  });
  $("#button-gold").click(function(){
    $("#task2-table").css("background", "gold")
    $("#task2-table").css("color", "black")
  });
  $("#button-silver").click(function(){
    $("#task2-table").css("background", "silver")
    $("#task2-table").css("color", "black")
  });
});
