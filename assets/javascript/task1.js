/* Put code for the task below */

$(document).ready(function(){
  $("#imageTask1").mouseover(function(){
    $("#buttonTask1").css("display", "inline");
  });
  $("#buttonTask1").click(function(){
    $("#imageTask1").css("display", "none");
  });
});
